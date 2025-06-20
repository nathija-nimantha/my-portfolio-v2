import type { ReactNode } from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="relative min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 relative z-10">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
