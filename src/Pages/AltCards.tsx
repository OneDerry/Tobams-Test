import { LuTimer } from "react-icons/lu";
import Card1 from "../assets/Cards/Card3.png";
import Card2 from "../assets/Cards/Card8.png";
import Card3 from "../assets/Cards/Card7.png";
import Card4 from "../assets/Cards/Card6.png";

import { GoHeart } from "react-icons/go";
import { useState, useEffect } from "react";

export default function AltCards() {
  const altCards = [
    {
      id: 1,
      name: "morbi facilisi eget",
      desc: "Decor/Architecture",
      image: <img src={Card1} className="rounded-xl w-full h-[90px]" />,
    },
    {
      id: 2,
      name: "Viverra morbi facilisi eget",
      desc: "Decor/Architecture",
      image: <img src={Card2} className="rounded-xl w-full  h-[90px]" />,
    },
    {
      id: 3,
      name: "Lorem ipsimfas dadfadkl",
      desc: "Decor/Architecture",
      image: <img src={Card3} className="rounded-xl w-full h-[90px]" />,
    },
    {
      id: 4,
      name: "Dummy text baiusbdfa",
      desc: "Decor/Architecture",
      image: <img src={Card4} className="rounded-xl w-full  h-[90px]" />,
    },
  ];

  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (totalSeconds: number) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);

    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
      2,
      "0"
    )}`;
  };

  return (
    <div className="p-2 rounded-lg font-serif">
      <div className="grid grid-cols-1 gap-2 mx-auto">
        {altCards.map((items) => (
          <div key={items.id} className="p-2 shadow-md rounded-md">
            <div className="border border-border p-2 rounded-xl grid grid-cols-[80px_1fr] sm:grid-cols-[100px_1fr] gap-2 items-center justify-between">
              <div className="w-full">{items.image}</div>
              <div className="text-white w-full flex flex-col justify-between h-full p-1 sm:p-2">
                <div className="text-sm sm:text-base lg:text-xl">
                  <h1 className="truncate">{items.name}</h1>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <p className="flex items-center gap-1">
                    <LuTimer size={12} className="sm:w-4 sm:h-4" />
                    {formatTime(seconds)}
                  </p>
                  <p className="text-[#2A2769] p-1 rounded-md bg-[#807cfc] bg-opacity-100 text-xs">
                    1.25ETH
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="flex items-center text-ashTextColor text-xs">
                    <span>35</span> People are bidding
                  </p>
                  <p className="flex items-center gap-1">
                    <GoHeart size={12} className="sm:w-3 sm:h-3" />
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
