import { useState, useEffect } from "react";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { firestore } from "../../firebaseConfig";
import { CiLocationOn, CiCalendarDate } from "react-icons/ci";
import { RiHomeOfficeLine } from "react-icons/ri";
import { FiClock } from "react-icons/fi";
import { LiaRupeeSignSolid } from "react-icons/lia";


const DisplayBlogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const blogRef = collection(firestore, "Blogs");
    const q = query(blogRef, orderBy("createdat", "asc"));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const updatedBlogs = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setBlogs(updatedBlogs);
    });

    return () => unsubscribe();
  }, []);

  const redirectToUrl = (url) => {
    console.log("Redirecting to:", url);
    window.open(url, "_blank");
  };
  const calculateDaysDifference = (createdat) => {
    // Check if createdat exists and is a valid Timestamp object
    if (!createdat || !createdat.toDate || typeof createdat.toDate !== 'function') {
      return 'Unknown';
    }
  
    const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    const currentDate = new Date();
    const creationDate = createdat.toDate(); // Convert Firestore timestamp to JavaScript Date object
    const differenceInDays = Math.round(
      Math.abs((currentDate - creationDate) / oneDay)
    );
    return differenceInDays;
  };

  return (
    <div>
      <h2>Recent Blogs</h2>
      <div
        style={mainContentStyle}
        className="scrollbar-thumb-gray-300 scrollbar-track-gray-100 hover:scrollbar-thumb-gray-400"
      >
      
      <div className="lg:grid lg:grid-cols-2 gap-1 ">
        {blogs.length === 0 ? (
          <p>No Blogs found</p>
        ) : (
          blogs.slice().reverse().map((blog) => (
            
              <div className="blog-cont flex-wrap lg:flex"  key={blog.id} >
              <div className="w-full shadow-xl flex flex-col hover:backdrop-blur-lg p-4 my-4 mr-4 rounded-lg duration-300 border cursor-pointer">
                <div className="flex justify-between items-center mb-4 py-4">
                  <div>
                    <p className="font-semibold">{blog.title}</p>
                    <span>
                      {blog.company} | {blog.duration}
                    </span>
                  </div>
                  <div>
                    <img
                      className="w-10 mx-auto mt-[-2rem] bg-white rounded-full"
                      src={blog.imgurl}
                      alt="img"
                    />
                  </div>
                </div>
                <div className="flex justify-between gap-x-3">
                  <p className="bg-[#d3d3d3] py-1 px-2 rounded-lg flex font-semibold items-center"><LiaRupeeSignSolid className="mr-1"/>{blog.stipend}</p>
                  {/* <p className="bg-[#d3d3d3] py-1 px-2 rounded-lg flex font-semibold items-center"><FiClock className="mr-1"/>{blog.duration}</p> */}
                  <p className="bg-[#d3d3d3] py-1 px-2 rounded-lg flex font-semibold items-center"><RiHomeOfficeLine className="mr-1"/>{blog.job}</p>
                </div>
                <div  className="flex justify-between mt-4">
                  <div>
                    <p className="flex items-center"><CiCalendarDate />Batch</p>
                    <p className="font-semibold">{blog.start}</p>
                  </div>
                  <div>
                    <p className="flex items-center"><CiLocationOn />Location</p>
                    <p className="font-semibold">{blog.location}</p>
                  </div>
                  {/* <div>
                    <p className="flex items-center"><RiHomeOfficeLine />Job Type</p>
                    <p className="font-semibold">{blog.job}</p>
                  </div> */}
                </div>
                <div className="flex justify-between mt-6">
                  <p className="text-blue">{blog.applyBy}</p>
                  <p className="">
                      Posted {calculateDaysDifference(blog.createdat)}d Ago
                    </p>
                </div>
                {/* Add onClick event to trigger redirection */}
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4" onClick={() => redirectToUrl(blog.redirectUrl)}>
                    Apply Now
                  </button>
              </div>
            </div>
            
          ))
        )}
      </div>
    </div>
    </div>
  );
};

const mainContentStyle = {
  paddingRight: "1rem",
  overflowY: "auto",
  maxHeight: "calc(100vh - 2rem)",
  scrollbarWidth: "thin",
};

export default DisplayBlogs;

