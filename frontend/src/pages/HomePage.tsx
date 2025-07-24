export function HomePage() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        Welcome to Bros Enterprise Web App
      </h1>
      <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
        A modern, scalable enterprise web application built with React.js and Node.js.
        Ready for production with best practices and enterprise-grade architecture.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Modern Frontend</h3>
          <p className="text-gray-600">
            Built with React 18, TypeScript, and Tailwind CSS for a responsive and modern UI.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Robust Backend</h3>
          <p className="text-gray-600">
            Powered by Node.js and Express with TypeScript for type-safe server-side development.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Production Ready</h3>
          <p className="text-gray-600">
            Complete with Docker, CI/CD, testing, and monitoring for enterprise deployment.
          </p>
        </div>
      </div>
    </div>
  )
}
