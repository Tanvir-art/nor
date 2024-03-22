import { useState } from "react"
import SearchWelcome from "../../Componets/Search/SearchWelcome"
import StatNewMember from "../../Componets/StatAndNew/StatNewMember"
import TableMember from "../../Componets/TableMember/TableMember"
import ResponsiveHome from "../../Componets/ResponsiveHome/ResponsiveHome"

 

const Home = () => {    
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
  const [liftUpData, setLiftUpData] = useState<User[]>([]);
  const [liftUpFilterData, setliftUpFilterData] = useState<User[]>([]);
  const [liftUpValue, setliftUpValue] = useState<string>("");
  console.log(liftUpValue)
  return (
    <>
    <div className="hidden md:hidden lg:block">
    <div className="p-5">
      <SearchWelcome liftUpData = {liftUpData} setliftUpFilterData={setliftUpFilterData} setliftUpValue={setliftUpValue}/>
    </div>
    <div className="border border-slate-300 m-5">
        <StatNewMember liftUpData = {liftUpData}/>
    </div> 

    <div  className="border border-slate-300 m-5">
      <TableMember setLiftUpData ={setLiftUpData} liftUpFilterData={liftUpFilterData} liftUpValue={liftUpValue}/>
    </div>

    </div>

    <div className="block md:block lg:hidden">
      <ResponsiveHome/>
    </div>
    </>
  )
}

export default Home
