import { useEffect, useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { FiEdit } from "react-icons/fi";
import { IoMdSearch } from "react-icons/io";
import { IoEyeOutline } from "react-icons/io5";
import { MdDashboardCustomize, MdDeleteOutline } from "react-icons/md";
interface User {
    id: number;
    image: string;
    name: string;
    age: number;
    email: string;
    phone: string;
    role: string;
    date_joined: string;
    status: string;
}


const ResponsiveHome = () => {
    const [userData, setUserData] = useState<User[]>([]);
    const [value, setValue] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/data/data.json');
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                setUserData(data.users);

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);
    return (
        <div>

            <div className="flex justify-between px-4 py-3">
                <div>
                    <h2 className="text-[12px] font-semibold">Welcome,</h2>
                    <h2 className="text-[#d5a02b] text-lg font-semibold">Bella Noora</h2>
                </div>
                <div>
                    {/* total */}
                    <h2 className="text-[12px] font-semibold text-[#e1ad2b]">{userData.length}   <span className="text-[#56585E] text-[12px]">Total Number of Users</span></h2>

                </div>
            </div>

            <div className="flex justify-between mx-4 my-3">

                <div className=" relative w-[50%] md:w-[65%] flex gap-4 ">
                    <div className="absolute top-2 left-3 "><IoMdSearch className="text-[25px] text-[#56585E]" /></div>
                    <input type="text"
                        value={value}
                        onChange={(e) => { setValue(e.target.value) }}
                        placeholder="Search by Phone or Name"
                        className="w-full bg-white bg-opacity-50 rounded border border-[#d5a02b] focus:ring-2 focus:ring-[#d5a02b] focus:bg-transparent focus:border-[#d5a02b] text-base outline-none text-gray-700 px-3 py-2 transition-colors duration-200 ease-in-out pl-10" />
                </div>

                <div>
                    {/* new member */}
                    <button className="bg-[#bf5e2c] text-white px-2 rounded flex gap-2 justify-center items-center py-2"><MdDashboardCustomize className="text-sm" />New Member</button>
                </div>
            </div>

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg mx-4 my-10">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700  text-center">
          <tr>
            <th scope="col" className="px-6 py-3 font-medium">
              Members
            </th>
            <th scope="col" className="px-6 py-3 font-medium">
              Age
            </th>
            <th scope="col" className="px-6 py-3 font-medium">
              E-mail
            </th>
            <th scope="col" className="px-6 py-3 font-medium">
              Phone
            </th>
            <th scope="col" className="px-6 py-3 font-medium">
              Role
            </th>
            <th scope="col" className="px-6 py-3 font-medium">
              Date Joined
            </th>
            <th scope="col" className="px-6 py-3 font-medium">
              Status
            </th>
            <th scope="col" className="px-6 py-3 font-medium">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="text-left">
          {
         
          userData.filter(data =>
            data.name.toLowerCase().includes(value.toLowerCase()) ||
            data.phone.includes(value)
        ).map((user: User) => (
            <tr key={user.id} className="odd:bg-[#F8F9FB] border-b text-black">
              <td scope="row" className="px-6 py-4    whitespace-nowrap font-[400]">
                <div className="flex justify-start items-center gap-3">
                  <input type="checkbox" name="" id="" />
                  <CiMenuBurger className="text-[14px] text-black"/>
                  <img width={30} src={user.image} alt="" />
                  <span>{user.name}</span>
                </div>
              </td>
              <td className="px-6 py-4">{user.age}</td>
              <td className="px-6 py-4">{user.email}</td>
              <td className="px-6 py-4">{user.phone}</td>
              <td className="px-6 py-4">{user.role}</td>
              <td className="px-6 py-4">{user.date_joined}</td>
              <td className="px-6 py-4">
                <div className="flex items-center justify-center">
                  <span className={`w-3 h-3 rounded-full mr-1 ${user.status === 'Active' ? 'bg-green-500' : 'bg-red-500'}`}></span>
                  <span>{user.status}</span>
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="flex justify-center gap-2 text-[16px] text-[#BF5E2C]">
                  <button>
                    <IoEyeOutline/>
                  </button>
                  <button>
                    <FiEdit/>
                  </button>
                  <button>
                    <MdDeleteOutline/>
                  </button>
                </div>
              </td>
            </tr>
          )) 
        }
        </tbody>
      </table>
    </div>
        </div>
    )
}

export default ResponsiveHome
