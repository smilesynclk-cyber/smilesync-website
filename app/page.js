export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <span className="text-3xl">🦷</span>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
              SmileSync
            </span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-600 hover:text-blue-600 transition">Features</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition">Pricing</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition">About</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition">Contact</a>
          </div>
          <button className="bg-gradient-to-r from-blue-600 to-teal-500 text-white px-6 py-2 rounded-full hover:shadow-lg transition transform hover:scale-105">
            Get Demo
          </button>
        </div>
      </nav>

      {/* Hero Section with Gradient Background */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-teal-50">
        <div className="container mx-auto px-6">
          <div className="max-4xl mx-auto text-center">
            <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              🤖 AI-Powered Dental Management
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Transform Your Dental Practice
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
                With AI That Learns
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-2xl mx-auto mb-10 leading-relaxed">
              SmileSync automates admin, predicts no-shows, and gives you 30% more time with patients. 
              Join 2,500+ clinics already saving time and growing revenue.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-teal-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-50 transition transform hover:scale-105">
                Watch Demo ▶
              </button>
            </div>
            <div className="mt-8 flex items-center justify-center space-x-8 text-gray-500">
              <span>⭐ Trusted by 2,500+ clinics</span>
              <span>🌍 40+ countries</span>
              <span>💯 4.8/5 rating</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features with Icons and Cards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose SmileSync?</h2>
            <p className="text-xl text-gray-600">Everything you need to run a modern dental practice</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-5xl mx-auto">
            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="text-6xl mb-4">🤖</div>
              <h3 className="text-2xl font-bold mb-3">AI Receptionist</h3>
              <p className="text-gray-600 leading-relaxed">Self-learning voice AI that handles scheduling, patient queries, and improves with every call.</p>
              <div className="mt-4 text-blue-600 font-semibold">Learn more →</div>
            </div>
            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="text-6xl mb-4">📊</div>
              <h3 className="text-2xl font-bold mb-3">Analytics & Insights</h3>
              <p className="text-gray-600 leading-relaxed">Predict trends, reduce no-shows by 30%, and increase case acceptance with data-driven insights.</p>
              <div className="mt-4 text-blue-600 font-semibold">Learn more →</div>
            </div>
            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="text-6xl mb-4">🔗</div>
              <h3 className="text-2xl font-bold mb-3">200+ Integrations</h3>
              <p className="text-gray-600 leading-relaxed">Seamlessly connect with imaging systems, payment processors, and all your favorite tools.</p>
              <div className="mt-4 text-blue-600 font-semibold">Learn more →</div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-teal-500">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl font-bold">2,500+</div>
              <div className="text-sm opacity-90">Clinics Worldwide</div>
            </div>
            <div>
              <div className="text-4xl font-bold">30%</div>
              <div className="text-sm opacity-90">Fewer No-Shows</div>
            </div>
            <div>
              <div className="text-4xl font-bold">99.9%</div>
              <div className="text-sm opacity-90">Uptime Guarantee</div>
            </div>
            <div>
              <div className="text-4xl font-bold">4.8/5</div>
              <div className="text-sm opacity-90">User Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-4xl">
          <div className="bg-white p-12 rounded-3xl shadow-lg text-center">
            <div className="text-6xl mb-4">💬</div>
            <p className="text-2xl font-medium text-gray-800 italic mb-6">
              "The AI receptionist paid for itself in the first month. SmileSync has transformed how we manage our practice."
            </p>
            <p className="font-bold text-gray-900">Dr. Sarah Chen</p>
            <p className="text-gray-500">SmileWorks Dental, NYC</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Practice?</h2>
          <p className="text-xl text-gray-600 mb-10">Join thousands of clinics already saving time with SmileSync</p>
          <button className="bg-gradient-to-r from-blue-600 to-teal-500 text-white px-12 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition transform hover:scale-105">
            Start Free Trial
          </button>
          <p className="mt-4 text-gray-400">No credit card required. Cancel anytime.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">🦷 SmileSync</h3>
              <p className="text-gray-400">AI-Powered Dental Practice Management</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Features</a></li>
                <li><a href="#" className="hover:text-white">Pricing</a></li>
                <li><a href="#" className="hover:text-white">Integrations</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Support</a></li>
                <li><a href="#" className="hover:text-white">Sales</a></li>
                <li><a href="#" className="hover:text-white">Partners</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>© 2026 SmileSync. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}