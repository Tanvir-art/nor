import { Link, NavLink } from "react-router-dom"
import { MdOutlineHome } from "react-icons/md";
import { FaRegCircleCheck } from "react-icons/fa6";
import { FaHistory } from "react-icons/fa";
import { GiMuscleUp } from "react-icons/gi";
import { IoIosNotifications } from "react-icons/io";
import { BiSupport } from "react-icons/bi";
import { GrSchedule } from "react-icons/gr";
import { IoSettingsSharp } from "react-icons/io5";


const Sidebar = () => {
     return (
          <div className=" border-r h-[690px] bg-white" >
               <div>
                    {/* logo */}
                    <Link to={'/'}>
                    <img className="w-full" src="/images/profil.png" alt="Logo" />
                    </Link>
               </div>

               <div className="flex justify-center  border-t border-b w-full h-[520px] ">
                    {/* menu */}
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

               <div className="pt-3">
                    <div className="flex justify-evenly items-center ">
                         {/* footerr */}
                         <div>
                              <img src=" /images/rectangle.png" alt="footer logo" />
                         </div>
                         <div>
                              <h2 className="text-sm font-semibold text-[#56585ECC]">Bella Noora(Admin)</h2>
                              <p className="text-[12px] font-thin ">bella.noora@gmail.com</p>
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default Sidebar
