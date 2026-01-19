import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { blogArticles } from '../assets/blogArticles'
import { Link } from 'react-router'

const BlogsPage = () => {
  return (
    <>
      <Navbar />

      <main className="px-7 md:px-13 py-5 max-w-6xl mx-auto">
        {/* Page heading */}
        <h1 className="font-bold text-[clamp(1.6rem,4vw,3rem)] mb-10">
          Blogs & Articles
        </h1>

        {/* Blog grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {blogArticles.map(article => (
            <Link
              key={article.id}
              to={`/article/${article.slug}`}
              className="group rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >

              {/* Content */}
              <div className="p-5 flex flex-col gap-3">
                {/* Category */}
                <span className="text-xs font-medium uppercase tracking-wide text-blue-600">
                  {article.category}
                </span>

                {/* Title */}
                <h2 className="font-semibold text-lg leading-snug group-hover:text-blue-600 transition-colors">
                  {article.title}
                </h2>

                {/* Excerpt */}
                <p className="text-sm text-gray-600 line-clamp-3">
                  {article.excerpt}
                </p>

                {/* Meta */}
                <div className="mt-auto flex items-center justify-between text-xs text-gray-500 pt-4">
                  <span>
                    {new Date(article.date).toLocaleDateString()}
                  </span>
                  <span>{article.readTime}</span>
                </div>
              </div>
            </Link>
          ))}
        </section>
      </main>

      <Footer />
    </>
  )
}

export default BlogsPage
