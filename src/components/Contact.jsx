import { useState } from 'react';
import { motion } from 'framer-motion';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CircularProgress from '@mui/material/CircularProgress';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmitError('');

    try {
      const response = await fetch('http://localhost:3000/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Error data:', errorData);
        throw new Error(errorData.message || 'Failed to send message');
      }

      setSubmitSuccess(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitError(error.message || 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

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
            <h2 className="text-3xl font-bold text-indigo-900 mb-6">Get In Touch</h2>

            {submitSuccess ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6"
              >
                <div className="flex items-center">
                  <div className="flex-shrink-0 text-green-400">
                    <CheckCircleIcon />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium text-green-800">Thank you for your message!</h3>
                    <p className="mt-2 text-green-700">I'll get back to you as soon as possible.</p>
                    <button
                      onClick={() => setSubmitSuccess(false)}
                      className="mt-4 text-green-700 hover:text-green-600 font-medium"
                    >
                      Send another message
                    </button>
                  </div>
                </div>
              </motion.div>
            ) : (
              <>
                {submitError && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6"
                  >
                    <p className="text-red-700">{submitError}</p>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 ${errors.name ? 'border-red-300 focus:ring-red-200' : 'border-gray-300 focus:ring-indigo-200'}`}
                    />
                    {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 ${errors.email ? 'border-red-300 focus:ring-red-200' : 'border-gray-300 focus:ring-indigo-200'}`}
                    />
                    {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 ${errors.message ? 'border-red-300 focus:ring-red-200' : 'border-gray-300 focus:ring-indigo-200'}`}
                    ></textarea>
                    {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
                  </div>

                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-indigo-700 hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                    >
                      {isSubmitting ? (
                        <>
                          <CircularProgress size={20} sx={{ color: 'white', marginRight: 1 }} />
                          Sending...
                        </>
                      ) : 'Send Message'}
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>

          <div className="md:w-1/3 bg-indigo-900 text-white p-8 md:p-12">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-medium mb-2">Email</h4>
                <a href="mailto:francisfajardo4303@gmail.com" className="text-indigo-200 hover:text-white transition-colors">
                  francisfajardo4303@gmail.com
                </a>
              </div>
              <div>
                <h4 className="text-lg font-medium mb-2">Phone</h4>
                <a href="tel:+1234567890" className="text-indigo-200 hover:text-white transition-colors">
                  (0951) 346-6563
                </a>
              </div>
              <div>
                <h4 className="text-lg font-medium mb-2">Location</h4>
                <p className="text-indigo-200">San Juan Hagonoy Bulacan</p>
              </div>
              <div>
                <h4 className="text-lg font-medium mb-2">Social Media</h4>
                <div className="flex space-x-4">
                  <a href="#" className="text-indigo-200 hover:text-white transition-colors">
                    <TwitterIcon />
                  </a>
                  <a href="https://github.com/FajardoFranc1s" className="text-indigo-200 hover:text-white transition-colors">
                    <GitHubIcon />
                  </a>
                  <a href="https://www.linkedin.com/in/francis-fajardo-524465362/" className="text-indigo-200 hover:text-white transition-colors">
                    <LinkedInIcon />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
