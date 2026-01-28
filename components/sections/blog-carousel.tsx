'use client'

import Link from 'next/link'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'

const articles = [
  {
    title: "Building a Document-First Intelligence System: How I Turned 10,000+ Documents into My AI-Powered Second Brain",
    excerpt: "Drowning in decks, dashboards, and \"final_v7.pptx\"? I built a second brain that gives me exact answers from 10,000+ docs in <2s and saves ~20–25 hours/week—fully local, no cloud. If you own product outcomes, this is the calm after the chaos. Full build + numbers in the article.",
    author: "Nicolas Limare",
    date: "10/15/2025",
    readTime: "1 min read",
    slug: "building-a-document-first-intelligence-system-how-i-turned-10000-documents-into-my-ai-powered-second-brain"
  },
  {
    title: "La main invisible : Comment les moteurs de recommandation IA réécrivent les choix des utilisateurs et guident secrètement leur comportement",
    excerpt: "Dans cet article, je révèle comment l'évolution des systèmes de recommandation IA transforme radicalement la relation des utilisateurs au choix...",
    author: "Nicolas Limare",
    date: "3/24/2025",
    readTime: "8 min read",
    slug: "la-main-invisible-comment-les-moteurs-de-recommandation-ia-reecrivent-les-choix-des-utilisateurs-et-guident-secretement-leur-comportement"
  },
  {
    title: "Goodbye App Stores: AI Agents Will Create Your App Before You Finish Your Coffee",
    excerpt: "What if the next killer app isn't found in an app store—but created in seconds, precisely for you, by an AI that understands exactly what you need before you've finished your first cup of coffee?",
    author: "Nicolas Limare",
    date: "3/10/2025",
    readTime: "2 min read",
    slug: "goodbye-app-stores-ai-agents-will-create-your-app-before-you-finish-your-coffee"
  },
  {
    title: "Beyond the Horizon: Why CEOs struggle to launch Next-Gen digital products and how to overcome It",
    excerpt: "You don't need to be more visionary—you need a navigator. Most CEOs aren't stuck due to a lack of vision—they're trapped by the fear of the unknown. A digital product leader ensures your innovation doesn't get lost at sea but reaches the right market, at the right time, with the right impact with consumer adoption.",
    author: "Nicolas Limare",
    date: "1/23/2025",
    readTime: "3 min read",
    slug: "beyond-the-horizon-why-ceos-struggle-to-launch-next-gen-digital-products-and-how-to-overcome-it"
  }
]

export default function BlogCarousel() {
  const [currentPage, setCurrentPage] = useState(0)
  const articlesPerPage = 2
  const totalPages = Math.ceil(articles.length / articlesPerPage)

  const currentArticles = articles.slice(
    currentPage * articlesPerPage,
    (currentPage + 1) * articlesPerPage
  )

  const handlePrevious = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : totalPages - 1))
  }

  const handleNext = () => {
    setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : 0))
  }

  return (
    <section className="py-15 md:py-12 sm:py-10 bg-white">
      <div className="max-w-[1440px] mx-auto px-12 md:px-6 sm:px-4">
        {/* Articles Grid */}
        <div className="grid grid-cols-2 md:grid-cols-1 gap-8">
          {currentArticles.map((article, index) => (
            <Card
              key={index}
              className="rounded-[20px] border-[var(--color-gray-border)] hover:shadow-lg transition-all duration-300"
            >
              <CardHeader>
                <Badge className="w-fit mb-4 bg-[var(--color-primary-600)] text-white rounded-full px-4 py-1">
                  ARTICLE
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

        {/* Carousel Controls */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <Button
            onClick={handlePrevious}
            variant="ghost"
            size="icon"
            className="rounded-full"
            aria-label="Previous articles"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>

          <div className="flex gap-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentPage
                    ? 'bg-[var(--color-primary-600)] w-8'
                    : 'bg-[var(--color-gray-border)]'
                }`}
                aria-label={`Go to page ${index + 1}`}
              />
            ))}
          </div>

          <Button
            onClick={handleNext}
            variant="ghost"
            size="icon"
            className="rounded-full"
            aria-label="Next articles"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </section>
  )
}
