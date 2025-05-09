import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Close, GitHub, Launch } from '@mui/icons-material';
import ProjectCard from './ProjectCard';

const projects = [
  {
    id: 1,
    title: "BulSU Kanban",
    description: "PDO Bulacan State University (BulSU) Kanban  .",
    longDescription: "Bulacan State University (BulSU), the Kanban methodology is used in both software development and project management to improve workflow efficiency, transparency, and collaboration. In projects like the development of the SAKAHANDA digital agriculture system, Kanban helps teams visually track tasks, manage work-in-progress, and deliver results effectively. The Project Management Office (PMO) also applies Kanban principles to oversee infrastructure initiatives, allowing for real-time progress monitoring and bottleneck identification. Through visual boards, WIP limits, collaborative tools, and a commitment to continuous improvement, BulSU enhances its operations across academic and administrative functions.",
    tags: ["React", "Material UI","GSAP", "Tailwind CSS", "Framer Motion"],
    imageUrl: "BulSU Kanban.webp",
    githubUrl: "#",
    liveUrl: "https://pdokanban.web.app/",
    features: [
      "Drag-and-drop interface",
      "Real-time collaboration",
      "Team management",
      "Task categorization",
      "Deadline notifications"
    ]
  },  
  {
    id: 2,
    title: "PMES",
    description: "Performance Management and Evaluation System",
    longDescription: "A collaborative task management application built with TypeScript and Firebase. Features include real-time updates, drag-and-drop task organization, team management, and deadline tracking. The app uses Firebase Authentication for user management and Firestore for real-time data synchronization across devices.",
    tags: ["React", "Material UI","GSAP", "Tailwind CSS", "Framer Motion"],
    imageUrl: "PMES.webp",
    githubUrl: "#",
    liveUrl: "#",
    features: [
      "Responsive gallery layout",
      "Smooth page transitions",
      "Contact form with email integration",
      "Performance optimized",
      "Mobile Responsiveness"
    ]
  },
  {
    id: 3,
    title: "BulSU PIPs",
    description: "Bulacan State University PDO Investment Programming System",
    longDescription: "A performant portfolio website built with Next.js and Tailwind CSS. The site features smooth animations with Framer Motion, lazy-loaded images for olazy-loaded images for optlazy-loaded images for optlazy-loaded images for optlazy-loaded images for optptimal performance, and a contact form with email integration. The design focuses on showcasing visual content with minimal distractions.",
    tags: ["React", "Material UI","GSAP", "Tailwind CSS", "Framer Motion"],
    imageUrl: "BulSU PIPs.webp",
    githubUrl: "#",
    liveUrl: "https://pdo-bulsupips.web.app/",
    features: [
      "Mobile Responsiveness",
      "Username/Email & Password Fields",
      "Show Password",
      "Error Messages",
      "Smooth page transitions"
    ]
  }
];

export default function Home() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8" id="projects">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl font-bold text-indigo-900 dark:text-white mb-8 text-center">Featured Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              onClick={() => openModal(project)}
              className="cursor-pointer"
            >
              <ProjectCard 
                project={project}
                index={index}
              />
            </div>
          ))}
        </div>
      </motion.div>

      {/* Project Modal */}
      <AnimatePresence>
        {isModalOpen && selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              transition={{ type: 'spring', damping: 25 }}
              className="relative bg-white dark:bg-gray-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                aria-label="Close modal"
              >
                <Close className="text-gray-800 dark:text-white" />
              </button>

              {/* Modal content */}
              <div className="p-6">
                {/* Project image */}
                <div className="h-64 md:h-80 rounded-lg overflow-hidden mb-6">
                  <img
                    src={selectedProject.imageUrl}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Project title and links */}
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                    {selectedProject.title}
                  </h3>
                  <div className="flex space-x-4 mt-4 md:mt-0">
                    {selectedProject.githubUrl && (
                      <a
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                      >
                        <GitHub className="mr-2" />
                        Code
                      </a>
                    )}
                    {selectedProject.liveUrl && (
                      <a
                        href={selectedProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                      >
                        <Launch className="mr-2" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>

                {/* Project description */}
                <div className="mb-8">
                  <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">Project Overview</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    {selectedProject.longDescription}
                  </p>
                </div>

                {/* Project features */}
                <div className="mb-8">
                  <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">Key Features</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {selectedProject.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-indigo-600 dark:text-indigo-400 mr-2">•</span>
                        <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies used */}
                <div>
                  <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 px-3 py-1 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}