import fs from 'fs/promises'
import path from 'path'
import matter from 'gray-matter'

const contentDir = path.join(process.cwd(), 'content/blog')

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  content: string
  author: string
  date: string
  readTime: string
  category?: string
}

export async function getAllBlogSlugs(): Promise<string[]> {
  try {
    const files = await fs.readdir(contentDir)
    return files
      .filter((file) => file.endsWith('.md') || file.endsWith('.mdx'))
      .map((file) => file.replace(/\.(md|mdx)$/, ''))
  } catch (error) {
    return []
  }
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    // Try .md first, then .mdx
    let filePath = path.join(contentDir, `${slug}.md`)
    let fileExists = await fs.access(filePath).then(() => true).catch(() => false)

    if (!fileExists) {
      filePath = path.join(contentDir, `${slug}.mdx`)
      fileExists = await fs.access(filePath).then(() => true).catch(() => false)
    }

    if (!fileExists) {
      return null
    }

    const fileContents = await fs.readFile(filePath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
      slug,
      title: data.title || '',
      excerpt: data.excerpt || '',
      content,
      author: data.author || 'Nicolas Limare',
      date: data.date || '',
      readTime: data.readTime || '',
      category: data.category,
    }
  } catch (error) {
    console.error(`Error reading blog post ${slug}:`, error)
    return null
  }
}

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  const slugs = await getAllBlogSlugs()
  const posts = await Promise.all(
    slugs.map((slug) => getBlogPost(slug))
  )
  return posts.filter((post): post is BlogPost => post !== null)
}
