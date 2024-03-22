import { Outlet } from "react-router-dom"
import Sidebar from "../Sidebar/Sidebar"
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu"

 
const Root = () => {
  return (
    <div className="flex flex-col md:flex-col lg:flex-row">
      <div className="w-[15%] hidden md:hidden lg:block">
       <Sidebar/>
      </div>
      <div>
        <HamburgerMenu/>
      </div>
      <div className="w-full md:w-full lg:w-[85%]">

      <Outlet/>  
      </div>
      
    </div>
  )
}

export default Root
