import Cards from "./Cards";
import Left from "../assets/Left.png";
import { GoHeart } from "react-icons/go";
import { IoShareSocialSharp } from "react-icons/io5";
import { MdOutlineContentCopy } from "react-icons/md";
import LineC from "../Chart/line";

export default function ViewMore() {
  return (
    <div>
      <div className="w-[50%] mx-auto grid md:grid-cols-2 items-center justify-center border border-border p-2 rounded-lg">
        <div className="w-96">
          <img src={Left} alt="" className="h-[500px] rounded-lg" />
        </div>
        <div className="p-4 flex flex-col justify-between gap-5 h-full text-white">
          <div>
            <div className="text-white">
              <h1 className="text-2xl font-semibold">
                Dui accumsan leo vestibulum ornare
              </h1>
              <p className="text-xs ">
                Ut amet vulputate faucibus vitae semper eget auctor. Diam tempor
                pulvinar ultricies dolor feugiat aliquam commodo.
              </p>
            </div>
            <div></div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-xs text-ashTextColor">Current Price</h1>
                <p className="text-xs font-semibold">
                  <span className="text-5xl">5.25</span> ETH
                </p>
              </div>
              <div>
                <h1 className="text-xs text-ashTextColor">Time Left</h1>
                <p className="text-2xl">22.59min</p>
                <p className="text-xs text-ashTextColor">
                  (01.01.2022 - 01:40:47)
                </p>
              </div>
            </div>
            <div className="mt-4">
              <button className="flex items-center justify-center  p-2 text-xs w-[80%] mx-auto rounded-md inset-shadow-[#4745D0] bg-[#4745D0] font-semibold">
                Place a Bid
              </button>
            </div>
          </div>
          <div>
            <h1>History of Bids (12 people are bidding)</h1>
            <div>
              <LineC />
            </div>
          </div>
          <div className="h-12 w-12 rounded-full bg-white backdrop-brightness-110 bg-opacity-80 flex items-center justify-center absolute left-[1235px] top-[150px]">
            <GoHeart fill="red" size={20} />
          </div>
          <div className="h-12 w-12 rounded-full bg-white backdrop-brightness-110 bg-opacity-80 flex items-center justify-center absolute left-[1235px] top-[200px] mt-2">
            <MdOutlineContentCopy />
          </div>
          <div className="h-12 w-12 rounded-full bg-white backdrop-brightness-110 bg-opacity-80 flex items-center justify-center absolute left-[1235px] top-[250px] mt-4">
            <IoShareSocialSharp />
          </div>
        </div>
      </div>
      <div className="text-white mt-4 w-[90%] mx-auto flex flex-col justify-between">
        <div className="p-4">
          <p className="text-xs text-ashTextColor text-center mb-2">OVERLINE</p>
          <h1 className="text-3xl font-serif text-center">
            More from this author
          </h1>
          <div className="flex items-center justify-center mt-6 gap-3 flex-wrap">
            <button className="border-border border p-2 text-xs rounded-lg">
              Architecture
            </button>
            <button className="border-border border p-2 text-xs rounded-lg">
              Photography
            </button>
            <button className="border-border border p-2 text-xs rounded-lg">
              Games
            </button>
            <button className="border-border border p-2 text-xs rounded-lg">
              Music
            </button>
          </div>
        </div>
        <div>
          <Cards />
        </div>
        <div className="flex items-center justify-center">
          <button className="flex items-center justify-center p-2 text-xs rounded-lg border border-border">
            Show me more
          </button>
        </div>
      </div>
    </div>
  );
}
