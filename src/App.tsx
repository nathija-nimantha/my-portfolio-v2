import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import About from "./pages/About"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"
import Blogs from "./pages/Blogs"
// import Certifications from "./pages/Certifications"
import TechStack from "./pages/TechStack"
import SingleBlog from "./pages/SingleBlog"
import "./App.css"
import { useEffect } from "react"
import NotFound from "./pages/NotFound"

function App() {
  useEffect(() => {
    document.title = "Nathija Nimantha"

    const favicon = document.createElement("link")
    favicon.rel = "icon"
    favicon.type = "image/svg+xml"
    favicon.href =
      "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👨‍💻</text></svg>"
    document.head.appendChild(favicon)

    return () => {
      document.head.removeChild(favicon)
    }
  }, [])

  return (
    <BrowserRouter basename="/portfolio">
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="fixed inset-0 bg-dots"></div>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blogs/:id" element={<SingleBlog />} />
            {/* <Route path="/certifications" element={<Certifications />} /> */}
            <Route path="/tech-stack" element={<TechStack />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </div>
    </BrowserRouter>
  )
}

export default App
