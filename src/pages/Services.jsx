import services from '/public/services.json';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as Fi from 'react-icons/fi';
import { useEffect   } from 'react';
import ProcessTimeline from '../components/ProcessTimeline';
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
    <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-12">
      <h1 className="text-4xl font-bold text-center mb-12 mt-20">Our Services</h1>
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

      <ProcessTimeline />
    </div>
  );
};

export default Services;