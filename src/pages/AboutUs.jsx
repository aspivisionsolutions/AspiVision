import React, { useEffect } from 'react';
import Journey from '../assets/journey.gif';
import { motion } from 'framer-motion';
import * as Fi from 'react-icons/fi';
import Stats from '../components/Stats';

const AboutSection = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section id="about" className="py-16 bg-gradient-to-b from-gray-50 to-white px-4 md:px-16">
      <div className="container mx-auto mt-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-2">
            About AspiVision Solutions
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We build digital experiences that transform businesses and delight users.
          </p>
        </motion.div>

        {/* Company Story */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-gradient-to-br from-white via-indigo-50 to-blue-50 rounded-2xl shadow-xl p-8 md:p-12 mb-16"
        >
          <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 text-center mb-12">Our Journey</h3>
          <div className="flex flex-wrap items-center">
            <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                src={Journey}
                alt="Company journey"
                className="w-[80%] rounded-2xl shadow-2xl mx-auto transform hover:shadow-3xl transition-all duration-300"
              />
            </div>
            <div className="w-full lg:w-1/2 lg:pl-12">
              <div className="space-y-8">
                {[
                  {
                    year: "2023",
                    title: "The Spark of Innovation",
                    description: "A casual conversation turned into a groundbreaking idea—our journey began with a vision to revolutionize the digital space."
                  },
                  {
                    year: "2024",
                    title: "Fueling the Passion",
                    description: "Our founders immersed themselves in mastering cutting-edge technologies, transforming passion into expertise."
                  },
                  {
                    year: "2025",
                    title: "The Birth of a Vision",
                    description: "With knowledge, determination, and an unstoppable drive, we officially launched our firm—setting the foundation for innovation and excellence."
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className="relative pl-8 border-l-2 border-blue-500"
                  >
                    <div className="absolute left-[-9px] top-0 w-4 h-4 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
                    <div className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 text-lg mb-1">{item.year}</div>
                    <h4 className="font-bold text-gray-800 mb-2">{item.title}</h4>
                    <p className="text-gray-600">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <Stats/>

        {/* Mission & Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 rounded-2xl shadow-xl p-8 text-white transform hover:-translate-y-1 transition-all duration-300"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center mr-4">
                <Fi.FiZap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Our Mission</h3>
            </div>
            <p className="text-white/90 leading-relaxed">
              To empower businesses with innovative web solutions that drive growth, enhance user experience, and create lasting digital impact in an ever-evolving technological landscape.
            </p>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 rounded-2xl shadow-xl p-8 text-white transform hover:-translate-y-1 transition-all duration-300"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center mr-4">
                <Fi.FiEye className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Our Vision</h3>
            </div>
            <p className="text-white/90 leading-relaxed">
              To be recognized as the industry leader in creating exceptional web experiences that seamlessly blend innovation, functionality, and aesthetics while setting new standards for digital excellence.
            </p>
          </motion.div>
        </div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-3xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            Our Core Values
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Excellence",
                description: "We pursue excellence in every line of code and pixel of design.",
                icon: <Fi.FiAward className="w-6 h-6" />,
                gradient: "from-blue-500 to-indigo-500"
              },
              {
                title: "Innovation",
                description: "We continuously explore new technologies and methodologies to stay ahead.",
                icon: <Fi.FiBox className="w-6 h-6" />,
                gradient: "from-indigo-500 to-purple-500"
              },
              {
                title: "Integrity",
                description: "We build relationships based on trust, transparency, and ethical practices.",
                icon: <Fi.FiShield className="w-6 h-6" />,
                gradient: "from-purple-500 to-pink-500"
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
              >
                <div className={`bg-gradient-to-r ${value.gradient} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white`}>
                  {value.icon}
                </div>
                <h4 className={`text-xl font-bold mb-4 text-center text-transparent bg-clip-text bg-gradient-to-r ${value.gradient}`}>
                  {value.title}
                </h4>
                <p className="text-gray-600 text-center">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;