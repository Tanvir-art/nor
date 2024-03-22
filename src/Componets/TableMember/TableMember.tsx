import { IoEyeOutline } from "react-icons/io5"; 
import { FiEdit } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";
import { useEffect, useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
 
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

interface TableMemberProps {
  setLiftUpData: (data: User[]) => void;
  liftUpFilterData: User[];
  liftUpValue: string;
}

const TableMember = ({ setLiftUpData, liftUpFilterData, liftUpValue }: TableMemberProps) => {
  const [userData, setUserData] = useState<User[]>([]);  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data/data.json');  
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setUserData(data.users);
        setLiftUpData(data.users);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, []);
    
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg z-10">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700  text-center">
          <tr  >
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
          liftUpValue === '' || liftUpFilterData.length === 0 ? 
          userData.map((user: User) => (
            <tr key={user.id} className="odd:bg-[#F8F9FB] border-b text-black">
              <td scope="row" className="px-6 py-4 font-[400]  whitespace-nowrap ">
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
          )) :
          liftUpFilterData.map((user: User) => (
            <tr key={user.id} className="odd:bg-[#F8F9FB] border-b text-black">
              <td scope="row" className="px-6 py-4 font-[400]  whitespace-nowrap ">
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
  );
}

export default TableMember;
