import React from 'react'
import TechnologySlider from './TechnologySlider'

const ProcessTimeline = () => {
  const processSteps = [
    {step: 1, title: "Discovery", description: "We understand your goals, audience, and requirements", icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"},
    {step: 2, title: "Design", description: "We create wireframes and prototypes for your approval", icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"},
    {step: 3, title: "Development", description: "We code your solution with the latest technologies", icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"},
    {step: 4, title: "Deployment", description: "We launch your solution and provide ongoing support", icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"}
  ]
  return (
    <div>
    <div className="mb-20">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">Our Development Process</h3>
            
            {/* Mobile Timeline (vertical) */}
            <div className="md:hidden space-y-8">
              {processSteps.map((process, index) => (
                <div key={index} className="relative pl-12">
                  <div className="absolute left-0 top-0 flex items-center justify-center w-8 h-8 rounded-full bg-indigo-600 text-white font-bold text-lg">
                    {process.step}
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="absolute left-4 top-8 w-0.5 h-16 bg-indigo-200"></div>
                  )}
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                      <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={process.icon} />
                      </svg>
                    </div>
                    <h4 className="text-xl font-semibold mb-2">{process.title}</h4>
                    <p className="text-gray-600">{process.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Desktop Timeline (horizontal) */}
            <div className="hidden md:grid grid-cols-4 gap-6">
              {processSteps.map((process, index) => (
                <div key={index} className="relative">
                  <div className="bg-white rounded-lg shadow-md p-6 relative z-10 h-full">
                    <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={process.icon} />
                      </svg>
                    </div>
                    <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-lg">
                      {process.step}
                    </div>
                    <h4 className="text-xl font-semibold mb-2">{process.title}</h4>
                    <p className="text-gray-600">{process.description}</p>
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="absolute top-1/2 right-0 w-full h-0.5 bg-indigo-200 z-0">
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-3 h-3 rotate-45 border-r border-t border-indigo-200 bg-white z-20"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">Technologies We Work With</h3>
            <TechnologySlider />
          </div>
        </div>
  )
}

export default ProcessTimeline