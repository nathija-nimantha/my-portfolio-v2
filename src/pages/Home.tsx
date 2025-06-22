import { ArrowRight, Download, Github, ExternalLink } from "lucide-react"
import { Link } from "react-router-dom"
import TypewriterCode from "../components/TypewriterCode"
import useTypewriter from "../components/useTypewriter"

const Home = () => {
  const typewriterText = useTypewriter([
    "Full Stack Developer",
    "UI/UX Designer",
    "Open Source Contributor",
    "Tech Enthusiast"
  ])

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
                Nathija Nimantha
              </span>
            </h1>
            <p className="font-mono text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto min-h-[2.5rem]">
              {typewriterText}
              <span className="caret-blink"></span>
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              I create beautiful, functional, and user-centered digital experiences that solve real-world problems.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/projects"
              className="group flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-full hover:from-primary-600 hover:to-secondary-600 transition-all duration-300 transform hover:scale-105 animate-glow"
            >
              <span>View My Work</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <button className="flex items-center space-x-2 px-8 py-4 backdrop-blur-md bg-white/10 text-white rounded-full hover:bg-white/20 transition-all duration-300 border border-white/20">
              <Download size={20} />
              <span>Download CV</span>
            </button>
          </div>

          <div className="flex justify-center space-x-6 pt-8">
            <a
              href="https://github.com/nathija-nimantha/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full backdrop-blur-md bg-white/10 text-white hover:bg-white/20 hover:text-primary-400 transition-all duration-300 transform hover:scale-110"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/nathija-nimantha/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full backdrop-blur-md bg-white/10 text-white hover:bg-white/20 hover:text-primary-400 transition-all duration-300 transform hover:scale-110"
            >
              <ExternalLink size={24} />
            </a>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-1/4 left-10 w-20 h-20 bg-primary-500/20 rounded-full blur-xl animate-float"></div>
        <div
          className="absolute bottom-1/4 right-10 w-32 h-32 bg-secondary-500/20 rounded-full blur-xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/4 w-16 h-16 bg-primary-400/30 rounded-full blur-lg animate-float"
          style={{ animationDelay: "4s" }}
        ></div>
      </section>

      {/* Animated Code Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-slide-in">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Who Am I?{" "}
              <span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
                Explained in Code
              </span>
            </h2>
            <p className="text-gray-300 text-lg">
              A quick Python breakdown of the developer behind the keyboard
              <br />
              Because resumes are too mainstream.
            </p>
          </div>
          <div className="animate-slide-up">
            <TypewriterCode />
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="backdrop-blur-md bg-white/5 rounded-3xl p-8 md:p-12 border border-white/10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 animate-slide-in">
                <h2 className="text-3xl md:text-4xl font-bold text-white">About Me</h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                  I'm a passionate developer currently studying at the Institute of Computer Engineering Technology
                  (iCET) in Sri Lanka. I specialize in creating digital experiences that are not only beautiful but also
                  functional and user-friendly.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  My journey in tech is driven by curiosity and a love for problem-solving. Whether it's debugging
                  complex code or learning the latest frameworks, I approach every challenge with enthusiasm and
                  determination.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 backdrop-blur-md bg-white/5 rounded-xl">
                    <div className="text-2xl font-bold text-primary-400">20+</div>
                    <div className="text-gray-300">Projects</div>
                  </div>
                  <div className="text-center p-4 backdrop-blur-md bg-white/5 rounded-xl">
                    <div className="text-2xl font-bold text-secondary-400">2+</div>
                    <div className="text-gray-300">Years Learning</div>
                  </div>
                </div>
                <Link
                  to="/about"
                  className="inline-flex items-center space-x-2 text-primary-400 hover:text-primary-300 transition-colors"
                >
                  <span>Learn More</span>
                  <ArrowRight size={18} />
                </Link>
              </div>
              <div className="relative animate-slide-up">
                <div className="w-full h-80 backdrop-blur-md bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-2xl flex items-center justify-center border border-white/10">
                  <div className="text-6xl">👨‍💻</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home