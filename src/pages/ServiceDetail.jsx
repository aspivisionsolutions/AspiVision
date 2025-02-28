import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as Fi from 'react-icons/fi';
import { useEffect, useState } from 'react';
import services from '/public/services.json';

const ServiceDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for smoother transitions
    window.scrollTo(0, 0);
    setLoading(true);
    const foundService = services.find(s => s.id === id);
    
    if (foundService) {
      document.title = foundService.seo.metaTitle;
      // Update meta description
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', foundService.seo.metaDescription);
      }
      
      // Small delay for loading animation
      setTimeout(() => {
        setService(foundService);
        setLoading(false);
      }, 300);
    } else {
      setLoading(false);
    }
  }, [id]);

  const getColorClass = (colorString) => {
    if (!colorString) return 'bg-blue-600';
    try {
      const baseColor = colorString.split('from-')[1].split('-')[0];
      return {
        bg: `bg-${baseColor}-600`,
        text: `text-${baseColor}-600`,
        border: `border-${baseColor}-600`,
        light: `bg-${baseColor}-100`,
        hover: `hover:bg-${baseColor}-700`
      };
    } catch (e) {
      return {
        bg: 'bg-blue-600',
        text: 'text-blue-600',
        border: 'border-blue-600',
        light: 'bg-blue-100',
        hover: 'hover:bg-blue-700'
      };
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-gray-200 border-t-blue-600 rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading service details...</p>
        </div>
      </div>
    );
  }

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 text-center">
        <Fi.FiAlertCircle className="text-red-500 w-16 h-16 mb-4" />
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Service Not Found</h2>
        <p className="text-gray-600 mb-8 max-w-md">We couldn't find the service you're looking for. It may have been moved or deleted.</p>
        <button
          onClick={() => navigate('/services')}
          className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors flex items-center"
        >
          <Fi.FiArrowLeft className="mr-2" /> Back to Services
        </button>
      </div>
    );
  }

  const colors = getColorClass(service.color);
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with gradient and pattern overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className={`${service.color} text-white relative overflow-hidden`}
      >
        {/* Pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M0 0 L40 0 L40 40 L0 40 Z" fill="none" stroke="currentColor" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-pattern)" />
          </svg>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10">
          <div className="max-w-4xl">
            
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              {service.title}
            </motion.h1>
            
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-xl md:text-2xl opacity-90 max-w-3xl leading-relaxed"
            >
              {service.longDescription}
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <button className={`px-6 py-3 rounded-lg font-medium border-2 border-white bg-transparent hover:bg-white hover:text-purple-600 hover:bg-opacity-10 transition-colors flex items-center`}>
                <Fi.FiMail className="mr-2" /> Contact Us
              </button>
            </motion.div>
          </div>
        </div>
        
        {/* Wave separator */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" fill="white">
            <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
          </svg>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {/* Left Column - Features and Benefits */}
          <div className="lg:col-span-2 space-y-8 md:space-y-12">
            {/* Features Section */}
            <motion.section
              variants={itemVariants}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100"
            >
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-lg ${colors.light} mr-4`}>
                  <Fi.FiLayers className={`${colors.text} w-6 h-6`} />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold">Key Features</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {service.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.05 }}
                    className="flex items-start space-x-3 group"
                  >
                    <div className={`p-2 rounded-full ${colors.light} transition-all duration-300 group-hover:scale-110`}>
                      <Fi.FiCheck className={`${colors.text} w-4 h-4`} />
                    </div>
                    <div>
                      <span className="text-gray-800 font-medium">{feature}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Benefits Section */}
            <motion.section
              variants={itemVariants}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100"
            >
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-lg ${colors.light} mr-4`}>
                  <Fi.FiAward className={`${colors.text} w-6 h-6`} />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold">Benefits</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {service.benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.05 }}
                    className="bg-gray-50 p-4 rounded-xl hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="flex items-start">
                      <div className={`p-2 rounded-full ${colors.light}`}>
                        <Fi.FiStar className={`${colors.text} w-4 h-4`} />
                      </div>
                      <div className="ml-3">
                        <span className="text-gray-800 font-medium">{benefit}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          </div>

          {/* Right Column - Technologies and FAQ */}
          <div className="space-y-8">
            {/* Technologies Section */}
            <motion.section
              variants={itemVariants}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100 top-4"
            >
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-lg ${colors.light} mr-4`}>
                  <Fi.FiCode className={`${colors.text} w-6 h-6`} />
                </div>
                <h2 className="text-2xl font-bold">Technologies</h2>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {service.technologies.map((tech, index) => (
                  <motion.span
                    key={index}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.6 + index * 0.05 }}
                    className={`px-4 py-2 rounded-full text-sm font-medium ${colors.bg} text-white shadow-sm hover:shadow-md transition-all duration-300 cursor-default`}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
              
              <div className="mt-8">
                <h3 className="text-lg font-medium mb-4">Ready to get started?</h3>
                <button 
                  className={`w-full py-3 rounded-lg font-medium ${colors.bg} text-white ${colors.hover} transition-colors shadow-sm hover:shadow-md flex items-center justify-center`}
                >
                  <Fi.FiSend className="mr-2" /> Request a Quote
                </button>
              </div>
            </motion.section>

            {/* FAQ Section */}
            <motion.section
              variants={itemVariants}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100"
            >
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-lg ${colors.light} mr-4`}>
                  <Fi.FiHelpCircle className={`${colors.text} w-6 h-6`} />
                </div>
                <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
              </div>
              
              <div className="space-y-4">
                {service.faq.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                  >
                    <details
                      className="group rounded-xl border border-gray-200 [&_summary::-webkit-details-marker]:hidden overflow-hidden"
                    >
                      <summary className="flex cursor-pointer items-center justify-between px-4 py-4 bg-gray-50 hover:bg-gray-100 transition-colors">
                        <h3 className="font-medium text-gray-900">{item.question}</h3>
                        <span className={`ml-1.5 flex-shrink-0 rounded-full ${colors.bg} p-1.5 text-white sm:p-2`}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 transition duration-300 group-open:-rotate-180"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                      </summary>
                      <div className="px-4 py-4 border-t border-gray-200 bg-white">
                        <p className="text-gray-700 leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    </details>
                  </motion.div>
                ))}
              </div>
            </motion.section>
            
            {/* Testimonial */}
          </div>
        </motion.div>
        
        {/* Call to Action Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className={`mt-16 rounded-2xl p-8 md:p-12 ${colors.bg} text-white text-center relative overflow-hidden`}
        >
          {/* Decorative elements */}
          <div className="absolute inset-0 opacity-10">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="dots-pattern" width="20" height="20" patternUnits="userSpaceOnUse">
                  <circle cx="10" cy="10" r="2" fill="currentColor" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#dots-pattern)" />
            </svg>
          </div>
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl opacity-90 mb-8">Join hundreds of companies that have already benefited from our {service.title} service.</p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-4 bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                Get Started
              </button>
              <button className="px-8 py-4 bg-transparent border-2 border-white rounded-lg font-medium hover:bg-white hover:bg-opacity-10 transition-colors">
                Schedule a Demo
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ServiceDetail;