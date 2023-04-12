import React from "react";
import {
  Shapes1,
  Bgimage1,
  Bgimage2,
  Bgimage3,
} from "../assets/Minting/assets";
const StakingII = () => {
  const style1 = {
    backgroundImage: `url(${Bgimage1})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundSize: "cover",
  };

  const style2 = {
    backgroundImage: `url(${Bgimage2})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundSize: "cover",
  };

  const style3 = {
    backgroundImage: `url(${Bgimage3})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundSize: "cover",
  };

  return (
    <>
    <div className="absolute left-0 -mt-40 h-1/2">
              <img src={Shapes1} alt="" className="h-full"/>
            </div>
      <div className="flex flex-col justify-between mx-[10%] z-10">
        <div className="flex justify-around mb-5 h-40 font-Urbanist">
          <div style={style1} className="w-1/3 h-full text-center py-10">
            <h5 className="text-2xl font-bold ">0/3000</h5>
            <p className="text-text-field">Total NFTs Staked</p>
          </div>
          <div style={style2} className="w-1/3 h-full py-10 text-center">
            <h5 className="text-2xl font-bold ">34.04%</h5>
            <p className="text-text-field">Floor Proce APR</p>
          </div>
          <div style={style3} className="w-1/3 h-full py-10 text-center">
            <h5 className="text-2xl font-bold ">0$</h5>
            <p className="text-text-field">Last week's earning</p>
          </div>
        </div>
        <div className="flex justify-center my-10">
          {" "}
          <button className="bg-transparent border border-white rounded-md py-2 px-10">
            <p>MORE DETAILS</p>
          </button>
        </div>
        <div className="flex justify-around mt-5 h-40 font-Urbanist">
          <div style={style1} className="w-1/3 h-full py-10 text-center">
            <h5 className="text-2xl font-bold ">0/3000</h5>
            <p className="text-text-field">My Stake</p>
          </div>
          <div style={style2} className="w-1/3 h-full py-10 text-center ">
            <h5 className="text-2xl font-bold ">0/3000</h5>
            <p className="text-text-field">Total NFTs in your wallet</p>
          </div>
          <div style={style3} className="w-1/3 h-full py-10 text-center">
            <h5 className="text-2xl font-bold ">0$</h5>
            <p className="text-text-field">Claimable Fees</p>
          </div>
        </div>
        <div className="flex justify-center mt-16 ">
          <button className="bg-violet rounded-md py-2 px-10">
            Connect Wallet
          </button>
        </div>
      </div>
    </>
  );
};

export default StakingII;
