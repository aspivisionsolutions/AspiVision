import services from '/public/services.json';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as Fi from 'react-icons/fi';
import { useEffect } from 'react';
import ProcessTimeline from '../components/ProcessTimeline';
import PageHero from '../components/PageHero';

const Services = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const getIcon = (iconName) => {
    const Icon = Fi[iconName];
    return Icon ? <Icon className="w-6 h-6" /> : null;
  };

  return (
    <section id="about" className="py-16 bg-gradient-to-b from-gray-50 to-white px-4 md:px-16">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 mt-20">
        {/* Services Introduction */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-6"
          >
            Transforming Ideas into Digital Reality
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600 text-lg mb-8"
          >
            At AspiVision Solutions, we offer a comprehensive suite of digital services designed to help businesses thrive in the modern digital landscape. From innovative web development to strategic SEO solutions, our expert team delivers excellence at every step.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Pune-based</span>
            <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">Global Reach</span>
            <span className="px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium">24/7 Support</span>
          </motion.div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col h-full"
            >
              {/* Card Header with Icon */}
              <div className={`${service.color} p-6 h-[200px] flex flex-col justify-start`}>
                <div className="bg-white/10 w-12 h-12 rounded-lg flex items-center justify-center text-white mb-4">
                  {getIcon(service.icon)}
                </div>
                <h2 className="text-2xl font-bold text-white mb-2 leading-tight">{service.title}</h2>
              </div>

              {/* Card Content */}
              <div className="p-6 flex-1 flex flex-col">
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                {/* Features */}
                <div className="space-y-3 flex-1">
                  {service.features.slice(0, 3).map((feature, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + idx * 0.1 }}
                      className="flex items-center space-x-2"
                    >
                      <Fi.FiCheck className="text-green-500 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Read More Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => navigate(`/services/${service.id}`)}
                  className={`w-full py-3 px-6 rounded-lg text-white font-medium mt-6
                    ${service.color} hover:opacity-90 transition-opacity duration-300
                    flex items-center justify-center space-x-2`}
                >
                  <span>Read More</span>
                  <Fi.FiArrowRight />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Why Choose Us Section */}
        <div className="mt-20 mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-6"
          >
            Why Choose AspiVision Solutions?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600 text-lg text-center max-w-3xl mx-auto mb-12"
          >
            We combine technical expertise with creative innovation to deliver solutions that not only meet but exceed your expectations. Our commitment to excellence and customer satisfaction sets us apart.
          </motion.p>
        </div>

        <ProcessTimeline />
      </div>
    </section>
  );
};

export default Services;