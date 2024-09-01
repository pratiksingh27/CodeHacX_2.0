import logo from "../images/logo.jpeg";
import {Link} from "react-router-dom"

export default function Topbar() {
  return (
    <>
    <div className="flex items-center justify-between gap-2.5 font-medium bg-white rounded-l-lg shadow-sm px-4 py-2 md:hidden">
        <div className="flex justify-center items-center">
        <img src={logo} alt="logo" width={55} className="rounded-full" />
        <span className="text-xl whitespace-pre ml-1">CodeHacX</span>
        </div>
        <nav>
            <ul className="grid grid-cols-2">
                <li className="hover:text-teal-500">
                    <Link to="/event">Event</Link>
                </li>
                <li className="hover:text-teal-500">
                    <Link to="/findevent">Find Event</Link>
                </li>
            </ul>
        </nav>
        
      </div>
    </>
  )
}
