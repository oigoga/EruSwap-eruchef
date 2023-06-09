import React from "react";
import Benefits from "../components/Benefits";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Nftheader, Constellation6 } from "../assets/Minting/assets";
import Countdown from "../components/Countdown";
const PreMinting = () => {
  return (
    <>
      <div className="bg-navy-blue h-full text-white">
        <div className="flex flex-col justify-center items-center text-center mb-40">
          <div className="font-Bakbak w-1/2 ">
            <h1 className="text-5xl mb-4 text-violet">
              Welcome to EruSwap NFT
            </h1>
            <p className=" mx-[15%] font-Urbanist mb-3">
              We are excited to introduce EruChef, a specially packaged NFT that
              will enhance your trading experience on EruSwap. it is a
              collection of 3,000 uniquely generated NFTs. No one EruChef is the
              same.
            </p>
            <div className="my-5">
              <button className="bg-violet rounded-md py-2 px-10 mx-4 ">
                <p>JOIN WAITLIST</p>
              </button>
              <button className="bg-transparent border border-white rounded-md py-2 px-10">
                <p>MORE DETAILS</p>
              </button>
            </div>
            <img src={Nftheader} alt="" className="mb-32" />
            <h2 className="font-Urbanist text-4xl tracking-wide font-bold ">
              Live Mint Starts ...
            </h2>
            <div className="absolute -left-2 ">
              <img src={Constellation6} alt="" />
            </div>
            <Countdown nextPageUrl="/minting" />
            <div className="mt-4">
              <button className="bg-violet rounded-md py-2 px-10 mx-4 ">
                <p>JOIN WAITLIST</p>
              </button>
              <button className="bg-transparent border border-white rounded-md py-2 px-5">
                <p>JOIN OUR DISCORD</p>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Benefits/>
    </>
  );
};

export default PreMinting;
