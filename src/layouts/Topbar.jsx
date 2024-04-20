import logo from "../images/logo.jpeg";
import { HiOutlineUserGroup } from "react-icons/hi";

export default function Topbar() {
  return (
    <>
    <div className="flex items-center justify-between gap-2.5 font-medium bg-white rounded-l-lg shadow-sm px-4 py-2 md:hidden">
        <div className="flex justify-center items-center">
        <img src={logo} alt="logo" width={55} className="rounded-full" />
        <span className="text-xl whitespace-pre ml-1">CodeHacX</span>
        </div>
        <HiOutlineUserGroup className="text-slater-100" size={23} />
      </div>
    </>
  )
}
