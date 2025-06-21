import { useEffect, useState } from "react"
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react"
import { Link } from "react-router-dom"
import axios from "axios"

interface BlogPost {
  id: string
  url: string
  title: string
  excerpt: string
  content: string
  date: string
  readTime: string
  tags: string[]
  image: string
  featured: boolean
}

interface RawBlogPost {
  id: string
  url: string
  title: string
  content: string
  published: string
  labels: string[]
}

const Blogs = () => {
  const [blogs, setBlogs] = useState<BlogPost[]>([])

  // Access the API key and blog ID from environment variables
  const API_KEY = import.meta.env.VITE_BLOGGER_API_KEY
  const BLOG_ID = import.meta.env.VITE_BLOGGER_BLOG_ID

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get<{ items: RawBlogPost[] }>(
          `https://www.googleapis.com/blogger/v3/blogs/${BLOG_ID}/posts?key=${API_KEY}`
        )
        const posts = response.data.items || []

        // You can optionally mark one as "featured" manually for demo purposes
        const enrichedPosts: BlogPost[] = posts.map((post, index) => ({
          id: post.id,
          url: post.url,
          title: post.title,
          excerpt: post.content.replace(/<[^>]+>/g, "").substring(0, 150) + "...",
          content: post.content,
          date: post.published,
          readTime: `${Math.ceil(post.content.split(" ").length / 200)} min read`,
          tags: post.labels || ["General"],
          image: "/placeholder.svg?height=300&width=500",
          featured: index === 0,
        }))

        setBlogs(enrichedPosts)
      } catch (error) {
        console.error("Error fetching blog posts:", error)
      }
    }

    fetchBlogs()
  }, [
    API_KEY,
    BLOG_ID,
  ])

  const featuredBlogs = blogs.filter((blog) => blog.featured)
  const otherBlogs = blogs.filter((blog) => !blog.featured)

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  useEffect(() => {
    document.title = "Blogs | Nathija Nimantha"
  }, [])

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              My{" "}
              <span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
                Blog
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Thoughts, tutorials, and insights about web development, design, and technology.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredBlogs.length > 0 && (
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto space-y-12">
            <h2 className="text-3xl font-bold text-white text-center animate-slide-in">Featured Posts</h2>
            <div className="space-y-12">
              {featuredBlogs.map((blog, index) => (
                <article
                  key={blog.id}
                  className={`backdrop-blur-md bg-white/5 rounded-3xl p-8 md:p-12 border border-white/10 animate-slide-up hover:bg-white/10 transition-all duration-300`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div
                    className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
                  >
                    <div className={`space-y-6 ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                      <div className="flex flex-wrap gap-2">
                        {blog.tags.map((tag: string) => (
                          <span
                            key={tag}
                            className="flex items-center space-x-1 px-3 py-1 text-sm bg-gradient-to-r from-primary-500/20 to-secondary-500/20 text-primary-300 rounded-full border border-primary-500/30"
                          >
                            <Tag size={12} />
                            <span>{tag}</span>
                          </span>
                        ))}
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white hover:text-primary-400 transition-colors">
                        <Link to={`/blogs/${blog.id}`}>{blog.title}</Link>
                      </h3>
                      <p className="text-gray-300 text-lg leading-relaxed">{blog.excerpt}</p>
                      <div className="flex items-center space-x-6 text-gray-400">
                        <div className="flex items-center space-x-2">
                          <Calendar size={16} />
                          <span>{formatDate(blog.date)}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock size={16} />
                          <span>{blog.readTime}</span>
                        </div>
                      </div>
                      <Link
                        to={`/blogs/${blog.id}`}
                        className="inline-flex items-center space-x-2 text-primary-400 hover:text-primary-300 transition-colors group"
                      >
                        <span>Read More</span>
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                    <div className={`relative ${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                      <div className="relative overflow-hidden rounded-2xl border border-white/10">
                        <img
                          src={blog.image}
                          alt={blog.title}
                          className="w-full h-64 md:h-80 object-cover hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Other Posts */}
      {otherBlogs.length > 0 && (
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto space-y-12">
            <h2 className="text-3xl font-bold text-white text-center animate-slide-in">Recent Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherBlogs.map((blog, index) => (
                <article
                  key={blog.id}
                  className="backdrop-blur-md bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 animate-slide-up group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {blog.tags.slice(0, 2).map((tag: string) => (
                        <span
                          key={tag}
                          className="px-2 py-1 text-xs bg-gradient-to-r from-primary-500/20 to-secondary-500/20 text-primary-300 rounded-full border border-primary-500/30"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-xl font-semibold text-white group-hover:text-primary-400 transition-colors">
                      <Link to={`/blogs/${blog.id}`}>{blog.title}</Link>
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{blog.excerpt}</p>
                    <div className="flex items-center justify-between text-gray-400 text-sm">
                      <div className="flex items-center space-x-2">
                        <Calendar size={14} />
                        <span>{formatDate(blog.date)}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock size={14} />
                        <span>{blog.readTime}</span>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}

export default Blogs
