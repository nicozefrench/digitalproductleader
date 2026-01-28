import Link from 'next/link'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

const articles = [
  {
    title: "Building a Document-First Intelligence System: How I Turned 10,000+ Documents into My AI-Powered Second Brain",
    excerpt: "Drowning in decks, dashboards, and \"final_v7.pptx\"? I built a second brain that gives me exact answers from 10,000+ docs in <2s and saves ~20–25 hours/week—fully local, no cloud.",
    author: "Nicolas Limare",
    date: "October 15, 2025",
    readTime: "1 min read",
    slug: "building-a-document-first-intelligence-system-how-i-turned-10000-documents-into-my-ai-powered-second-brain",
    category: "AI & Innovation"
  },
  {
    title: "La main invisible : Comment les moteurs de recommandation IA réécrivent les choix des utilisateurs",
    excerpt: "Dans cet article, je révèle comment l'évolution des systèmes de recommandation IA transforme radicalement la relation des utilisateurs au choix...",
    author: "Nicolas Limare",
    date: "March 24, 2025",
    readTime: "8 min read",
    slug: "la-main-invisible-comment-les-moteurs-de-recommandation-ia-reecrivent-les-choix-des-utilisateurs-et-guident-secretement-leur-comportement",
    category: "AI & UX"
  },
  {
    title: "Goodbye App Stores: AI Agents Will Create Your App Before You Finish Your Coffee",
    excerpt: "What if the next killer app isn't found in an app store—but created in seconds, precisely for you, by an AI that understands exactly what you need?",
    author: "Nicolas Limare",
    date: "March 10, 2025",
    readTime: "2 min read",
    slug: "goodbye-app-stores-ai-agents-will-create-your-app-before-you-finish-your-coffee",
    category: "AI & Product"
  },
  {
    title: "Beyond the Horizon: Why CEOs struggle to launch Next-Gen digital products and how to overcome It",
    excerpt: "You don't need to be more visionary—you need a navigator. A digital product leader ensures your innovation reaches the right market, at the right time, with the right impact.",
    author: "Nicolas Limare",
    date: "January 23, 2025",
    readTime: "3 min read",
    slug: "beyond-the-horizon-why-ceos-struggle-to-launch-next-gen-digital-products-and-how-to-overcome-it",
    category: "Leadership"
  }
]

export default function BlogPage() {
  return (
    <div className="py-15 md:py-12 sm:py-10">
      <div className="max-w-[1440px] mx-auto px-12 md:px-6 sm:px-4">
        {/* Page Header */}
        <div className="mb-12">
          <h1 className="font-serif font-bold text-[3.5rem] md:text-[2.5rem] sm:text-[2rem] text-[var(--color-dark)] mb-4">
            Thought Leadership
          </h1>
          <p className="text-[var(--color-gray-dark)] text-lg md:text-base max-w-3xl">
            Insights on digital product innovation, AI-driven design, and strategic leadership from two decades of transforming industries.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-2 md:grid-cols-1 gap-8">
          {articles.map((article) => (
            <Card
              key={article.slug}
              className="rounded-[20px] border-[var(--color-gray-border)] hover:shadow-lg transition-all duration-300"
            >
              <CardHeader>
                <Badge className="w-fit mb-4 bg-[var(--color-primary-600)] text-white rounded-full px-4 py-1">
                  {article.category}
                </Badge>
                <h3 className="font-serif font-bold text-[1.5rem] md:text-[1.25rem] text-[var(--color-dark)] leading-tight">
                  {article.title}
                </h3>
              </CardHeader>

              <CardContent>
                <p className="text-[var(--color-gray-dark)] leading-relaxed">
                  {article.excerpt}
                </p>
              </CardContent>

              <CardFooter className="flex flex-col items-start gap-4">
                <div className="flex items-center gap-3 text-sm text-[var(--color-gray)]">
                  <span>{article.author}</span>
                  <span>•</span>
                  <span>{article.date}</span>
                  <span>•</span>
                  <span>{article.readTime}</span>
                </div>

                <Button
                  asChild
                  variant="outline"
                  className="border-[var(--color-primary-600)] text-[var(--color-primary-600)] hover:bg-[var(--color-primary-50)] rounded-[4px]"
                >
                  <Link href={`/blog/${article.slug}`}>
                    Read Article
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
