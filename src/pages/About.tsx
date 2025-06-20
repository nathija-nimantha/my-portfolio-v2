import { Code, Palette, Zap, Users, Heart } from "lucide-react"
import { useEffect } from "react"

const About = () => {
  const skills = [
    { icon: Code, title: "Development", description: "Full-stack development using modern web and mobile frameworks." },
    { icon: Palette, title: "Design", description: "Clean and intuitive UI/UX with attention to detail." },
    { icon: Zap, title: "Performance", description: "Optimized, fast, and scalable applications." },
    { icon: Users, title: "Collaboration", description: "Effective team player and open-source contributor." },
  ]

  const experiences = [
    {
      title: "Trainee Software Engineer (Intern)",
      company: "Syigen Pvt Ltd",
      period: "Jan 2025 – Present",
      description:
        "Worked on real‑world software engineering tasks, collaborating with senior developers on solutions using modern tech stacks.",
    },
    {
      title: "Certified Developer",
      company: "iCET Panadura",
      period: "Feb 2024 – Dec 2024",
      description:
        "Completed the iCET Certified Developer (iCD) programme: a 12 – 14‑month full‑stack diploma including 6 months of industrial training, project‑based learning, and career guidance designed to prepare students for life in the software industry.",
    },
    {
      title: "Freelance & Open‑Source Developer",
      company: "Personal Projects",
      period: "2023 – Present",
      description:
        "Built various full‑stack projects including e‑commerce, LMS, order systems, and AI‑powered tools—published on GitHub.",
    },
  ]

  useEffect(() => {
    document.title = "About | Nathija Nimantha"
  }, [])

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              About{" "}
              <span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
                Me
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              I'm Nathija Nimantha — a developer who builds web and mobile apps with a passion for great design and impactful software.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-20">
          {/* Story */}
          <div className="backdrop-blur-md bg-white/5 rounded-3xl p-8 md:p-12 border border-white/10 animate-slide-up">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-white flex items-center space-x-3">
                  <Heart className="text-red-400" />
                  <span>My Story</span>
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                  I'm a student and self-taught developer based in Sri Lanka. I started building software out of curiosity,
                  which quickly grew into a passion for creating solutions that actually help people.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  I now build full-stack apps, contribute to open source, and work with clients as a freelancer.
                  My interests include Generative AI, scalable systems, and great user experiences.
                </p>
              </div>
              <div className="relative">
                <div className="w-full h-80 backdrop-blur-md bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-2xl flex items-center justify-center border border-white/10">
                  <div className="text-8xl">🚀</div>
                </div>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="space-y-12 animate-slide-in">
            <h2 className="text-3xl font-bold text-white text-center">What I Do</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {skills.map(({ icon: Icon, title, description }, index) => (
                <div
                  key={title}
                  className="backdrop-blur-md bg-white/5 rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center">
                      <Icon className="text-white" size={24} />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{title}</h3>
                    <p className="text-gray-300">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className="space-y-12 animate-slide-up">
            <h2 className="text-3xl font-bold text-white text-center">Experience</h2>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="backdrop-blur-md bg-white/5 rounded-2xl p-6 md:p-8 border border-white/10 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                      <p className="text-primary-400">{exp.company}</p>
                    </div>
                    <div className="text-gray-400 mt-2 md:mt-0">{exp.period}</div>
                  </div>
                  <p className="text-gray-300">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
