import React, { useState } from "react";
import briefcase from "../assets/icons/briefcase.png";
import messages from "../assets/icons/message.png";
import payments from "../assets/icons/payments.png";
import application from "../assets/icons/application.png";
import notification from "../assets/icons/bellIcon.png";
import logo from "../assets/icons/logo.png";
import chevronDown from "../assets/icons/chevron-down.png";
import DropdownMenu from "./DropdownMenu";
const Header = () => {

  const [showMenu, setShowMenu] = useState(false);
  return (
    <header className="px-4 py-2 flex justify-between shadow-header">
      <div className="bg-[#E7E7E7] flex justify-center items-center text-btn-primary-bg px-7 py-3 self-center">
        <h2 className="font-bold">Logo</h2>
      </div>

      <nav className="flex gap-6">

        <div className="bg-btn-primary-bg rounded-[50px] md:my-2 py-2 px-4 flex gap-2 items-center border-2 border-['#FCB4A5'] shadow-btn  ">
          <img src={briefcase} alt="job" />
          <span className="text-white">Jobs</span>
        </div>


        <div className="hidden md:flex justify-around gap-4 py-6 shadow-nav-inset rounded-[36px] border border-[#D1D1D1] ">
          <div className="flex gap-1 items-center px-6">
            <img className="w-6 h-6" src={messages} alt="message" />
            <span className="text-[#B0B0B0] ">Messages</span>
          </div>

          <div className="flex gap-1 items-center px-6">
            <img className="w-6 h-6" src={payments} alt="payments" />
            <span className="text-[#B0B0B0] ">Payments</span>
          </div>

          <div className="flex gap-1 items-center px-6">
            <img className="w-6 h-6" src={application} alt="message" />
            <span className="text-[#B0B0B0] ">Application</span>
          </div>
        </div>

      </nav>

      <div className="flex items-center justify-between gap-4">
        <img src={notification} className="w-6 h-6" />

        <div className="flex items-center gap-2 relative">
          <img src={logo} alt="logo" />
          <img className="hidden md:block" src={chevronDown} alt="dropdown" />

          <img className="md:hidden cursor-pointer" src={chevronDown} alt="dropdown" onClick={(e) => setShowMenu(prev => !prev)} />

           <DropdownMenu isShow={showMenu} />

        </div>

      </div>
    </header>
  );
};

export default Header;
