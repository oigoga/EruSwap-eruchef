import React from "react";
import Countdown from "../components/Countdown";
import { Nftimage1, Divider } from "../assets/Minting/assets";
const PostMinting = () => {
  return (
    <>
      <div className='"bg-navy-blue h-full mt-10  mx-[10%] text-white font-Bakbak"'>
        <div className="flex justify-around mb-40 ">
          <div className="w-2/3 flex flex-col justify-center">
            <h1 className="text-5xl mb-4 text-violet">About EruChef NFT</h1>
            <p className="  font-Urbanist mb-3 w-3/4">
              We are excited to introduce EruSwap, a specially packaged NFT pass
              of benefits that will get the most out of your trading experience
              on eruSwap. it is a collection of 3,000 uniquely generated eruSwap
              Origin Pass. No one origin pass is the same.
            </p>
            <div className="my-5">
              <button className="bg-violet rounded-md py-2 px-10  ">
                <p>BUY ON OPENSEA</p>
              </button>
              <button className="bg-transparent border border-white ml-4 rounded-md py-2 px-10">
                <p>JOIN OUR DISCORD</p>
              </button>
            </div>
          </div>
          <div className="w-1/3">
            <img src={Nftimage1} alt="" />
          </div>
        </div>
        <div className="flex flex-col items-center mt-10 mb-20">
          <h5 className="font-Bakbak font-bold text-3xl">MINT SESSION ENDED</h5>
          <div className="flex font-Urbanist font-bold text-4xl mt-10">
            <div className="flex flex-col justify-center mx-2 items-center">
              <h3>1000+</h3>
              <p className="font-light text-lg">views</p>
            </div>
            <div className="h-1/2">
              <img src={Divider} alt="" />
            </div>
            <div className="flex flex-col justify-center mx-5 items-center">
              <h3>20</h3>
              <p className="font-light text-lg">mints</p>
            </div>
            <div>
              <img src={Divider} alt="" />
            </div>
            <div className="flex flex-col justify-center mx-2 items-center">
              <h3>12+</h3>
              <p className="font-light text-lg">Free mints</p>
            </div>
            <div>
              <img src={Divider} alt="" />
            </div>
            <div className="flex flex-col justify-center mx-2 items-center">
              <h3>8+</h3>
              <p className="font-light text-lg">Paid mints</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center mb-24">
          <h3 className="font-Bakbak text-3xl">Upcoming Mints</h3>
          <h5 className="font-Urbanist mt-16 text-xl">Countdown ...</h5>
          <Countdown />
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
    </>
  );
};

export default PostMinting;
