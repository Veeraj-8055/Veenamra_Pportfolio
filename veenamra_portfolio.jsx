import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Portfolio() {
  return (
    <div className="bg-gradient-to-br from-slate-100 to-white text-gray-900 min-h-screen">
      {/* Navigation Bar */}
      <nav className="flex items-center justify-between px-10 py-4 bg-white shadow-lg sticky top-0 z-50">
        <h1 className="text-2xl font-bold text-indigo-700">Veenamra Raj</h1>
        <div className="flex gap-6 text-sm font-medium">
          <a href="#projects" className="hover:text-indigo-600 transition">Projects</a>
          <a href="#skills" className="hover:text-indigo-600 transition">Skills</a>
          <a href="#contact" className="hover:text-indigo-600 transition">Contact</a>
        </div>
      </nav>

      <main className="p-8 max-w-6xl mx-auto space-y-12">
        {/* Hero Section */}
        <section className="text-center py-16 rounded-2xl bg-white shadow-xl">
          <motion.h1 
            className="text-5xl font-extrabold text-gray-800"
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }}
          >
            Veenamra Raj
          </motion.h1>
          <p className="text-xl text-gray-600 mt-3">CloudOps & DevOps Engineer</p>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            Automating AWS infrastructure, ensuring uptime, and driving operational excellence across production environments.
          </p>
        </section>

        {/* About Section */}
        <section className="bg-white shadow-lg rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4 text-indigo-700">About Me</h2>
          <p className="text-gray-700 leading-relaxed">
            CloudOps Engineer focused on automating cloud operations, optimizing infrastructure with Python and Terraform, and ensuring system reliability. Skilled in AWS (RDS, IAM, S3), Datadog, Kubernetes, CI/CD pipelines, and alert-based production support. Passionate about writing scalable automation scripts and improving system observability.
          </p>
        </section>

        {/* Projects Section */}
        <section id="projects">
          <h2 className="text-2xl font-bold mb-6 text-indigo-700">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-white border-l-4 border-indigo-400 shadow-sm">
              <CardContent className="p-5">
                <h3 className="text-xl font-semibold">RDS Staging Refresh Validator</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Validates staging RDS refresh from snapshots using Boto3, detects drift, and integrates with Jenkins.
                </p>
                <a href="https://gist.github.com/Veeraj-8055/a5850480f76c9b5ba55db32252901718" target="_blank">
                  <Button variant="default">View Code</Button>
                </a>
              </CardContent>
            </Card>

            <Card className="bg-white border-l-4 border-teal-400 shadow-sm">
              <CardContent className="p-5">
                <h3 className="text-xl font-semibold">S3 Versioning Automation</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Terraform-based compliance enforcement with shell scripting and Boto3 for AWS S3 buckets.
                </p>
                <a href="https://bitbucket.org/tempalert/aws-s3-versioning-remediation/src/master/" target="_blank">
                  <Button variant="default">View Code</Button>
                </a>
              </CardContent>
            </Card>

            <Card className="bg-white border-l-4 border-rose-400 shadow-sm">
              <CardContent className="p-5">
                <h3 className="text-xl font-semibold">KoreWireless Outage Automation</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Real-time alert validation for SIM outages using Datadog, Postman, and JSON API parsing.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-l-4 border-yellow-400 shadow-sm">
              <CardContent className="p-5">
                <h3 className="text-xl font-semibold">GETPOS – POS Enhancements</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Tax logic fixes, AWS S3 log storage, and ERPNext integration using Python + Frappe.
                </p>
                <a href="https://github.com/Veenamra-0246/GETPOS.git" target="_blank">
                  <Button variant="default">View Code</Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="bg-white shadow rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4 text-indigo-700">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm text-gray-800">
            <span className="bg-gray-100 px-4 py-2 rounded-full">AWS (RDS, IAM, S3, CloudTrail, GuardDuty)</span>
            <span className="bg-gray-100 px-4 py-2 rounded-full">Python (Boto3)</span>
            <span className="bg-gray-100 px-4 py-2 rounded-full">Terraform & Shell Scripting</span>
            <span className="bg-gray-100 px-4 py-2 rounded-full">Datadog, CloudWatch, GuardDuty</span>
            <span className="bg-gray-100 px-4 py-2 rounded-full">Kubernetes, Lens</span>
            <span className="bg-gray-100 px-4 py-2 rounded-full">CI/CD – Jenkins, Docker, Bitbucket</span>
            <span className="bg-gray-100 px-4 py-2 rounded-full">SQL (MSSQL, MariaDB)</span>
            <span className="bg-gray-100 px-4 py-2 rounded-full">Monitoring & RCA</span>
            <span className="bg-gray-100 px-4 py-2 rounded-full">JIRA, Git, DBeaver</span>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="bg-white shadow rounded-xl p-6 text-center">
          <h2 className="text-2xl font-bold mb-2 text-indigo-700">Contact</h2>
          <p className="text-gray-700 mb-1">
            Connect with me on <a href="https://www.linkedin.com/in/veenamra-raj" target="_blank" className="text-blue-600 underline">LinkedIn</a>
          </p>
          <p className="text-gray-700">
            View my GitHub profile <a href="https://github.com/Veenamra-0246" target="_blank" className="text-blue-600 underline">here</a>.
          </p>
        </section>
      </main>
    </div>
  );
}
