import React from 'react'
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
const HowtoStake = () => {
  return (
   <>
    <div className="mb-60">
        <div className="-mt-80">
          <div className="">
            <div className="relative left-0 z-10 top-80">
              <img src={Constellation} alt="" />
            </div>
            <h2 className="font-Bakbak mx-[30%] flex text-5xl relative z-10 top-24">
              How to Stake{" "}
              <span className="mx-4 mt-4">
                <img src={Ball} alt="" className="w-3/4" />
              </span>
            </h2>

            <img src={Bar} alt="" className="" />
            <div className="absolute right-0 -mt-60">
              <img src={Constellation2} alt="" />
            </div>
          </div>
          <div className="mx-[10%] flex justify-center mt-10">
            <div className="flex flex-col items-center w-1/3 pb-5 mx-2">
              <img src={Wallet} alt="" className="z-10 -mb-24 w-1/2" />
              <div className="flex justify-center w-full h-full  py-20 bg-white bg-opacity-10 border border-white">
                <div className="flex flex-col items-center justify-center ">
                  <h5 className="mt-3 font-Urbanist font-semibold text-xl ">
                    Connect Your Wallet
                  </h5>
                  <p className="font-Urbanist  font-normal text-text-field text-lg w-4/5 text-center">
                    Connect your compactible Defi wallet using BNB chain
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center w-1/3 pb-5 mx-2">
              <img src={StakeNFT} alt="" className="z-10 -mb-24 w-1/2" />
              <div className="flex justify-center w-full h-full  py-20 bg-white bg-opacity-10 border border-white">
                <div className="flex flex-col items-center justify-center ">
                  <h5 className="mt-3 font-Urbanist font-semibold text-xl ">
                    Stake your NFTs
                  </h5>
                  <p className="font-Urbanist  font-normal text-text-field text-lg w-4/5 text-center">
                  Select the NFTs and stake them. You can unstake each of them anytime.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center w-1/3 pb-5 mx-2">
              <img src={BTC} alt="" className="z-10 -mb-24 w-1/2" />
              <div className="flex justify-center w-full h-full  py-20 bg-white bg-opacity-10 border border-white">
                <div className="flex flex-col items-center justify-center ">
                  <h5 className="mt-3 font-Urbanist font-semibold text-xl ">
                    Earn Income
                  </h5>
                  <p className="font-Urbanist  font-normal text-text-field text-lg w-4/5 text-center">
                  Claim weekly trading fees and royalties
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
  )
}

export default HowtoStake