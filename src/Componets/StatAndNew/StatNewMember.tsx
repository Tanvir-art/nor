import { MdDashboardCustomize } from "react-icons/md";
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
}
const StatNewMember = ({liftUpData}: liftUpDataProps) => {
    const currentMonth = new Date().toLocaleString('default', { month: 'long' });
    const currentDate = new Date().toLocaleDateString('en-US', {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    });


  return (
    <div className="flex justify-between p-3">
      <div className="flex gap-10">
        <div >
            {/* date */}
            <h2 className="text-lg font-semibold text-[#e1ad2b]">{currentMonth}</h2>
            <h2 className="text-[#56585E] text-[12px]">Today is {currentDate}</h2>
        </div>
        <div className="border-r"></div>
        <div>
            {/* total */}
            <h2 className="text-lg font-semibold text-[#e1ad2b]">{liftUpData.length}</h2>
            <h2 className="text-[#56585E] text-[12px]">Total Number of Users</h2>
        </div>

      </div>
      <div>
            {/* new member */}
            <button className="bg-[#bf5e2c] text-white px-4 rounded flex gap-3 justify-center items-center py-3"><MdDashboardCustomize className="text-xl"/>New Member</button>
        </div>
    </div>
  )
}

export default StatNewMember
