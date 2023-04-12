import React from "react";
import Navbar from "../components/Navbar";
import { Nftimage1, Nftimage2 } from "../assets/Minting/assets";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Benefits from "../components/Benefits";
const DuringMinting = () => {
  const [number, setNumber] = useState(1);

  const Timer = ({ nextPageUrl }) => {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
      const interval = setInterval(() => {
        const now = new Date().getTime();
        const countdownDate = new Date("2023-04-14").getTime();
        const distance = countdownDate - now;
        setDays(Math.floor(distance / (1000 * 60 * 60 * 24)));
        setHours(
          Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        );
        setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
        setSeconds(Math.floor((distance % (1000 * 60)) / 1000));

        if (distance <= 0) {
          clearInterval(interval);
          navigate(nextPageUrl);
        }
      }, 1000);
      return () => clearInterval(interval);
    }, [navigate]);
    return (
      <>
        <div className="flex bg-gradient-to-b from-white to-transparent  w-2/5 text-3xl font-Urbanist font-bold py-1 h-10 rounded-lg justify-center">
          <div className="mx-2">{days}d </div>
          <span>:</span>
          <div className="mx-2">{hours}h</div>
          <span>:</span>
          <div className="mx-2">{minutes}m</div>
          <span>:</span>
          <div className="mx-2">{seconds}s</div>
        </div>
      </>
    );
  };

  function handleIncrease() {
    setNumber(number + 1);
  }
  function handleDecrease() {
    if (number > 1) {
      setNumber(number - 1);
    }
  }

  return (
    <>
      <div className="bg-navy-blue h-full mt-20 mx-[10%] text-white font-Bakbak">
        <div className="flex justify-around mb-40 ">
          <div className="w-2/3">
            <h1 className="text-5xl mb-4 text-violet">About EruChef NFT</h1>
            <p className="  font-Urbanist mb-3 w-3/4">
              We are excited to introduce EruChef, a specially packaged NFT pass
              of benefits that will get the most out of your trading experience
              on EruSwap. It is a collection of 3,000 uniquely generated
              EruChefs. No one EruChef is the same.
            </p>
            <div className="my-5">
              <button className="bg-transparent border border-white ml-4 rounded-md py-2 px-10">
                <p>JOIN OUR DISCORD</p>
              </button>
            </div>
            <Timer nextPageUrl="/post-minting" />
          </div>
          <div className="w-1/3">
            <img src={Nftimage1} alt="" />
          </div>
        </div>

        <div className="flex justify-between">
          <div className="w-1/3 mr-8">
            <img src={Nftimage2} alt="" />
          </div>
          <div className="flex flex-col ml-20 w-2/3">
            <div className="flex justify-between">
              <div className="font-Urbanist font-bold text-2xl p-8 justify-start flex flex-col">
                <h4>Total NFTS Minted</h4>
                <h4>0/3000</h4>
              </div>
              <div className="font-Urbanist font-bold text-2xl p-8 justify-start flex flex-col">
                <h4>Balance</h4>
                <h4>-</h4>
              </div>
            </div>
            <div className="font-Urbanist font-bold text-2xl p-8 justify-start flex flex-col">
              <h4>Total Price</h4>
              <h4>2.5 BNB</h4>
            </div>
            <div>
              <div className="flex justify-center ">
                <div className="flex justify-evenly w-1/3">
                  <div
                    onClick={handleDecrease}
                    className="bg-orchid bg-opacity-20 h-12 border-orchid border-2 rounded-lg w-12 flex justify-center items-center text-2xl font-bold font-Urbanist tracking-wide text-white"
                  >
                    -
                  </div>
                  <h4 className="font-Urbanist font-bold text-4xl pt-1 h-20">
                    {number}
                  </h4>
                  <div
                    onClick={handleIncrease}
                    className="bg-orchid bg-im bg-opacity-20 h-12 border-orchid border-2 rounded-lg w-12 flex justify-center items-center text-2xl font-bold font-Urbanist tracking-wide text-white"
                  >
                    +
                  </div>
                </div>
                <div className="mt-1">
                  <button className="bg-violet rounded-md py-2 px-12  ">
                    <p>MINT NOW</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex bg-gradient-to-b rounded-xl   bg-opacity-0 from-text-field p-5 to-transparent ">
          <div className="font-Urbanist w-2/3">
            <h4 className="font-bold text-2xl">
              Claim the EruChef Minter Royalties
            </h4>
            <p className="w-3/4 text-lg">
              The 3000 original minters of EruSwap earn 2% from the secondary
              sales of the NFTs, seeded to this pool weekly.
            </p>
          </div>
          <div className="w-1/3 flex flex-col items-center">
            <p className="font-Urbanist">Claimable fees -</p>
            <div className="mt-1">
              <button className="bg-violet rounded-md py-2 px-12  ">
                <p>MINT NOW</p>
              </button>
            </div>
          </div>
        </div>
      </div>

      <Benefits />
    </>
  );
};

export default DuringMinting;
