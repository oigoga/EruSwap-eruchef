import React from "react";
import { Eruswap, Arrow } from "../assets/General/assets";
import { FaTwitter, FaDiscord, FaMedium } from "react-icons/fa";
const Navbar = () => {
  return (
    <>
      <div className="flex justify-around py-6  font-Bakbak ">
        <div className="pt-2">
          <img src={Eruswap} alt="" className="h-14" />
        </div>
        <div className="pt-4">
          <ul className="flex justify-around text-2xl">
            <li className="flex mx-4">
              <p className="mx-1">Home</p>
              
            </li>
           <li className="mx-4 mt-2">
            <button><FaTwitter/></button>
           </li>
           <li className="mx-4 mt-2">
            <button><FaDiscord/></button>
           </li>
           <li className="mx-4 mt-2">
            <button><FaMedium/></button>
           </li>
          </ul>
        </div>
        <div className="pt-3">
          <button className="bg-violet rounded-md py-2 px-5">
            Connect Wallet
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
