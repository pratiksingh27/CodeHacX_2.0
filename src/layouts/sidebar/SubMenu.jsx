import { IoIosArrowDown } from "react-icons/io";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const SubMenu = ({ data }) => {
  const location = useLocation();

const isActive = (pathname) => {
    return location.pathname === pathname;
};

const [subMenuOpen, setSubMenuOpen] = useState(false);
  return (
    <>
      <li className={`link ${location.pathname.includes(data.name) && "text-blue-600"}`}
      onClick={() =>setSubMenuOpen(!subMenuOpen)}>
        <data.icon size={23} className="min-w-max" />
        <p className="capitalize flex-1">{data.name}</p>
        <IoIosArrowDown className={`${subMenuOpen && "rotate-180"} duration-200`}/>
      </li>
      <motion.ul 
      animate={
        subMenuOpen ? {
            height:'fit-content',
        }:{
            height:0,
        }
      }
      className="flex flex-col pl-14 text-[0.8rem] font-normal overflow-hidden h-0">
        {data.menus.map((menu) => (
          <li key={menu}>
            {/* <Link to={`/${data.name}/${menu}`} c>
                            {menu}
                        </Link> */}

            <Link
              to={`/${data.name}/${menu}`}
              className={`link !bg-transparent capitalize ${
                isActive(`/${data.name}/${menu}`) ? "active" : ""
              }`}
            >
              {menu}
            </Link>
          </li>
        ))}
      </motion.ul>
    </>
  );
};
export default SubMenu;
