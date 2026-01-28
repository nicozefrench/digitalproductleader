#!/usr/bin/env python3
"""
Digital Product Leader - Site Mirror Script
Scrapes https://digitalproductleader.com/ and creates a local copy
"""

import os
import sys
import re
import json
from urllib.parse import urljoin, urlparse, unquote
from pathlib import Path
import requests
from bs4 import BeautifulSoup

# Configuration
BASE_URL = "https://digitalproductleader.com/"
OUTPUT_DIR = Path(__file__).parent
ASSETS_DIR = OUTPUT_DIR / "assets"
PAGES_DIR = OUTPUT_DIR / "pages"

# Create directories
ASSETS_DIR.mkdir(exist_ok=True)
PAGES_DIR.mkdir(exist_ok=True)

# Session with headers to mimic browser
session = requests.Session()
session.headers.update({
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
    'Accept-Language': 'en-US,en;q=0.9,fr;q=0.8',
})

# Track downloaded assets and pages
downloaded_assets = {}
downloaded_pages = set()

def sanitize_filename(url):
    """Convert URL to safe filename"""
    parsed = urlparse(url)
    path = parsed.path.strip('/')

    if not path:
        return 'index.html'

    # Clean filename
    filename = path.replace('/', '_').replace(' ', '_')

    # Add .html if no extension
    if not Path(filename).suffix:
        filename += '.html'

    return filename

def download_asset(url):
    """Download asset (image, CSS, JS, font) and return local path"""
    if url in downloaded_assets:
        return downloaded_assets[url]

    try:
        # Skip data URLs
        if url.startswith('data:'):
            return url

        # Make absolute URL
        abs_url = urljoin(BASE_URL, url)

        # Get filename
        parsed = urlparse(abs_url)
        filename = Path(unquote(parsed.path)).name

        if not filename:
            filename = 'asset_' + str(len(downloaded_assets))

        # Ensure unique filename
        base_name = Path(filename).stem
        ext = Path(filename).suffix
        counter = 1
        while (ASSETS_DIR / filename).exists():
            filename = f"{base_name}_{counter}{ext}"
            counter += 1

        local_path = ASSETS_DIR / filename

        # Download
        print(f"  📥 Downloading asset: {filename}")
        response = session.get(abs_url, timeout=30)
        response.raise_for_status()

        local_path.write_bytes(response.content)

        # Store mapping
        relative_path = f"assets/{filename}"
        downloaded_assets[url] = relative_path
        downloaded_assets[abs_url] = relative_path

        return relative_path

    except Exception as e:
        print(f"  ❌ Failed to download {url}: {e}")
        return url

def process_html(html, page_url):
    """Process HTML to download assets and fix links"""
    soup = BeautifulSoup(html, 'html.parser')

    # Download and replace images
    for img in soup.find_all('img'):
        if img.get('src'):
            local_path = download_asset(img['src'])
            img['src'] = local_path

        if img.get('srcset'):
            # Handle srcset
            srcset_parts = []
            for part in img['srcset'].split(','):
                url_descriptor = part.strip().split(' ')
                if url_descriptor[0]:
                    local_path = download_asset(url_descriptor[0])
                    srcset_parts.append(f"{local_path} {' '.join(url_descriptor[1:])}")
            img['srcset'] = ', '.join(srcset_parts)

    # Download CSS files
    for link in soup.find_all('link', rel='stylesheet'):
        if link.get('href'):
            local_path = download_asset(link['href'])
            link['href'] = local_path

    # Download JS files
    for script in soup.find_all('script', src=True):
        local_path = download_asset(script['src'])
        script['src'] = local_path

    # Fix internal links
    for a in soup.find_all('a', href=True):
        href = a['href']

        # Skip external links and anchors
        if href.startswith(('http://', 'https://', 'mailto:', 'tel:', '#')):
            continue

        # Convert internal links to local files
        if href.startswith('/'):
            # Absolute path
            if href == '/':
                a['href'] = 'index.html'
            else:
                a['href'] = f"pages/{sanitize_filename(href)}"
        elif not href.startswith('#'):
            # Relative path
            a['href'] = f"pages/{sanitize_filename(href)}"

    # Extract and download fonts from inline styles
    for style in soup.find_all('style'):
        if style.string:
            # Find font URLs
            font_urls = re.findall(r'url\(["\']?([^"\'()]+)["\']?\)', style.string)
            modified_css = style.string

            for font_url in font_urls:
                if 'font' in font_url.lower() or font_url.endswith(('.woff', '.woff2', '.ttf', '.otf')):
                    local_path = download_asset(font_url)
                    modified_css = modified_css.replace(font_url, local_path)

            style.string = modified_css

    return str(soup)

def download_page(url, output_filename=None):
    """Download a page and process it"""
    if url in downloaded_pages:
        print(f"⏭️  Skipping already downloaded: {url}")
        return

    downloaded_pages.add(url)

    try:
        print(f"\n📄 Downloading page: {url}")

        # Download page
        response = session.get(url, timeout=30)
        response.raise_for_status()

        # Process HTML
        processed_html = process_html(response.text, url)

        # Save page
        if output_filename is None:
            output_filename = sanitize_filename(url)

        if output_filename == 'index.html':
            output_path = OUTPUT_DIR / output_filename
        else:
            output_path = PAGES_DIR / output_filename

        output_path.write_text(processed_html, encoding='utf-8')
        print(f"✅ Saved to: {output_path.relative_to(OUTPUT_DIR)}")

        return processed_html

    except Exception as e:
        print(f"❌ Failed to download {url}: {e}")
        return None

def main():
    """Main scraping function"""
    print("🚀 Digital Product Leader - Site Mirror")
    print(f"📂 Output directory: {OUTPUT_DIR}")
    print("=" * 60)

    # List of pages to download (from the navigation structure)
    pages = [
        ('https://digitalproductleader.com/', 'index.html'),
        ('https://digitalproductleader.com/digital-product-leaders-and-cpo-thought-leadership', None),
        ('https://digitalproductleader.com/about-nicolas-limare-ux-design-innovation-leadership', None),

        # Articles (from homepage)
        ('https://digitalproductleader.com/building-a-document-first-intelligence-system-how-i-turned-10000-documents-into-my-ai-powered-second-brain', None),
        ('https://digitalproductleader.com/la-main-invisible-comment-les-moteurs-de-recommandation-ia-reecrivent-les-choix-des-utilisateurs-et-guident-secretement-leur-comportement', None),
        ('https://digitalproductleader.com/goodbye-app-stores-ai-agents-will-create-your-app-before-you-finish-your-coffee', None),
        ('https://digitalproductleader.com/beyond-the-horizon-why-ceos-struggle-to-launch-next-gen-digital-products-and-how-to-overcome-it', None),
    ]

    # Download all pages
    for url, filename in pages:
        download_page(url, filename)

    # Generate summary
    print("\n" + "=" * 60)
    print("✅ SCRAPING COMPLETE")
    print(f"📄 Pages downloaded: {len(downloaded_pages)}")
    print(f"📦 Assets downloaded: {len(downloaded_assets)}")
    print(f"📂 Output: {OUTPUT_DIR}")
    print("\n💡 To view locally: open index.html in your browser")
    print("💡 To upload to GitHub: Initialize git repo and push")

if __name__ == '__main__':
    try:
        main()
    except KeyboardInterrupt:
        print("\n\n⚠️  Interrupted by user")
        sys.exit(1)
    except Exception as e:
        print(f"\n\n❌ Error: {e}")
        sys.exit(1)
