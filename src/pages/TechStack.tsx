import { Globe } from "lucide-react"
import { useEffect } from "react"
import { categories } from "../data/categoriesData"

const TechStack = () => {

  const getSkillColor = (level: number) => {
    if (level >= 90) return "from-green-500 to-emerald-500"
    if (level >= 80) return "from-blue-500 to-cyan-500"
    if (level >= 70) return "from-yellow-500 to-orange-500"
    return "from-gray-500 to-gray-600"
  }

  useEffect(() => {
    document.title = "Tech Stack | Nathija Nimantha";
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              Tech{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Stack
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Technologies and tools I use to bring ideas to life and create amazing digital experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Tech Stack Overview */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 animate-slide-up">
            {categories.map(({ id, title, icon: Icon, color }, index) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className="backdrop-blur-md bg-white/5 rounded-2xl p-6 border border-white/10 text-center hover:bg-white/10 transition-all duration-300 transform hover:scale-105 w-full"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <Icon className="text-white" size={24} />
                </div>
                <h3 className="text-white font-semibold">{title}</h3>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Tech Stack */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-16">
          {categories.map(({ id, title, icon: Icon, color, technologies }, categoryIndex) => (
            <div key={title} id={id} className="animate-slide-in" style={{ animationDelay: `${categoryIndex * 0.2}s` }}>
              <div className="backdrop-blur-md bg-white/5 rounded-3xl p-8 md:p-12 border border-white/10">
                <div className="flex items-center space-x-4 mb-8">
                  <div className={`w-16 h-16 bg-gradient-to-br ${color} rounded-2xl flex items-center justify-center`}>
                    <Icon className="text-white" size={32} />
                  </div>
                  <h2 className="text-3xl font-bold text-white">{title}</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {technologies.map((tech, techIndex) => (
                    <div
                      key={tech.name}
                      className="backdrop-blur-md bg-white/5 rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 animate-slide-up"
                      style={{ animationDelay: `${categoryIndex * 0.2 + techIndex * 0.1}s` }}
                    >
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-semibold text-white">{tech.name}</h3>
                        <span className="text-blue-400 font-bold">{tech.level}%</span>
                      </div>
                      <p className="text-gray-300 text-sm mb-4">{tech.description}</p>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div
                          className={`h-2 bg-gradient-to-r ${getSkillColor(tech.level)} rounded-full transition-all duration-1000 ease-out`}
                          style={{ width: `${tech.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Learning & Growth */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="backdrop-blur-md bg-white/5 rounded-3xl p-8 md:p-12 border border-white/10 text-center animate-fade-in">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Globe className="text-white" size={40} />
            </div>
            <h2 className="text-3xl font-bold text-white mb-6">Always Learning</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Technology evolves rapidly, and I'm committed to staying current with the latest trends, frameworks, and
              best practices. I regularly explore new technologies and contribute to open-source projects to expand my
              knowledge and give back to the community.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="backdrop-blur-md bg-white/5 rounded-2xl p-6 border border-white/10">
                <div className="text-2xl font-bold text-blue-400 mb-2">50+</div>
                <div className="text-gray-300">Technologies</div>
              </div>
              <div className="backdrop-blur-md bg-white/5 rounded-2xl p-6 border border-white/10">
                <div className="text-2xl font-bold text-purple-400 mb-2">2+</div>
                <div className="text-gray-300">Years Experience</div>
              </div>
              <div className="backdrop-blur-md bg-white/5 rounded-2xl p-6 border border-white/10">
                <div className="text-2xl font-bold text-blue-400 mb-2">50+</div>
                <div className="text-gray-300">Projects Built</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default TechStack