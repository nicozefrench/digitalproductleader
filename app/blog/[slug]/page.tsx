import { notFound } from 'next/navigation'
import { Badge } from '@/components/ui/badge'
import { getBlogPost, getAllBlogSlugs } from '@/lib/blog'

interface BlogPostPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  const slugs = await getAllBlogSlugs()
  return slugs.map((slug) => ({
    slug,
  }))
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = await getBlogPost(slug)

  if (!post) {
    notFound()
  }

  return (
    <article className="py-15 md:py-12 sm:py-10">
      <div className="max-w-4xl mx-auto px-12 md:px-6 sm:px-4">
        {/* Article Header */}
        <header className="mb-12">
          {post.category && (
            <Badge className="mb-4 bg-[var(--color-primary-600)] text-white rounded-full px-4 py-1">
              {post.category}
            </Badge>
          )}

          <h1 className="font-serif font-bold text-[3.5rem] md:text-[2.5rem] sm:text-[2rem] text-[var(--color-dark)] leading-tight mb-6">
            {post.title}
          </h1>

          <div className="flex items-center gap-4 text-[var(--color-gray)]">
            <span>{post.author}</span>
            <span>•</span>
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
        </header>

        {/* Article Content */}
        <div
          className="prose prose-lg max-w-none
            prose-headings:font-serif prose-headings:text-[var(--color-dark)]
            prose-p:text-[var(--color-gray-dark)] prose-p:leading-relaxed
            prose-a:text-[var(--color-azure)] prose-a:no-underline hover:prose-a:underline
            prose-strong:text-[var(--color-dark)] prose-strong:font-semibold
            prose-ul:text-[var(--color-gray-dark)]
            prose-ol:text-[var(--color-gray-dark)]"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </article>
  )
}
