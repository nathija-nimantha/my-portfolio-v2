import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

const BLOG_ID = import.meta.env.VITE_BLOG_ID;
const API_KEY = import.meta.env.VITE_API_KEY;

interface BlogPost {
  title: string;
  published: string;
  content: string;
}

const SingleBlog = () => {
  const { id } = useParams()
  const [blog, setBlog] = useState<BlogPost | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await fetch(`https://www.googleapis.com/blogger/v3/blogs/${BLOG_ID}/posts/${id}?key=${API_KEY}`)
        if (!res.ok) {
          throw new Error(`Failed to fetch blog post: ${res.statusText}`)
        }
        const data = await res.json()
        setBlog(data)
      } catch (err) {
        console.error("Error fetching blog:", err)
        setError(err instanceof Error ? err.message : "An unknown error occurred")
      } finally {
        setLoading(false)
      }
    }

    if (id) fetchPost()
  }, [id])

  useEffect(() => {
    if (blog) {
      document.title = `${blog.title} | Nathija Nimantha`
    } else {
      document.title = "Blog | Nathija Nimantha"
    }
  }, [blog])

  if (loading) return <p className="text-white text-center mt-20">Loading...</p>
  if (error) return <p className="text-red-400 text-center mt-20">Error: {error}</p>
  if (!blog) return <p className="text-red-400 text-center mt-20">Blog not found.</p>

  return (
    <div className="max-w-4xl mx-auto p-6 text-white pt-28">
      <h1 className="text-5xl font-bold mb-4">{blog.title}</h1>
      <p className="text-sm text-gray-400 mb-6">
        Published on {new Date(blog.published).toLocaleDateString()}
      </p>
      <div
        className="prose prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: blog.content }}
      />
    </div>
  )
}

export default SingleBlog
