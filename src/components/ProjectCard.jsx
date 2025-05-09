import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A full-featured online store with cart functionality and payment integration.",
    tags: ["React", "Node.js", "MongoDB"],
    imageUrl: "/images/ecommerce.jpg"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Productivity application with drag-and-drop interface and team collaboration.",
    tags: ["TypeScript", "Firebase", "Material UI"],
    imageUrl: "/images/taskapp.jpg"
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "Custom designed and developed portfolio for a freelance photographer.",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    imageUrl: "/images/portfolio.jpg"
  }
];

export default function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
    >
      <div className="h-48 relative overflow-hidden">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          style={{ objectFit: 'cover', width: '100%', height: '100%' }}
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="bg-indigo-100 text-indigo-800 text-xs px-3 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <button className="mt-4 text-indigo-600 font-medium hover:text-indigo-800 transition-colors">
          View Project →
        </button>
      </div>
    </motion.div>
  );
}