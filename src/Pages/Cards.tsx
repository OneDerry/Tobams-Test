import { useState, useEffect } from "react";
import { FaChevronRight } from "react-icons/fa6";
import { GoHeart } from "react-icons/go";
import { LuTimer } from "react-icons/lu";

import Card1 from "../assets/Cards/Card1.svg";
import Card2 from "../assets/Cards/Card2.svg";
import Card3 from "../assets/Cards/Card3.png";
import Card4 from "../assets/Cards/Card4.svg";
import Card5 from "../assets/Cards/Card5.png";
import Card6 from "../assets/Cards/Card6.png";
import Card7 from "../assets/Cards/Card7.png";
import Card8 from "../assets/Cards/Card8.png";

export default function NFTMarket({ showHeader = true }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const cards = [
    {
      id: 1,
      name: "Vulputate morbi facilisi eget",
      desc: "Decor/Architecture",
      image: Card1,
    },
    {
      id: 2,
      name: "Viverra morbi facilisi eget",
      desc: "Decor/Architecture",
      image: Card2,
    },
    {
      id: 3,
      name: "Lorem ipsimfas dadfadkl",
      desc: "Decor/Architecture",
      image: Card3,
    },
    {
      id: 4,
      name: "Dummy text baiusbdfa",
      desc: "Decor/Architecture",
      image: Card4,
    },
    {
      id: 5,
      name: "This is an example text",
      desc: "Decor/Architecture",
      image: Card5,
    },
    {
      id: 6,
      name: "Another example text",
      desc: "Decor/Architecture",
      image: Card6,
    },
    {
      id: 7,
      name: "More sample text",
      desc: "Decor/Architecture",
      image: Card7,
    },
    { id: 8, name: "Final example", desc: "Decor/Architecture", image: Card8 },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 10000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
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
    <div className="flex flex-col items-center">
      {showHeader && (
        <h1 className="text-xl font-bold text-slate-400 mb-6">
          Latest Live Auctions
        </h1>
      )}

      <div className="relative w-full flex overflow-hidden justify-center">
        <div className="grid md:grid-cols-3 gap-2 overflow-hidden">
          {cards.slice(currentIndex, currentIndex + 3).map((card) => (
            <div
              key={card.id}
              className="bg-[#060714] p-4 overflow-hidden rounded-lg shadow-lg w-[300px] border border-border"
            >
              <img
                src={card.image}
                alt={card.name}
                className="rounded-lg w-full h-[300px] object-cover "
              />
              <h2 className="text-white mt-3 font-semibold">{card.name}</h2>
              <div className="flex items-center justify-between text-gray-400 text-xs mt-2">
                <div className="flex items-center gap-1">
                  <LuTimer size={15} />{" "}
                  <span>{formatTime(seconds)} min left</span>
                </div>
                <span className="text-[#2A2769] p-1 rounded-md bg-[#807cfc] bg-opacity-100">
                  3.19 ETH
                </span>
              </div>
              <div className="border border-border mt-5"></div>
              <div className="mt-2 flex items-center justify-between">
                <p className="text-gray-500 text-sm">35 people are bidding</p>
                <div className="flex items-center gap-2">
                  <GoHeart size={20} fill="red" />
                  <span className="text-xs text-white ml-1">120</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={handleNext}
        className="relative bottom-[300px] left-[100px] mt-5 bg-gray-500 p-3 rounded-full text-white shadow-md hover:bg-gray-700 transition ease-in-out"
      >
        <FaChevronRight />
      </button>
    </div>
  );
}
