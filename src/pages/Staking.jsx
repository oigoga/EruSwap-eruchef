import React from "react";
import Benefits from "../components/Benefits";
import {
  Stakinghero,
  Constellation2,
  Constellation,
  Bar,
  BTC,
  Wallet,
  StakeNFT,
  Ball,
} from "../assets/Minting/assets";
import HowtoStake from "../components/HowtoStake";
import StakingII from "../components/StakingII";
const Staking = () => {
  return (
    <>
      <div className="bg-navy-blue h-full mt-10  mx-[10%] text-white font-Bakbak">
        <div className="flex justify-around mb-40 ">
          <div className="w-1/2 flex flex-col justify-center">
            <h1 className="text-5xl mb-4 w-full text-white">
              Stake Your ERUCHEFs NFTs For Passive Income
            </h1>
            <p className=" text-lg mb-3 w-full">
              Stake your EruChefs NFTs and earn weekly trading fees and
              royalties
            </p>
            <div className="my-5">
              <button className="bg-violet rounded-md py-2 px-10  ">
                <p>START STAKING</p>
              </button>
            </div>
          </div>
          <div className="w-1/2">
            <img src={Stakinghero} alt="" className="w-4/5" />
          </div>
        </div>
      </div>
      <StakingII/>
      <Benefits/>
      <HowtoStake/>
    </>
  );
};

export default Staking;
