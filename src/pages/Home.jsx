import React from 'react';
import TestimonialSlider from '../components/TestimonialSlider';
import ProjectCard from '../components/ProjectCard';
import HeroGif from '../assets/download.gif'
import Gif2 from '../assets/gif2.gif'
import TechnologySlider from '../components/TechnologySlider';
import dopahiya from "../assets/dopahiya.png"
import Ecommerce from '../assets/ecommerce.png'
import Ayushdev from '../assets/ayushdev.png'
import { Link } from 'react-router-dom';

const Home = () => {
    // Featured projects data
    const featuredProjects = [
        {
            id: 1,
            title: 'Dopahiya',
            category: 'Blog',
            image: dopahiya,
            description: 'Web application where users can compare specs of different bikes',
            technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'], // Added this required field
            liveLink: 'https://dopahiya.netlify.app', // Added this required field
            completionDate: 'June 2024', // Added this required field
            // Note: 'results' and 'link' fields are not used in the component
        },
        {
            id: 2,
            title: 'KidzWorld',
            category: 'E-commerce',
            image: Ecommerce,
            description: 'Custom online store with inventory management and analytics dashboard',
            technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'], // Added this required field
            liveLink: 'https://mykidzworld.netlify.app', // Added this required field
            completionDate: 'June 2024', // Added this required field
            // Note: 'results' and 'link' fields are not used in the component
        },
        {
            id: 3,
            title: 'Ayush Ghodke Portfolio',
            category: 'Portfolio',
            image: Ayushdev,
            description: 'Custom online store with inventory management and analytics dashboard',
            technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'], // Added this required field
            liveLink: 'https://ayushdeveloper.netlify.app', // Added this required field
            completionDate: 'June 2024', // Added this required field
            // Note: 'results' and 'link' fields are not used in the component
        }
    ];

    // Services data
    const services = [
        {
            title: 'Website Development & Design',
            icon: '🌐',
            description: 'Custom websites with responsive design and seamless user experience',
            link: '/services#website-development'
        },
        {
            title: 'Backend & Database Management',
            icon: '💾',
            description: 'Robust backend solutions and efficient database management for seamless performance',
            link: '/services#backend-database'
        },
        {
            title: 'SEO (Search Engine Optimization)',
            icon: '📈',
            description: 'Improve website visibility and organic traffic with expert SEO strategies',
            link: '/services#seo'
        },
        {
            title: 'UX/UI Design',
            icon: '✨',
            description: 'User-centered design that creates engaging digital experiences',
            link: '/services#design'
        }
    ];


    return (
        <div className="flex flex-col min-h-screen">
            {/* <Navbar /> */}

            {/* Hero Section */}
            <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                <div className="container mx-auto px-6 py-24 max-w-6xl mt-20">
                    <div className="flex flex-col md:flex-row items-center gap-32">
                        <div className="md:w-1/2 mb-12 md:mb-0">
                            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                                Digital Excellence for Forward-Thinking Businesses
                            </h1>
                            <p className="text-xl mb-8">
                                Custom web solutions that drive growth and engagement. We transform your vision into digital reality.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link
                                    to="/portfolio"
                                    className="bg-white text-blue-600 hover:bg-gray-100 font-medium py-3 px-6 rounded-md transition duration-300 text-center"
                                >
                                    View Our Work
                                </Link>
                                <Link
                                    to="/contact"
                                    className="bg-transparent hover:bg-blue-700 text-white border border-white font-medium py-3 px-6 rounded-md transition duration-300 text-center"
                                >
                                    Get Started
                                </Link>
                            </div>
                        </div>
                        <div className="md:w-1/2">
                            <img
                                src={HeroGif}
                                alt="Web development illustration"
                                className="rounded-lg shadow-xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Overview */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-6 max-w-6xl">
                    <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 flex flex-col"
                            >
                                <div className="text-4xl mb-4">{service.icon}</div>
                                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                                <p className="text-gray-600 mb-4 flex-grow">{service.description}</p>
                                <Link
                                    to={service.link}
                                    className="text-blue-600 hover:text-blue-800 font-medium flex items-center mt-auto self-end"
                                >
                                    Learn More
                                    <svg
                                        className="w-4 h-4 ml-1"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        ></path>
                                    </svg>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <div className="py-20 bg-gray-50">
                <h3 className="text-3xl font-bold text-center mb-12">Technologies We Work With</h3>
                <TechnologySlider />
            </div>

            {/* Featured Projects */}
            {/* <section className="py-16">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-4">Featured Projects</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Discover how we've helped businesses achieve their digital goals with custom web solutions.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a 
              href="/portfolio" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md transition duration-300 inline-block"
            >
              View All Projects
            </a>
          </div>
        </div>
      </section> */}

            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900">Featured Projects</h2>
                        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                            Explore some of our recent work and see how we've helped businesses achieve their digital goals.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {featuredProjects.map(project => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>

                    <div className="mt-12 text-center">
                        <Link
                            to="/portfolio"
                            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-300"
                        >
                            View All Projects
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-16 bg-gray-900 text-white">
                <div className="container mx-auto px-6 max-w-6xl">
                    <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
                    <TestimonialSlider />
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-16 bg-blue-50">
                <div className="container mx-auto px-6 max-w-6xl text-center">
                    <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Online Presence?</h2>
                    <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                        Let's discuss how we can help your business achieve its digital goals with
                        custom web solutions designed for growth.
                    </p>
                    <Link
                        to="/contact"
                        className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-md transition duration-300 inline-block"
                    >
                        Request a Free Consultation
                    </Link>
                </div>
            </section>

            {/* <Footer /> */}
        </div>
    );
};

export default Home;
