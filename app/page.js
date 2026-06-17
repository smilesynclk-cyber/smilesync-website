export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">
  <img src="/images/logo.png" alt="SmileSync" className="h-8 inline-block mr-2" />
  SmileSync
</h1>
        <nav className="hidden md:flex space-x-8">
          <a href="#" className="text-gray-600 hover:text-blue-600">Features</a>
          <a href="#" className="text-gray-600 hover:text-blue-600">Pricing</a>
          <a href="#" className="text-gray-600 hover:text-blue-600">About</a>
          <a href="#" className="text-gray-600 hover:text-blue-600">Contact</a>
        </nav>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
          Get Demo
        </button>
      </header>

      {/* Hero */}
      <main className="container mx-auto px-6 py-24 text-center">
        <h2 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
          AI-Powered Dental Practice
          <br />
          <span className="text-blue-600">That Learns. Every. Day.</span>
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mt-6">
          SmileSync automates admin, predicts no-shows, and gives you 30% more time with patients.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg hover:bg-blue-700 transition">
            Start Free Trial
          </button>
          <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg text-lg hover:bg-blue-50 transition">
            Watch Demo ▶
          </button>
        </div>
        <p className="mt-8 text-gray-500">⭐ Trusted by 2,500+ clinics in 40+ countries</p>
      </main>

      {/* Features */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold text-center mb-12">Why SmileSync?</h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-sm text-center hover:shadow-md transition">
              <div className="text-5xl mb-4">🤖</div>
              <h4 className="font-bold text-xl mb-2">AI Receptionist</h4>
              <p className="text-gray-600">Self-learning voice AI that handles scheduling and patient queries</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm text-center hover:shadow-md transition">
              <div className="text-5xl mb-4">📊</div>
              <h4 className="font-bold text-xl mb-2">Analytics & Insights</h4>
              <p className="text-gray-600">Predict trends, reduce no-shows, and increase case acceptance</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm text-center hover:shadow-md transition">
              <div className="text-5xl mb-4">🔗</div>
              <h4 className="font-bold text-xl mb-2">200+ Integrations</h4>
              <p className="text-gray-600">Connect with the tools you already use every day</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>© 2026 SmileSync. All rights reserved.</p>
          <p className="text-gray-400 text-sm mt-2">AI-Powered Dental Practice Management</p>
        </div>
      </footer>
    </div>
  );
}