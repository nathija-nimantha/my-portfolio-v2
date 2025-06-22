import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { ArrowLeft } from "lucide-react";

const BLOG_ID = import.meta.env.VITE_BLOG_ID;
const API_KEY = import.meta.env.VITE_API_KEY;

interface BlogPost {
  title: string;
  published: string;
  content: string;
  url: string;
}

const SingleBlog = () => {
  const { id } = useParams()
  const [blog, setBlog] = useState<BlogPost | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [shareSuccess, setShareSuccess] = useState(false)
  const [showSharePopup, setShowSharePopup] = useState(false)

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

  const handleShare = () => {
    setShowSharePopup(true)
  }

  const handleCopyLink = async () => {
    const url = blog?.url || window.location.href
    try {
      await navigator.clipboard.writeText(url)
      setShareSuccess(true)
      setTimeout(() => setShareSuccess(false), 2000)
    } catch (err) {
      console.error("Failed to copy to clipboard:", err)
      const tempInput = document.createElement('input')
      tempInput.value = url
      document.body.appendChild(tempInput)
      tempInput.select()
      document.execCommand('copy')
      document.body.removeChild(tempInput)
      setShareSuccess(true)
      setTimeout(() => setShareSuccess(false), 2000)
    }
  }

  const shareToFacebook = () => {
    const url = encodeURIComponent(blog?.url || window.location.href)
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      '_blank',
      'width=600,height=500'
    )
  }

  const shareToTwitter = () => {
    const blogUrl = blog?.url || window.location.href
    const text = encodeURIComponent(`📖 Just read: "${blog?.title || "Check out this blog post"}" by @NathijaNimantha\n\n${blogUrl}\n\n#blog #tech #reading`)
    window.open(`https://twitter.com/intent/tweet?text=${text}`, '_blank', 'width=600,height=400')
  }

  const shareToWhatsApp = () => {
    const blogUrl = blog?.url || window.location.href
    const text = encodeURIComponent(`📖 *${blog?.title || "Check out this blog post"}*\n\nBy Nathija Nimantha\n\nI thought you might find this interesting!\n\n${blogUrl}`)
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank')
  }

  const shareToLinkedIn = () => {
    const url = encodeURIComponent(blog?.url || window.location.href)
    const title = encodeURIComponent(blog?.title || "Check out this blog post")
    const summary = encodeURIComponent(`Insightful blog post by Nathija Nimantha. Worth reading!`)
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}&title=${title}&summary=${summary}`, '_blank', 'width=600,height=500')
  }

  const shareToTelegram = () => {
    const blogUrl = blog?.url || window.location.href
    const text = encodeURIComponent(`\n📖 *${blog?.title || "Check out this blog post"}*\n\nBy Nathija Nimantha\n\n#blog #reading`)
    window.open(`https://t.me/share/url?url=${blogUrl}&text=${text}`, '_blank')
  }

  if (loading) return <p className="text-white text-center mt-20">Loading...</p>
  if (error) return <p className="text-red-400 text-center mt-20">Error: {error}</p>
  if (!blog) return <p className="text-red-400 text-center mt-20">Blog not found.</p>

  return (
    <div className="max-w-4xl mx-auto p-6 text-white pt-28">
      {/* Blog Header */}
      <div className="mb-8">
        <h1 className="text-5xl font-bold mb-4 leading-tight">{blog.title}</h1>
        <div className="flex items-center gap-4 text-gray-400 text-sm">
          <span>Published on {new Date(blog.published).toLocaleDateString()}</span>
          <span>•</span>
          <span>By Nathija Nimantha</span>
        </div>
      </div>

      {/* Blog Content */}
      <article className="mb-12">
        <div
          className="prose prose-invert max-w-none prose-lg"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
      </article>

      {/* Share Section */}
      <div className="border-t border-gray-700 pt-8 mt-12">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <h3 className="text-xl font-semibold mb-2">Share this post</h3>
            <p className="text-gray-400 text-sm">Found this interesting? Share it with others!</p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={handleShare}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center gap-2 shadow-lg hover:shadow-xl"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
                />
              </svg>
              Share
            </button>
          </div>
        </div>
      </div>

      {/* Share Popup */}
      {showSharePopup && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setShowSharePopup(false)}
        >
          <div
            className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 max-w-md w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-white">Share this post</h3>
              <button
                onClick={() => setShowSharePopup(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-6">
              {/* Facebook */}
              <button
                onClick={shareToFacebook}
                className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-200 text-white"
              >
                <div className="w-8 h-8 bg-[#1877F2] rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </div>
                <span className="font-medium">Facebook</span>
              </button>

              {/* Twitter */}
              <button
                onClick={shareToTwitter}
                className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-200 text-white"
              >
                <div className="w-8 h-8 bg-[#1DA1F2] rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </div>
                <span className="font-medium">Twitter</span>
              </button>

              {/* WhatsApp */}
              <button
                onClick={shareToWhatsApp}
                className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-200 text-white"
              >
                <div className="w-8 h-8 bg-[#25D366] rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                  </svg>
                </div>
                <span className="font-medium">WhatsApp</span>
              </button>

              {/* LinkedIn */}
              <button
                onClick={shareToLinkedIn}
                className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-200 text-white"
              >
                <div className="w-8 h-8 bg-[#0077B5] rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </div>
                <span className="font-medium">LinkedIn</span>
              </button>

              {/* Telegram */}
              <button
                onClick={shareToTelegram}
                className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-200 text-white"
              >
                <div className="w-8 h-8 bg-[#0088CC] rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                  </svg>
                </div>
                <span className="font-medium">Telegram</span>
              </button>

              {/* Copy Link */}
              <button
                onClick={handleCopyLink}
                className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-200 text-white col-span-2"
              >
                <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                    <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" />
                  </svg>
                </div>
                <span className="font-medium">Copy Link</span>
                {shareSuccess && (
                  <span className="text-green-400 text-sm ml-auto">Copied!</span>
                )}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Back to Blog Link */}
      <div className="text-center mt-12 pt-8 border-t border-gray-700">
        <a
          href="/blogs"
          className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-full hover:bg-blue-500 transition-colors duration-200"
        >
          <ArrowLeft size={16} />
          Back to all posts
        </a>
      </div>
    </div>
  )
}

export default SingleBlog
