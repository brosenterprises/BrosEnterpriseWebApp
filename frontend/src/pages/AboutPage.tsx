export function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">About Bros Enterprise</h1>
      <div className="prose prose-lg max-w-none">
        <p className="text-xl text-gray-600 mb-6">
          Bros Enterprise Web App is a cutting-edge platform designed to showcase modern web development practices
          and enterprise-grade architecture patterns.
        </p>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h2>
        <p className="text-gray-600 mb-6">
          To provide a robust, scalable, and maintainable web application foundation that can be adapted
          for various enterprise needs while maintaining high code quality and performance standards.
        </p>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Technology Stack</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Frontend: React 18 with TypeScript and Tailwind CSS</li>
          <li>Backend: Node.js with Express and TypeScript</li>
          <li>Database: PostgreSQL with Prisma ORM</li>
          <li>Authentication: JWT-based authentication</li>
          <li>Testing: Jest and Cypress for comprehensive testing</li>
          <li>DevOps: Docker, GitHub Actions, and automated deployments</li>
        </ul>
      </div>
    </div>
  )
}
