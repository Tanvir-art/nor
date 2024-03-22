import { useState } from 'react'
import { IoMenuSharp } from "react-icons/io5"; 
import { Link, NavLink } from "react-router-dom"
import { MdOutlineHome } from "react-icons/md";
import { FaRegCircleCheck } from "react-icons/fa6";
import { FaHistory } from "react-icons/fa";
import { GiMuscleUp } from "react-icons/gi";
import { IoIosNotifications } from "react-icons/io";
import { BiSupport } from "react-icons/bi";
import { GrSchedule } from "react-icons/gr";
import { IoSettingsSharp } from "react-icons/io5";

const HamburgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
    const closeMenu = () => {
      setIsOpen(false);
    };
  
    return (
      <div className="lg:hidden">
        {/* Logo */}
        <div className="flex justify-between  items-center bg-[#d39c27] h-[100px] px-6">
          <img src="/images/logo.png" alt="Logo" className="h-8 mr-4" />
          <button
            onClick={toggleMenu}
            type="button"
            className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
            aria-label="Toggle menu"
          >
             <IoMenuSharp className='text-white text-2xl'/>
          </button>
        </div>
  
        {/* Menu items */}
        {isOpen && (
          <div className="absolute top-0 right-0 w-full bg-white shadow-md z-30">
            <button
              onClick={closeMenu}
              className="absolute top-0 right-0 mt-2 mr-4 text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
              aria-label="Close menu"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-6 h-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6.707 7.293a1 1 0 011.414 0L12 10.586l3.293-3.293a1 1 0 111.414 1.414L13.414 12l3.293 3.293a1 1 0 01-1.414 1.414L12 13.414l-3.293 3.293a1 1 0 01-1.414-1.414L10.586 12 7.293 8.707a1 1 0 010-1.414z"
                />
              </svg>
            </button>
                <div className='flex justify-start items-center pl-10 py-6'>

                    <ul className="space-y-4 pt-5  ">
                         <h2 className="text-[12px]">Main</h2>

                         <li >
                              {/* <NavLink  to='/'> <span className="flex items-center gap-3 text-sm"><MdOutlineHome/> Dashboard</span> </NavLink>     */}
                              <NavLink to='/'
                                   className={({ isActive, isPending }) =>
                                        isActive
                                             ? "font-bold text-[#bf5e2c]"
                                             : isPending
                                                  ? " text-[#56585E]"
                                                  : "text-[#56585E]"
                                   }>
                                   <span className="flex items-center gap-3 text-[16px]  "><MdOutlineHome /> Dashboard</span> </NavLink>
                         </li>

                         <li >
                              <NavLink to='/permission'
                                   className={({ isActive, isPending }) =>
                                        isActive
                                             ? "font-bold text-[#bf5e2c]"
                                             : isPending
                                                  ? "pending"
                                                  : "text-[#56585E]"
                                   }
                              > <span className="flex items-center gap-3 text-[16px]  "><FaRegCircleCheck /> Permission Lists</span> </NavLink>
                         </li>

                         <li >
                              <NavLink to={'/a'} className={({ isActive, isPending }) =>
                                   isActive
                                        ? "font-bold text-[#bf5e2c]"
                                        : isPending
                                             ? "pending"
                                             : "text-[#56585E]"
                              } > <span className="flex items-center gap-3 text-[16px]  "><FaHistory />  History</span> </NavLink>
                         </li>

                         <li >
                              <NavLink to={'/b'} className={({ isActive, isPending }) =>
                                   isActive
                                        ? "font-bold text-[#bf5e2c]"
                                        : isPending
                                             ? "pending"
                                             : "text-[#56585E]"
                              }> <span className="flex items-center gap-3 text-[16px]   "> <GiMuscleUp /> Workout</span> </NavLink>
                         </li>

                         <li >
                              <NavLink to={'/c'}
                                   className={({ isActive, isPending }) =>
                                        isActive
                                             ? "font-bold text-[#bf5e2c]"
                                             : isPending
                                                  ? "pending"
                                                  : "text-[#56585E]"
                                   }
                              > <span className="flex items-center gap-3 text-[16px]  "> <GrSchedule /> Schedule</span> </NavLink>
                         </li>



                         <div className="space-y-4 pt-5">
                              <h2 className="text-[12px]">Settings</h2>
                              <li >
                                   <NavLink to={'/c'}
                                        className={({ isActive, isPending }) =>
                                             isActive
                                                  ? "font-bold text-[#bf5e2c]"
                                                  : isPending
                                                       ? "pending"
                                                       : "text-[#56585E]"
                                        }
                                   > <span className="flex items-center gap-3 text-[16px]  "> <IoIosNotifications /> Notification</span> </NavLink>
                              </li>
                              <li >
                                   <NavLink to={'/c'}
                                        className={({ isActive, isPending }) =>
                                             isActive
                                                  ? "font-bold text-[#bf5e2c]"
                                                  : isPending
                                                       ? "pending"
                                                       : "text-[#56585E]"
                                        }
                                   > <span className="flex items-center gap-3 text-[16px]   "> <BiSupport /> Support</span> </NavLink>
                              </li>
                              <li >
                                   <NavLink to={'/c'}
                                        className={({ isActive, isPending }) =>
                                             isActive
                                                  ? "font-bold text-[#bf5e2c]"
                                                  : isPending
                                                       ? "pending"
                                                       : "text-[#56585E]"
                                        }
                                   > <span className="flex items-center gap-3 text-[16px]   "> < IoSettingsSharp /> Settings</span> </NavLink>
                              </li>

                         </div>
                    </ul>
                </div>                          

          </div>
        )}
      </div>
    );
  };


export default HamburgerMenu
