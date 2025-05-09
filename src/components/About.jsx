import { motion } from 'framer-motion';
import CheckCircleIcon from '@mui/icons-material/CheckCircle'; // <-- imported MUI icon

const skills = [
  { name: "JavaScript/TypeScript", level: 75 },
  { name: "React/Next.js", level: 75 },
  { name: "QA Tester", level: 80 },
  { name: "Node.js", level: 80 },
  { name: "CSS/Tailwind", level: 65 },
  { name: "MongoDB", level: 70  },
];

export default function About() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-xl shadow-lg overflow-hidden"
      >
        <div className="md:flex">
          <div className="md:w-2/3 p-8 md:p-12">
            <h2 className="text-3xl font-bold text-indigo-900 mb-6">Career Objectives</h2>
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                To leverage my knowledge and skills in information technology to contribute to innovative projects and provide effective technical solutions. 
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                As a passionate and goal-oriented student, I aim to gain hands-on experience in software development, and software testing while continuously improving my expertise to support the goals of a progressive organization.
              </p>
              <div className="pt-4">
                <h3 className="text-xl font-semibold text-indigo-800 mb-4">Education & Experience</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 text-indigo-500 mt-1 mr-3">•</div>
                    <div>
                      <h4 className="font-medium text-gray-800">B.S. Information Technology - Bulacan State University - Hagonoy Campus</h4>
                      <p className="text-gray-600">A.Y 2021 - Present</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 text-indigo-500 mt-1 mr-3">•</div>
                    <div>
                      <h4 className="font-medium text-gray-800">OJT Web Developer - Bulacan State University - Main Campus</h4>
                      <p className="text-gray-600">2025 - Present</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="md:w-1/3 bg-indigo-50 p-8 md:p-12">
            <h3 className="text-2xl font-semibold text-indigo-900 mb-6">Skills & Expertise</h3>
            <div className="space-y-6">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700 font-medium">{skill.name}</span>
                    <span className="text-indigo-700">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div 
                      className="bg-indigo-600 h-2.5 rounded-full" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <h4 className="text-xl font-semibold text-indigo-900 mb-4">Seminars</h4>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="bg-indigo-100 text-indigo-800 p-2 rounded-full mr-3">
                    <CheckCircleIcon className="text-indigo-600" fontSize="small" />
                  </span>
                  <span className="text-gray-700">Cyber Security - October 03, 2022</span>
                </li>
                <li className="flex items-center">
                  <span className="bg-indigo-100 text-indigo-800 p-2 rounded-full mr-3">
                    <CheckCircleIcon className="text-indigo-600" fontSize="small" />
                  </span>
                  <span className="text-gray-700">Canva Photo Editing - October 05, 2022</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </motion.div>
    </section>
  );
}
