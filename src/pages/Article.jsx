import React, { useMemo } from 'react'
import { useParams } from 'react-router'
import { getArticleBySlug } from '../assets/blogArticles'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Article = () => {
  const { slug } = useParams()

  const article = useMemo(() => {
    if (!slug) return null
    return getArticleBySlug(slug)
  }, [slug])

  return (
    <>
      <Navbar />

      <main className="px-7 md:px-13 py-7 md:py-12 max-w-4xl mx-auto">
        {!article ? (
          <h1 className="font-bold text-[clamp(1.8rem,4vw,3rem)]">
            Article not found
          </h1>
        ) : (
          <article>
            {/* Category */}
            <span className="text-sm font-medium uppercase tracking-wide text-blue-600">
              {article.category}
            </span>

            {/* Title */}
            <h1 className="font-bold text-[clamp(2rem,4vw,3rem)] mt-2 mb-4">
              {article.title}
            </h1>

            {/* Meta info */}
            <div className="flex flex-wrap gap-3 text-sm text-gray-500 mb-6">
              <span>By {article.author}</span>
              <span>•</span>
              <span>{new Date(article.date).toLocaleDateString()}</span>
              <span>•</span>
              <span>{article.readTime}</span>
            </div>

            {/* Featured image */}
            {article.image && (
              <img
                src={article.image}
                alt={article.title}
                className="w-full rounded-xl mb-8 object-cover"
              />
            )}

            {/* Excerpt */}
            {article.excerpt && (
              <p className="text-lg text-gray-600 mb-8 italic">
                {article.excerpt}
              </p>
            )}

            {/* Content */}
            <div className="text-[clamp(1rem,2vw,1.15rem)] leading-relaxed space-y-6">
              {article.content}
            </div>

            {/* Tags */}
            {article.tags?.length > 0 && (
              <div className="mt-10 flex flex-wrap gap-2">
                {article.tags.map(tag => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-sm rounded-full bg-gray-100 text-gray-700"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </article>
        )}
      </main>

      <Footer />
    </>
  )
}

export default Article
