import React from 'react'
import { motion } from 'framer-motion'
import { FiCheckCircle, FiSmile, FiClock, FiTrendingUp } from 'react-icons/fi'

const Stats = () => {
  return (
    <div>
        
        {/* Stats Section */}
          <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8 p-6 mb-10 "
        >
          {[
            { number: "4+", label: "Projects Completed", icon: <FiCheckCircle />, ariaLabel: "View details about our completed projects" },
            { number: "10+", label: "Happy Clients", icon: <FiSmile />, ariaLabel: "Learn about our client satisfaction" },
            { number: "1+", label: "Years Experience", icon: <FiClock />, ariaLabel: "Explore our years of experience" },
            { number: "95%", label: "Success Rate", icon: <FiTrendingUp />, ariaLabel: "Check our project success rate" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300"
              role="article"
              aria-label={stat.ariaLabel}
            >
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 w-12 h-12 rounded-xl flex items-center justify-center text-white mx-auto mb-4">
                {React.cloneElement(stat.icon, { className: "w-6 h-6" })}
              </div>
              <h4 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                {stat.number}
              </h4>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      
    </div>
  )
}

export default Stats
