import React, { useState } from 'react';
import prismImage from './assets/Prism.jpg';
import LogoandName from './assets/Headerimg.jpg';
import img1 from './assets/img1.png';
import img2 from './assets/img2.png';
import img3 from './assets/img3.png';
import logo from './assets/logo.png';
import bg from './assets/bg.jpg';
import ContactForm from './ContactForm';
import Sidebar from './Sidebar';
import { Menu, X, Facebook, Phone, Mail} from 'lucide-react';

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const BusinessOps
  = [
    "Web and Software Development",
    "Integrated Hardware Solutions",
    "Cloud and IT Infrastructure",
    "Process Automation"
  ];

  const BManagement
  = [
    "IT Consulting and Strategy",
    "Regulatory Compliance Solutions",
    "Data Management and Security",
    "Enterprise Resource Planning"
  ];

  const TechSolutions
  = [
    "AI and Smart Automation",
    "Cloud Based Tech",
    "Tech Integration"
  ]

  const ContactIcons = () => {
    return (
      <div className="flex gap-15 justify-center mt-8">
        <a 
          href="https://www.facebook.com/profile.php?id=61574456371379#https://www.facebook.com/profile.php?id=61574456371379#" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 transition-colors"
          aria-label="Facebook"
        >
          <Facebook size={24} />
        </a>
        <a 
          href="tel:0998 594 9539" 
          className="text-green-600 hover:text-green-800 transition-colors"
          aria-label="Call us"
        >
          <Phone size={24} />
        </a>
        <a 
          href="mailto:contactus@newprismsys.com" 
          className="text-red-600 hover:text-red-800 transition-colors"
          aria-label="Email us"
        >
          <Mail size={24} />
        </a>
      </div>
    );
  };
  
  return (
    <div className="w-full relative">
      <nav 
        className="fixed top-0 left-0 w-full shadow-lg z-20 h-20 "
        style={{ 
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat"
        }}
      >
        <div className="mx-auto flex items-center h-full justify-between">
          <img 
            src={logo}  
            alt="Company Logo"
            className="h-full object-contain ml-10"
            style={{ width: '70px' }}
          />
          <h2 className="text-3xl font-bold text-blue-600 mx-auto">
            Thinking Forward, Leading Change
          </h2>
          <button
            onClick={toggleSidebar}
            className="p-2 text-blue-500 hover:text-blue-700 focus-visible:outline-none border-none mr-10"
          >
            {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />


      <section 
        id="home" 
        className="relative h-screen w-screen flex items-center justify-center"
        style={{ backgroundImage: `url(${prismImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="relative z-10 w-[90vw] h-[80vh] max-w-8xl bg-white bg-opacity-20 shadow-2xl overflow-y-auto p-8 flex flex-col md:flex-row justify-center items-center gap-8">

          <div className="w-full md:w-1/3 p-6">
            <div className="flex flex-col items-center">
              <img 
                src={img1}  
                alt="Business Operations"
                className="w-full max-w-[400px] h-auto object-contain mb-4"
              />
              <h3 className="text-4xl font-semibold text-blue-800 mb-4 text-center">Business Operations</h3>
              <ul className="space-y-3 w-full">
                {BusinessOps.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span 
                      className="w-5 h-5 mr-3 ml-18 bg-contain bg-center bg-no-repeat flex-shrink-0 mt-1"
                      style={{ backgroundImage: `url(${logo})` }}
                    ></span>
                    <span className="font-medium text-2xl text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="w-full md:w-1/3 p-6">
            <div className="flex flex-col items-center">
              <img 
                src={img2}  
                alt="Business Management"
                className="w-full max-w-[400px] h-auto object-contain mb-4"
              />
              <h3 className="text-4xl font-semibold text-blue-800 mb-4 text-center">Business Management</h3>
              <ul className="space-y-3 w-full">
                {BManagement.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span 
                      className="w-5 h-5 mr-3 ml-18 bg-contain bg-center bg-no-repeat flex-shrink-0 mt-1"
                      style={{ backgroundImage: `url(${logo})` }}
                    ></span>
                    <span className="font-medium text-2xl text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="w-full md:w-1/3 p-6">
            <div className="flex flex-col items-center">
              <img 
                src={img3}  
                alt="Tech Solutions"
                className="w-full max-w-[400px] h-auto object-contain mb-4"
              />
              <h3 className="text-4xl font-semibold text-blue-800 mb-4 text-center">Tech Solutions</h3>
              <ul className="space-y-3 w-full">
                {TechSolutions.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span 
                      className="w-5 h-5 mr-3 ml-18 bg-contain bg-center bg-no-repeat flex-shrink-0 mt-1"
                      style={{ backgroundImage: `url(${logo})` }}
                    ></span>
                    <span className="font-medium text-2xl text-gray-700 ">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section 
        id="about" 
        className="relative h-screen w-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${prismImage})` }}
      >
        <div className="relative z-10 w-[80vw] h-[80vh] max-w-8xl bg-white bg-opacity-80 shadow-lg overflow-y-auto p-8 md:p-12">
          <div className="h-full flex flex-col justify-center">
          
            <h1 className="text-5xl font-bold text-gray-800 mb-8 text-left">About</h1>
            
            <div className="space-y-6 text-gray-700 text-lg leading-relaxed text-justify">
              <h2 className='text-2xl'>
                New Prism System and Solutions Corp. is a forward-thinking technology company specializing in software development, 
                IT Consulting and Integrated Hardware Solutions.
              </h2>
              
              <h2 className="text-2xl">
                We recognize the challenges businesses face today - rising operational costs, evolving government regulations, 
                and the relentless pace of technology advancement. Businesses face significant challenges in sustaining their products and services, 
                while maintaining the pace of technological advancement and regulatory compliance.
              </h2>
              
              <h2 className="text-2xl">
                Our team of experienced professionals is committed to delivering end-to-end technological solutions that help businesses streamline operations, 
                enhance product and services, reduce non value added processes -  
                while ensuring regulatory compliance and keeping pace in a fast-evolving digital landscape.
              </h2>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="w-full py-16 bg-white">
        <div className='flex justify-center'>
          <div className='flex-1'>
            <img 
              src={LogoandName}  
              alt="Company Logo"
              className="h-full object-contain ml-10"
              style={{ width: '800px' }}
            />
          </div>
          <div className='flex-1'>
            <div className="container mx-auto px-4">
            <ContactForm />
            <ContactIcons />
            </div>
          </div>
        </div>
        
      </section>
    </div>
  );
};

export default App;