import React, { useState, useEffect } from "react";
import { Nftimage1, Divider, Constellation6 } from "../assets/Minting/assets";
import Benefits from "../components/Benefits";
import { useNavigate } from "react-router-dom";
const PostMinting = () => {
  const Countdown = ({ nextPageUrl }) => {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
      const interval = setInterval(() => {
        const now = new Date().getTime();
        const countdownDate = new Date("2023-04-12").getTime();
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
        <div className="flex items-center justify-center gap-4 my-14">
          <div className="">
            <div className="bg-orchid bg-opacity-20 h-24 border-orchid border-2 rounded-lg w-20 flex justify-center items-center text-5xl font-bold font-Urbanist tracking-wide text-white">
              {days}
            </div>
            <div className="font-Urbanist mt-2">DAYS</div>
          </div>
          <div className="">
            <div className="bg-orchid bg-opacity-20 h-24 border-orchid border-2 rounded-lg w-20 flex justify-center items-center text-5xl font-bold font-Urbanist tracking-wide text-white">
              {hours}
            </div>
            <div className="font-Urbanist mt-2">HOURS</div>
          </div>
          <div className="">
            <div className="bg-orchid bg-opacity-20 h-24 border-orchid border-2 rounded-lg w-20 flex justify-center items-center text-5xl font-bold font-Urbanist tracking-wide text-white">
              {minutes}
            </div>
            <div className="font-Urbanist mt-2">MINUTES</div>
          </div>
          <div className="">
            <div className="bg-orchid bg-opacity-20 h-24 border-orchid border-2 rounded-lg w-20 flex justify-center items-center text-5xl font-bold font-Urbanist tracking-wide text-white">
              {seconds}
            </div>
            <div className="font-Urbanist mt-2">SECONDS</div>
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      <div className="bg-navy-blue h-full mt-10  mx-[10%] text-white font-Bakbak">
        <div className="flex justify-around mb-40 ">
          <div className="w-2/3 flex flex-col justify-center">
            <h1 className="text-5xl mb-4 text-violet">About EruChef NFT</h1>
            <p className="  font-Urbanist mb-3 w-3/4">
              We are excited to introduce EruChef, a specially packaged NFT pass
              of benefits that will get the most out of your trading experience
              on EruSwap. It is a collection of 3,000 uniquely generated
              EruChefs. No one EruChef is the same.
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
        </div>

        <div className="flex flex-col items-center mb-24">
          <h3 className="font-Bakbak text-3xl">Upcoming Mints</h3>
          <h5 className="font-Urbanist mt-16 text-xl">Countdown ...</h5>
          <div className="absolute -left-2 ">
            <img src={Constellation6} alt="" />
          </div>
          <Countdown nextPageUrl="/" />
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
      <Benefits />
    </>
  );
};

export default PostMinting;
