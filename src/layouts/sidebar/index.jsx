import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import logo from "../../images/logo.jpeg";
import { Link, useLocation } from "react-router-dom";
import SubMenu from "./SubMenu";

// import {useMediaQuery} from "react-responsive";
// react icon
import { IoIosArrowBack } from "react-icons/io";
import { SlSettings } from "react-icons/sl";
import { AiOutlineHome } from "react-icons/ai";
import { HiOutlineUserGroup } from "react-icons/hi";
import { BsChatRightDots } from "react-icons/bs";
import { MdOutlineCelebration } from "react-icons/md";
import { HiOutlineDatabase } from "react-icons/hi";
// import { TbReportAnalytics } from "react-icons/tb";
import { useMediaQuery } from "react-responsive";
import { MdMenu } from "react-icons/md";

// function Sidebar() {
//   const location = useLocation();

//   const isActive = (pathname) => {
//     return location.pathname === pathname;
//   };

//   const Sidebar_animation = {
//     open: {
//       width: "16rem",
//       transition: {
//         damping: 40,
//       },
//     },
//     closed: {
//       width: "4rem",
//       transition: {
//         damping: 40,
//       },
//     },
//   };

//   const subMenuList = [
//     {
//       name: "blog",
//       icon: BsChatRightDots,
//       menus: ["read", "write","update"],
//     },
//     {
//       name:"analytics",
//       icon: TbReportAnalytics,
//       menus:["dashboard","realtime","event","timeline"],
//     }
//   ];

//   const [isOpen, setIsOpen] = useState(true);

//   return (
//     <div className="h-screen flex">
//       <motion.div
//       variants={Sidebar_animation}
//       animate={isOpen ? "open" : "closed"}
//       className="bg-white text-gray shadow-xl z-[999] max-w-[16rem] w-[16rem] h-screen overflow-hidden md:relative fixed top-0 left-0"
//     >
//       <div className="flex items-center gap-2.5 font-medium border-b border-slate-300 py-3 mx-3">
//         <img src={logo} alt="logo" width={55} className="rounded-full" />
//         <span className="text-xl whitespace-pre ml-1">CodeHacX</span>
//       </div>

//       <div className="overflow-y-auto max-h-screen-3/4">
//         <div className="flex flex-col">
//           <ul className="whitespace-pre px-2.5 text-[0.9rem] py-5 flex flex-col gap-1 font-medium overflow-x-hidden">
//             <li>
//               <Link to="/" className={`link ${isActive("/") ? "active" : ""}`}>
//                 <AiOutlineHome size={23} className="min-w-max" />
//                 Home
//               </Link>
//             </li>
//             <li>
//               <Link to="/about" className={`link ${isActive("/about") ? "active" : ""}`}>
//                 <HiOutlineUserGroup size={23} className="min-w-max" />
//                 AboutUs
//               </Link>
//             </li>
//             <div className="border-y py-5 border-slate-300">
//               <small className="pl-3 text-slate-500 inline-block">Blog Page</small>
//               {subMenuList?.map((menu) => (
//                 <div key={menu.name} className="flex flex-col gap-1">
//                   <SubMenu data={menu} />
//                 </div>
//               ))}
//             </div>
//             <li>
//               <Link to="/event" className={`link ${isActive("/event") ? "active" : ""}`}>
//                 <HiOutlineDatabase size={23} className="min-w-max" />
//                 Event
//               </Link>
//             </li>
//             <li>
//               <Link to="/setting" className={`link ${isActive("/setting") ? "active" : ""}`}>
//                 <SlSettings size={23} className="min-w-max" />
//                 Setting
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </div>

//       <motion.div
//         animate={
//           isOpen
//             ? {
//                 x: 0,
//                 y: 0,
//                 rotate: 0,
//               }
//             : {
//                 x: -10,
//                 y: 400,
//                 rotate: 180,
//               }
//         }
//         transition={{
//           duration: 0.3,
//         }}
//         onClick={() => setIsOpen(!isOpen)}
//         className="absolute w-fit h-fit z-50 right-1 top-1 cursor-pointer md:block hidden"
//       >
//         <IoIosArrowBack size={25} />
//       </motion.div>
//     </motion.div>
//     </div>
//   );
// }

function Sidebar() {
  const location = useLocation();

  const isActive = (pathname) => {
    return location.pathname === pathname;
  };

  let isTab = useMediaQuery({query:"(max-width:768px)"});

  const [isOpen, setIsOpen] = useState(isTab ? false : true);

  const Sidebar_animation = isTab ? {
    open: {
      x:0,
      width: "16rem",
      transition: {
        damping: 40,
      },
    },
    closed: {
      x:-250,
      width: "0",
      transition: {
        damping: 40,
        delay:0.05,
      },
    },
  }:{
    //system view
    open: {
      width: "16rem",
      transition: {
        damping: 40,
      },
    },
    closed: {
      width: "4rem",
      transition: {
        damping: 40,
      },
    },
  };

  useEffect( () => {
    if(isTab){
      setIsOpen(false)
    }else{
      setIsOpen(true)
    }
  },[isTab]);

  useEffect(()=>{
    isTab && setIsOpen(false);
  },[location])

  const subMenuList = [
    {
      name: "blog",
      icon: BsChatRightDots,
      menus: ["read", "write"],
    },
  ];


  return (
    <>
    <div onClick={()=>setIsOpen(false)} className={`md:hidden fixed inset-0 max-h-screen z-[989] bg-black/50 ${isOpen ? "block" : "hidden"}`}></div>
    <motion.div
      variants={Sidebar_animation}
      animate={isOpen ? "open" : "closed"}
      className="bg-white text-gray shadow-xl z-[999] max-w-[16rem] w-[16rem] h-screen overflow-y-auto md:relative fixed top-0 left-0 scrollbar-thin scrollbar-track-white scrollbar-thumb-slate-100"
    >
      <div className="flex items-center gap-2.5 font-medium border-b border-slate-300 py-3 mx-3">
        <img src={logo} alt="logo" width={55} className="rounded-full" />
        <span className="text-xl whitespace-pre ml-1">CodeHacX</span>
      </div>

      <div className="flex flex-col">
        <ul className="whitespace-pre px-2.5 text-[0.9rem] py-5 flex flex-col gap-1 font-medium overflow-x-hidden">
          <li>
            <Link to="/" className={`link ${isActive("/") ? "active" : ""}`}>
              <AiOutlineHome size={23} className="min-w-max" />
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className={`link ${isActive("/about") ? "active" : ""}`}>
              <HiOutlineUserGroup size={23} className="min-w-max" />
              AboutUs
            </Link>
          </li>

          {/* submenu */}
          {
            (isOpen || isTab) && (
              <div className="border-y py-5 border-slate-300">
              <small className="pl-3 text-slate-500 inline-block">Blog Page</small>
              {subMenuList?.map((menu) => (
                <div key={menu.name} className="flex flex-col gap-1">
                  <SubMenu data={menu} />
                </div>
              ))}
            </div>
            )
          }
         
          <li>
            <Link to="/event" className={`link ${isActive("/event") ? "active" : ""}`}>
              <HiOutlineDatabase size={23} className="min-w-max" />
              Event
            </Link>
          </li>
          <li>
            <Link to="/setting" className={`link ${isActive("/setting") ? "active" : ""}`}>
              <SlSettings size={23} className="min-w-max" />
              Setting
            </Link>
          </li>
        </ul>

        {/* second */}
        {
          isOpen && <div className="flex-1 text-sm z-50 max-h-48 my-auto whitespace-pre w-full font-medium">
            <div className="flex border-y p-4 items-center justify-between border-slate-200">
              <div>
                <p>Courses</p>
                <small>Free For All</small>
              </div>
              <p className="text-teal-500 flex py-1.5 px-3 text-xs bg-teal-50 rounded-xl"><span>Coming soon</span> <MdOutlineCelebration size={16}/></p>
            </div>
          </div>
        }
      </div>

      <motion.div
        animate={
          isOpen
            ? {
                x: 0,
                y: 0,
                rotate: 0,
              }
            : {
                x: -10,
                y: 400,
                rotate: 180,
              }
        }
        transition={{
          duration: 0.3,
        }}
        onClick={() => setIsOpen(!isOpen)}
        className="absolute w-fit h-fit z-50 right-1 top-7 border rounded-full border-black bg-black text-white cursor-pointer md:block hidden"
      >
        <IoIosArrowBack size={25} />
      </motion.div>
    </motion.div>
    <div className="m-3 md:hidden py-5 " onClick={()=>setIsOpen(true)}>
      <MdMenu size={23}/>
    </div>
    </>
    
  );
}

export default Sidebar;


// export default Sidebar;

