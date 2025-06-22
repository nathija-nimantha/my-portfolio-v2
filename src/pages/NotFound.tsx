import { Link } from "react-router-dom"
import { ArrowLeft } from "lucide-react"

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-900 text-white text-center p-6 animate-fade-in">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-6">Oops! The page you're looking for doesn't exist.</p>
      <Link
        to="/"
        className="flex items-center gap-2 px-4 py-2 border border-white rounded hover:bg-white hover:text-black transition-colors duration-300"
      >
        <ArrowLeft />
        Go back home
      </Link>
    </div>
  )
}

export default NotFound
