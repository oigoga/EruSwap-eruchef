import React, { useState, useEffect } from "react";

const Countdown = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const countdownDate = new Date("2023-04-23").getTime();
      const distance = countdownDate - now;
      setDays(Math.floor(distance / (1000 * 60 * 60 * 24)));
      setHours(
        Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      );
      setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
      setSeconds(Math.floor((distance % (1000 * 60)) / 1000));
    }, 1000);
    return () => clearInterval(interval);
  }, []);
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

export default Countdown;
