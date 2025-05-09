import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'react-feather';

export default function Navbar({ currentPage, setCurrentPage }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', page: 'home' },
    { label: 'About', page: 'about' },
    { label: 'Projects', page: 'projects' },
    { label: 'Contact', page: 'contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-indigo-900/95 backdrop-blur-sm py-2 shadow-lg' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.page}
                  onClick={() => setCurrentPage(item.page)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all ${currentPage === item.page 
                    ? 'bg-indigo-700 text-white' 
                    : 'text-indigo-200 hover:text-white hover:bg-indigo-800/50'}`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-indigo-200 hover:text-white focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="md:hidden bg-indigo-900/95 backdrop-blur-sm"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => {
                  setCurrentPage(item.page);
                  setIsOpen(false);
                }}
                className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${currentPage === item.page 
                  ? 'bg-indigo-700 text-white' 
                  : 'text-indigo-200 hover:text-white hover:bg-indigo-800/50'}`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
}