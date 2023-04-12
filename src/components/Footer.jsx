import React from "react";
import { Eruswap, Next } from "../assets/General/assets";
import { FaTwitter, FaDiscord, FaMedium } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <hr className="text-white w-full" />
      <div className="flex justify-between px-20 mt-3 py-10">
        <div className="w-1/3">
          <img src={Eruswap} alt="" />
          <p className="font-Urbanist text-lg text-left w-full p-2 ">
            A cross-chain decentralized trading platform for seamless
            cross-chain crypto swaps, for connecting fiat-to-crypto and
            crypto-to-fiat, providing a protocol for trading and automated
            liquidity provision for the self-made retail crypto trader in
            emerging markets.
          </p>
          <p className="font-Urbanist text-lg text-left w-full p-2 underline" >&copy; 2023 EruSwap</p>
        </div>

        <div className="w-2/3 mt-5 flex flex-col items-center text-lg">
          <div className="flex ">
            <h4 className="font-Bakbak mb-5">Subscribe To Our Newsletter</h4>
          </div>
          <div className="flex rounded-md border-text-body border-2 w-3/5 justify-between">
            <input
              type="email"
              name="email"
              className=" bg-transparent  py-2 w-4/5"
            />
            <div className="bg-violet flex justify-center p-2 rounded-md w-1/5">
              <img src={Next} alt="" />
            </div>
          </div>
          <div className="flex flex-col w-full items-center my-5">
            <h4 className="font-Bakbak -mb-2">Connect with us</h4>
           <div className="flex justify-around w-1/3">
           <button className="w-1/3"><FaTwitter className="w-full h-1/3"/></button>
            <button className="w-1/3"><FaDiscord className="w-full h-1/3"/></button>
            <button className="w-1/3"><FaMedium className="w-full h-1/3"/></button>
           </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Footer;
