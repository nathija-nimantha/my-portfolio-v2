import { Github, Linkedin, Twitter, Mail } from "lucide-react"

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com/nathija-nimantha/", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/nathija-nimantha/", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Mail, href: "mailto:contact@example.com", label: "Email" },
  ]

  return (
    <footer className="relative backdrop-blur-md bg-white/5 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">Nathija Nimantha</h3>
            <p className="text-gray-300 max-w-md">
              Passionate developer creating amazing digital experiences with modern technologies.
            </p>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Connect</h4>
            <div className="flex space-x-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/10 text-white hover:text-primary-400 hover:bg-white/20 transition-all duration-300"
                  aria-label={label}
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 text-center text-gray-300">
          <p>&copy; 2025 Nathija Nimantha. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
