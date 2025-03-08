import { Bolt, CircleUserRound, LogOut, UserRound, UserRoundPlus, UsersRound } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { AddUser } from "./AddUser";


export const HeaderUser = () => {
  const [menu, setMenu] = useState(false);
  const [addUser,setAddUser] = useState(false)

  return (
    <header className='header flex justify-between items-center w-full h-20 bg-bgNavBar border-b-2 border-borderColor'>
      <div className="friend_profile_div ml-5 flex items-center">
        {/* <div className="radius_div rounded-full h-14 w-14 flex justify-center items-center text-xl font-semibold bg-black text-white">
            AB
          </div>
          <div className="ml-3">
          <h4 className="text-lg font-semibold" >Alex Balayan</h4>
          <p className="text-onlineStatusColor">Online</p>
          </div> */}
      </div>
      <div className="profile_div">
        <div onClick={() => setMenu(!menu)} className="profile border-profileDivColor border-2 rounded-2xl h-12 w-12 flex mr-3 justify-center items-center transition-all hover:bg-borderColor cursor-pointer opacity-70 ">
          <CircleUserRound />
        </div>
        {menu && (
          <div className="menu_div absolute right-2 top-[70px] bg-bgNavBar border-profileDivColor border-2 rounded-xl h-[272px] w-48 flex flex-col  items-center">
            <div className="border-b-2 w-full h-16 flex items-center border-profileDivColor">
              <div className="radius_div rounded-full h-12 ml-2 w-12 flex justify-center items-center text-xl font-semibold bg-profileDivColor text-white">
                AB
              </div>
              <div className=" ml-2 flex flex-col">
                <h3 className="font-semibold">{localStorage.getItem('name')}</h3>
                <h4 className="text-xs text-inputBorderColor">@{localStorage.getItem('username')}</h4>
              </div>

            </div>
            <div className="buttons_div_1 flex flex-col items-center border-b-2 border-profileDivColor w-full">
              <Link to='profile'><button className="flex w-[180px] h-8 rounded-md hover:bg-[#131313] items-center mt-1"><UserRound className="mr-2 ml-1" /> Profile</button></Link>
              <Link to='settings'><button className="flex w-[180px] h-8 rounded-md hover:bg-[#131313] items-center mt-1 mb-2"><Bolt className="mr-2 ml-1" /> Settings</button></Link>
            </div>
            <div className="buttons_div_1 flex flex-col items-center border-b-2 border-profileDivColor w-full">
            <button  onClick={() => setAddUser(!addUser)} className="flex w-[180px] h-8 rounded-md hover:bg-[#131313] items-center mt-1"><UserRoundPlus className="mr-2 ml-1" /> Add User</button>
            <button className="flex w-[180px] h-8 rounded-md hover:bg-[#131313] items-center mt-1 mb-2"><UsersRound className="mr-2 ml-1" /> Create Group</button>
            </div>
            <div className="buttons_div_1 flex flex-col items-center w-full">
            <button className="flex w-[180px] h-8 rounded-md hover:bg-[#131313] items-center mt-1"><LogOut className="mr-2 ml-1" /> Logout</button>

            </div>
          </div>
        )}
      </div>
      {addUser && <AddUser />}
    </header>
  );
};
