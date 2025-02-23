import React, { useState } from 'react';
import WebsiteDev from '../assets/websiteDev.gif';
import DbManage from '../assets/dbManage.gif';
import seo from '../assets/seo.gif';
import uiux from '../assets/uiux.gif';
import TechnologySlider from '../components/TechnologySlider';


const ServicesSection = () => {
  const [activeTab, setActiveTab] = useState('websiteDev');
  
  const services = {
    websiteDev: {
        title: 'Website Development & Design',
        description: 'Custom websites with visually appealing designs and seamless functionality',
        features: [
            'Responsive and mobile-friendly design',
            'Custom UI components and animations',
            'SEO-friendly development',
            'Optimized performance and accessibility'
        ],
        image: WebsiteDev
    },
    backendDb: {
        title: 'Backend & Database Management',
        description: 'Scalable backend systems and efficient database management solutions',
        features: [
            'Secure and optimized database design',
            'REST & GraphQL API development',
            'Server-side authentication & authorization',
            'Cloud-based storage and scalability'
        ],
        image: DbManage
    },
    seo: {
        title: 'SEO (Search Engine Optimization)',
        description: 'Boost your website’s visibility and search rankings with proven SEO strategies',
        features: [
            'On-page and off-page SEO optimization',
            'Technical SEO and website audit',
            'Keyword research and content strategy',
            'Performance and speed optimization'
        ],
        image: seo
    },
    uiUx: {
        title: 'UI/UX Design',
        description: 'User-centered design solutions that enhance engagement and satisfaction',
        features: [
            'User research & persona development',
            'Wireframing & prototyping',
            'Interactive design systems',
            'Usability testing'
        ],
        image: uiux
    }
};


  return (
    <section id="services" className="py-16 bg-white px-16">
      <div className="container mx-auto px-4 mt-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Our Services</h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive web solutions tailored to your business needs
          </p>
        </div>

        {/* Service Tabs */}
        <div className="flex flex-wrap justify-center mb-8">
          {Object.keys(services).map((key) => (
            <button
              key={key}
              className={`px-6 py-3 mx-2 mb-2 rounded-full transition-all ${
                activeTab === key 
                  ? 'bg-indigo-600 text-white shadow-lg' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setActiveTab(key)}
            >
              {services[key].title}
            </button>
          ))}
        </div>

        {/* Active Service Content */}
        <div className="bg-gray-50 rounded-xl p-8 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center place-items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">{services[activeTab].title}</h3>
              <p className="text-gray-600 mb-6">{services[activeTab].description}</p>
              <ul className="space-y-3">
                {services[activeTab].features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-indigo-600 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="order-first lg:order-last mb-6 lg:mb-0 flex justify-center">
              <img 
                src={services[activeTab].image} 
                alt={services[activeTab].title} 
                className="rounded-lg w-[70%] h-[70%]"
              />
            </div>
          </div>
        </div>

        {/* Process Flow */}
        <div className="mt-20">
          <h3 className="text-2xl font-semibold text-center mb-12">Our Development Process</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {step: 1, title: "Discovery", description: "We understand your goals, audience, and requirements", icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"},
              {step: 2, title: "Design", description: "We create wireframes and prototypes for your approval", icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"},
              {step: 3, title: "Development", description: "We code your solution with the latest technologies", icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"},
              {step: 4, title: "Deployment", description: "We launch your solution and provide ongoing support", icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"}
            ].map((process, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-lg shadow-lg p-6 relative z-10 h-full">
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
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 right-0 w-full h-1 bg-gray-200 z-0">
                    <div className="absolute right-0 -translate-y-1/2 translate-x-1/2 w-4 h-4 rotate-45 border-r border-t border-gray-200 bg-white z-20"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Technologies */}
        <div className="mt-20">
          <h3 className="text-2xl font-semibold text-center mb-8">Technologies We Work With</h3>
          {/* <div className="flex flex-wrap justify-center gap-8 py-6">
            {['React', 'Node.js', 'MongoDB', 'AWS', 'GraphQL', 'Tailwind CSS', 'Next.js', 'Vue.js'].map((tech, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md px-6 py-4 flex items-center">
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mr-3">
                  <span className="font-bold text-indigo-600">{tech.charAt(0)}</span>
                </div>
                <span className="text-gray-800 font-medium">{tech}</span>
              </div>
            ))}
          </div> */}
          <TechnologySlider />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;