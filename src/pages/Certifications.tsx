import { Award, Calendar, ExternalLink, Download } from "lucide-react"
import { useEffect } from "react"
import { certifications } from "../data/certificationData"

const Certifications = () => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  useEffect(() => {
    document.title = "Certifications | Nathija Nimantha"
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
                Certifications
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Professional certifications that validate my expertise in various technologies and platforms.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-slide-up">
            <div className="backdrop-blur-md bg-white/5 rounded-2xl p-6 border border-white/10 text-center">
              <div className="text-3xl font-bold text-primary-400 mb-2">{certifications.length}</div>
              <div className="text-gray-300">Total Certifications</div>
            </div>
            <div className="backdrop-blur-md bg-white/5 rounded-2xl p-6 border border-white/10 text-center">
              <div className="text-3xl font-bold text-secondary-400 mb-2">6+</div>
              <div className="text-gray-300">Cloud Platforms</div>
            </div>
            <div className="backdrop-blur-md bg-white/5 rounded-2xl p-6 border border-white/10 text-center">
              <div className="text-3xl font-bold text-primary-400 mb-2">2024</div>
              <div className="text-gray-300">Latest Certification</div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div
                key={cert.credentialId}
                className="backdrop-blur-md bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 animate-slide-up group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={cert.image || "/placeholder.svg"}
                    alt={cert.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
                      <Award className="text-white" size={20} />
                    </div>
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white group-hover:text-primary-400 transition-colors mb-2">
                      {cert.title}
                    </h3>
                    <p className="text-primary-400 font-medium">{cert.issuer}</p>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">{cert.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.slice(0, 3).map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 text-xs bg-gradient-to-r from-primary-500/20 to-secondary-500/20 text-primary-300 rounded-full border border-primary-500/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between text-gray-400 text-sm">
                    <div className="flex items-center space-x-2">
                      <Calendar size={14} />
                      <span>{formatDate(cert.date)}</span>
                    </div>
                    <div className="text-xs">ID: {cert.credentialId}</div>
                  </div>
                  <div className="flex space-x-2 pt-2">
                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center space-x-2 px-3 py-2 backdrop-blur-md bg-white/10 text-white rounded-lg hover:bg-white/20 transition-all duration-300 text-sm"
                    >
                      <ExternalLink size={14} />
                      <span>Verify</span>
                    </a>
                    <a
                      href={cert.certificateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center space-x-2 px-3 py-2 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-lg hover:from-primary-600 hover:to-secondary-600 transition-all duration-300 text-sm"
                    >
                      <Download size={14} />
                      <span>Download</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="backdrop-blur-md bg-white/5 rounded-3xl p-8 md:p-12 border border-white/10 text-center animate-fade-in">
            <h2 className="text-3xl font-bold text-white mb-6">Continuous Learning</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              I believe in continuous learning and staying updated with the latest technologies. These certifications
              represent my commitment to professional growth and expertise validation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-full hover:from-primary-600 hover:to-secondary-600 transition-all duration-300 transform hover:scale-105"
              >
                Let's Work Together
              </a>
              <a
                href="/projects"
                className="px-8 py-4 backdrop-blur-md bg-white/10 text-white rounded-full hover:bg-white/20 transition-all duration-300 border border-white/20"
              >
                View My Projects
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Certifications
