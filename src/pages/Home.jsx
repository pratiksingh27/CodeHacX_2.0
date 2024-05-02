import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Meteors from "../layouts/Component/meteors";
import Loader from "../layouts/Component/LoaderSimple";
import Topbar from "../layouts/Topbar";

const Event = () => {
  const [loading, setLoading] = useState(true);
  const [textIndex, setTextIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  useEffect(() => {
    const texts = ["Think it", "Do it", "Make it happen"];
    // Rest of the code...
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2100); // Simulating a 2-second loading delay
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
            setTypedText("");
            setTextIndex((prevIndex) => prevIndex + 1);
          }, 1000); // Delay before starting to type the next text
        }
      };
      typeWriter();
    }
    return () => clearTimeout(timer);
  }, [loading, textIndex]);

  return (
    <>
      <Topbar />
      <div
        style={mainContentStyle}
        className="scrollbar-thumb-gray-300 scrollbar-track-gray-100 hover:scrollbar-thumb-gray-400"
      >
        <div className="relative h-full w-full overflow-hidden rounded-lg border bg-background md:shadow-xl">
          <Meteors number={30} />
          <div>
            {loading ? (
              <Loader />
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-gray-100 min-h-screen flex flex-col-reverse md:flex-row items-center justify-center px-4 overflow-hidden"
              >
                {/* Text section */}
                <div className="text-center grid items-center md:text-left md:w-1/2 md:pr-8 md:pl-8">
                  <h1 className="text-3xl md:text-5xl/[1.2] font-bold text-gray-800 mb-4">
                    Building a <br></br>
                    <i className="bg-blue-500 border rounded-md ">
                      Community
                    </i>{" "}
                    for <br></br>the Future
                  </h1>
                  <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl">
                    &lt;{typedText}/&gt;
                  </p>
                  <div className="mt-6">
                  <button 
                      onClick={() => window.open("mailto:codedexorg@gmail.com")}
                      className="bg-white text-gray-600 border-2 border-blue-500 hover:border-0 hover:bg-blue-700 hover:text-white font-bold py-2 px-4 rounded mr-2"
                    >
                      Send Email
                    </button>
                    <button
                      onClick={() =>
                        window.open("https://linktr.ee/codehacx", "_blank")
                      }
                      className="bg-blue-700 hover:bg-blue-800 hover:border-blue-700 hover:border-2 text-white font-bold py-2 px-4 rounded"
                    >
                      Join Us
                    </button>
                  </div>
                </div>

                <div
                  className="md:w-1/2 md:pl-8 relative md:flex hidden justify-center items-center h-screen"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 50% 50%, transparent 10%, #000 10%, #000 11%, transparent 11%)",
                    backgroundSize: "20px 20px",
                  }}
                >
                  <div className="absolute top-0 right-0 xl:mt-20 mt-6 mr-12">
                    <img
                      src="https://via.placeholder.com/150"
                      alt="Person"
                      className="w-48 h-24 rounded-xl mb-4"
                    />
                  </div>
                  <div className="absolute top-1/2 transform -translate-y-1/2 left-0 ml-10">
                    <img
                      src="https://via.placeholder.com/150"
                      alt="Brand Logo"
                      className="w-36 h-36 rounded-full mb-4"
                    />
                  </div>
                  <div className="absolute bottom-0 right-0 xl:mb-20 mb-6 mr-12">
                    <img
                      src="https://via.placeholder.com/150"
                      alt="Person"
                      className="w-24 h-48 rounded-xl mb-4"
                    />
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

const mainContentStyle = {
  paddingRight: "0.2rem",
  overflowY: "auto",
  maxHeight: "calc(100vh)",
  scrollbarWidth: "thin",
};

export default Event;
