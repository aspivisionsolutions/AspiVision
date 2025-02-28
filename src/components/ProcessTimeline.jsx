import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import TechnologySlider from './TechnologySlider'

const ProcessTimeline = () => {
  const processSteps = [
    {
      title: "Discovery",
      description: "Understanding your requirements and business goals",
      icon: "M12 4.354a4 4 0 110 5.292V4.354zM15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
    },
    {
      title: "Planning",
      description: "Creating project roadmap and technical architecture",
      icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
    },
    {
      title: "Design",
      description: "Crafting user-friendly interfaces and experiences",
      icon: "M15.232 5.232l3.536 3.536m-2.036-5.036a2.2 2.2 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
    },
    {
      title: "Development",
      description: "Building your solution with cutting-edge tech",
      icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
    },
    {
      title: "Testing",
      description: "Ensuring quality and performance",
      icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
    },
    {
      title: "Review",
      description: "Getting your feedback and making refinements",
      icon: "M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
    },
    {
      title: "Launch",
      description: "Deploying your solution to the world",
      icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
    }
  ]

  return (
    <div className="py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20 md:mb-40 mt-8 md:mt-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">DEVELOPMENT JOURNEY</h2>
          <p className="text-gray-600">From concept to launch: Your success story begins here</p>
        </div>

        {/* Timeline for larger screens */}
        <div className="hidden md:block relative">
          {/* Main Timeline Bar */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-white -translate-y-1/2">
            <motion.div
              className="h-full bg-blue-500"
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
          </div>

          {/* Timeline Points */}
          <div className="grid grid-cols-7 relative">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                {/* Step Number Circle */}
                <motion.div
                  className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center z-10 
                    ${index === 6 ? 'bg-green-500' : 'bg-blue-500'} text-white`}
                  whileHover={{ scale: 1.1 }}
                >
                  {index + 1}
                </motion.div>

                {/* Content - Alternating top/bottom */}
                <div className={`absolute w-32 md:w-40 text-center ${index % 2 === 0 ? '-top-24' : 'top-16'}`}>
                  <h4 className="font-semibold text-base md:text-lg text-gray-800">{step.title}</h4>
                  <p className="text-xs md:text-sm text-gray-600 mt-1">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Timeline for mobile screens */}
        <div className="md:hidden">
          <div className="relative pl-8 border-l-2 border-blue-500">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                className="mb-8 relative"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                {/* Step Number Circle */}
                <motion.div
                  className={`absolute -left-[calc(1rem+1px)] w-8 h-8 rounded-full flex items-center justify-center
                    ${index === 6 ? 'bg-green-500' : 'bg-blue-500'} text-white`}
                  whileHover={{ scale: 1.1 }}
                >
                  {index + 1}
                </motion.div>

                {/* Content */}
                <div className="pl-4">
                  <h4 className="font-semibold text-lg text-gray-800">{step.title}</h4>
                  <p className="text-sm text-gray-600 mt-1">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className="mt-20 md:mt-52"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-center mb-8">
            Technologies We Master
          </h3>
          <TechnologySlider />
        </motion.div>
      </div>
    </div>
  )
}

export default ProcessTimeline