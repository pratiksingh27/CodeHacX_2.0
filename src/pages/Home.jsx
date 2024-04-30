// import logo from "../images/logo.jpeg";
// import { HiOutlineUserGroup } from "react-icons/hi";
import { motion } from 'framer-motion';
import { useEffect, useState } from "react";
import Topbar from '../layouts/Topbar';
const Home = () => {

  const [loading, setLoading] = useState(true);
  const [textIndex, setTextIndex] = useState(0);
  const [typedText, setTypedText] = useState('');
  useEffect(() => {
    const texts = ["Think it","Do it","Make it happen"];
    // Rest of the code...
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulating a 2-second loading delay
    // Autotyping effect
    if (!loading) {
      let index = 0;
      let currentText = texts[textIndex % texts.length]; // Get the current text to type
      const typeWriter = () => {
        if (index < currentText.length) {
          setTypedText(currentText.substring(0, index + 1));
          index++;
          setTimeout(typeWriter, 100); // Adjust typing speed here (milliseconds)
        } else {
          // Move to the next text after typing completes
          setTimeout(() => {
            setTypedText('');
            setTextIndex((prevIndex) => prevIndex + 1);
          }, 1000); // Delay before starting to type the next text
        }
      };
      typeWriter();
    }
    return () => clearTimeout(timer);
  },  [loading, textIndex]);

    return (
        <>
        {/* <div className="flex items-center justify-between gap-2.5 font-medium bg-white rounded-l-lg shadow-sm px-4 py-2 md:hidden">
        <div className="flex justify-center items-center">
        <img src={logo} alt="logo" width={55} className="rounded-full" />
        <span className="text-xl whitespace-pre ml-1">CodeHacX</span>
        </div>
        <HiOutlineUserGroup className="text-slater-100" size={23} />
      </div> */}
      <Topbar/>
        <div style={mainContentStyle} className=" scrollbar-thumb-gray-300 scrollbar-track-gray-100 hover:scrollbar-thumb-gray-400">
        <div>
      {loading ? (
        <div className="h-screen flex items-center justify-center bg-gray-900">
          <div className="animate-pulse text-white text-center">
            <div className="mb-8 sm:mb-12 md:mb-16 lg:mb-20">
              <div className="bg-gray-800 w-64 sm:w-96 h-16 sm:h-20 md:h-24 lg:h-32 mb-4"></div>
              <div className="bg-gray-800 w-80 sm:w-96 h-8 sm:h-10 md:h-12 lg:h-16"></div>
            </div>
            <div className="mb-8 sm:mb-12 md:mb-16 lg:mb-20">
              <div className="bg-gray-800 w-24 sm:w-32 md:w-40 lg:w-48 mx-auto rounded-full"></div>
            </div>
          </div>
        </div>
      ) : (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative bg-gray-900"
        >
          <div className="h-screen flex items-center justify-center">
            <div className="absolute inset-0 z-0">
              <img
                className="w-full h-full object-cover"
                src="https://source.unsplash.com/random"
                alt="Hero Background"
              />
              <div
                className="absolute inset-0 bg-black opacity-50"
              />
            </div>
            <div className="relative z-10 text-white text-center">
              <div className="mb-2 sm:mb-3 md:mb-5 lg:mb-7">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-bold">Welcome to CodeHacX</h1>
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl">&lt;{typedText}/&gt;</p>
              </div>
              <div className="flex justify-center space-x-4">
                    <button 
                      onClick={() => window.open("mailto:codedexorg@gmail.com")}
                      className="bg-transprent border hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                      Send Email
                    </button>
                    <button 
                      onClick={() => window.open("https://linktr.ee/codehacx", "_blank")}
                      className="bg-[#5E5AD9] hover:bg-white hover:text-black/55 text-white font-bold py-2 px-4 rounded"
                    >
                      Join Us
                    </button>
                  </div>
              <div className="mt-2 sm:mt-6 md:mt-8 lg:mt-10">
                <img
                  className="mx-auto rounded-full w-24 sm:w-28 md:w-36 lg:w-48"
                  src="https://source.unsplash.com/random"
                  alt="Profile"
                />
              </div>
              
            </div>
          </div>
        </motion.div>
      )}
    </div>
      
        </div>
        
       
        </>
    )
};
// Inline CSS using the style attribute
const mainContentStyle = {
    // Define your CSS styles here
    padding: '1rem',
    overflowY: 'auto',
    maxHeight: 'calc(100vh - 2rem)', // Adjust according to your layout
    scrollbarWidth: 'thin',
  };
export default Home;