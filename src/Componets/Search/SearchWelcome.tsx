import { useState } from "react";
import { IoMdSearch } from "react-icons/io";
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
  interface liftUpDataProps {
    liftUpData: User[];
    setliftUpFilterData: (data: User[]) => void;
    setliftUpValue: (data: string) => void;
  }
const SearchWelcome = ({liftUpData, setliftUpFilterData, setliftUpValue}:liftUpDataProps) => {
    
    const [value, setValue] = useState<string>("") ;
    setliftUpValue(value)
 
    const [filteredData, setFilteredData] = useState<User[]>([]);

    const handleFilter = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
      const filtered = liftUpData.filter((user) => {
        return user.name.toLowerCase().includes(value.toLowerCase()) ||
               user.phone.includes(value);
      });
      setFilteredData(filtered);
      setliftUpFilterData(filtered)
    }
 
    return (
        <>
        <div className="flex gap-20 z-10">
            <div>
                <h2 className="text-sm font-semibold">Welcome,</h2>
                <h2 className="text-[#d5a02b] text-lg font-semibold">Bella Noora</h2>
            </div>

            <form onSubmit={handleFilter} className=" relative w-1/2 flex gap-4">
                <div className="absolute top-3 left-3 "><IoMdSearch className="text-[25px] text-[#56585E]"/></div>
                <input type="text"
                value={value}
                onChange={(e)=>{setValue(e.target.value)}}
                placeholder="Search by Phone or Name"
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-[#d5a02b] focus:ring-2 focus:ring-[#d5a02b] focus:bg-transparent focus:border-[#d5a02b] text-base outline-none text-gray-700 px-3 transition-colors duration-200 ease-in-out pl-10"/>
            <button   className="bg-[#bf5e2c] text-white px-4 rounded">Search</button> 
            </form>
        </div>
        </>


    )
}

export default SearchWelcome
