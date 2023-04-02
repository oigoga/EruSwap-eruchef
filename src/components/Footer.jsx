import React from "react";
import { Eruswap, Facebook, Twitter, Game, Google, Next } from "../assets/General/assets";
const Footer = () => {
  return (
    <>
    <hr className="text-white w-full"/>
      <div className="flex justify-around px-20 mt-3 pb-20">
      
        <div className="w-1/5">
          <img src={Eruswap} alt="" />
          <p className="font-Urbanist text-left w-60 p-2 text-sm">
            Building the future of finance and a decentralized tokenized economy
            Democratize and bring DeFi to 3 Billion People
          </p>
          <div className="flex">
          <img src={Facebook} alt="" className="mx-1.5"/><img src={Twitter} alt="" className="mx-1.5"/><img src={Google} alt="" className="mx-1.5"/><img src={Game} alt="" className="mx-1.5"/>
          </div>
        </div>
        <div className="w-1/6 ml-5 mt-5">
          <ul>
            <li className="font-Bakbak mb-3">My Account</li>
            <li className="my-3">Authors</li>
            <li className="my-3">Collection</li>
            <li className="my-3">Authors Profile</li>
            <li className="mt-3">Create Collection</li>
          </ul>
        </div>
        <div className="w-1/6 mt-5">
        <ul>
            <li><h4 className="font-Bakbak mb-3">Resources</h4></li>
            <li className="my-3">Help and Support</li>
            <li className="my-3">Live Auctions</li>
            <li className="my-3">Item Details</li>
            <li className="mt-3">Activity</li>
          </ul>
        </div>
        <div className="w-1/6 mt-5">
        <ul>
            <li className="mb-3"><h4 className="font-Bakbak">Company</h4></li>
            <li className="my-3">About Us</li>
            <li className="my-3">Contact Us</li>
            <li className="my-3">Our Blog</li>
            <li className="mt-3">Discover</li>
          </ul>
        </div>
        <div className="w-1/5 mt-5">
          <h4 className="font-Bakbak mb-3">Subscribe To Our Newsletter</h4>
          <p className="font-Urbanist text-left w-60 py-2 text-sm my-3">
          Join the EruSwap family to receive information on our private and good deals
          </p>
          <div className="flex rounded-md border-text-body border-2 w-full ">
          <input type="email" name="email" className=" bg-transparent w-4/5 py-2"  />
          <div className="bg-violet flex justify-center p-2 rounded-md w-1/5"><img src={Next} alt="" /></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
