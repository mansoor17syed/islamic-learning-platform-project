'use client'

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div>
          <h1 className="text-4xl font-extrabold mb-8 text-green-900">About Our Platform</h1>
          
          {/* Mission Statement */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-200">
            <h2 className="text-2xl font-bold text-green-800 mb-4">Our Mission</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              To provide accessible, authentic, and comprehensive Islamic education to Muslims and non-Muslims alike, 
              fostering understanding, spiritual growth, and community connection through modern technology.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-200">
            <h2 className="text-2xl font-bold text-green-800 mb-4">Our Vision</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              To become the leading digital platform for Islamic learning, where people from all walks of life 
              can explore, understand, and practice Islamic teachings in a modern, engaging, and accessible way.
            </p>
          </div>

          {/* Goals */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-200">
            <h2 className="text-2xl font-bold text-green-800 mb-4">Our Goals</h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>Provide authentic Islamic knowledge from reliable sources</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>Make Islamic learning accessible to everyone, anywhere</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>Foster understanding and bridge cultural gaps</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>Support spiritual growth and community building</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>Create an engaging and interactive learning experience</span>
              </li>
            </ul>
          </div>

          {/* Features */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-200">
            <h2 className="text-2xl font-bold text-green-800 mb-4">What We Offer</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-4 bg-green-50 rounded-xl">
                <h3 className="font-semibold text-green-800 mb-2">Quran Learning</h3>
                <p className="text-gray-700">Interactive Quran reading with translations and audio recitations</p>
              </div>
              <div className="p-4 bg-green-50 rounded-xl">
                <h3 className="font-semibold text-green-800 mb-2">Islamic Education</h3>
                <p className="text-gray-700">Comprehensive lessons on Islamic beliefs, history, and practices</p>
              </div>
              <div className="p-4 bg-green-50 rounded-xl">
                <h3 className="font-semibold text-green-800 mb-2">Prayer Guide</h3>
                <p className="text-gray-700">Step-by-step guidance for daily prayers and supplications</p>
              </div>
              <div className="p-4 bg-green-50 rounded-xl">
                <h3 className="font-semibold text-green-800 mb-2">Community Support</h3>
                <p className="text-gray-700">Connect with others on their Islamic learning journey</p>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
            <h2 className="text-2xl font-bold text-green-800 mb-4">Get in Touch</h2>
            <p className="text-gray-700 mb-4">
              Have questions or suggestions? We'd love to hear from you. Reach out to us at:
            </p>
            <a 
              href="mailto:contact@islamiclearningplatform.com" 
              className="text-green-700 hover:text-green-900 underline"
            >
              contact@islamiclearningplatform.com
            </a>
          </div>
        </div>
      </div>
    </div>
  )
} 