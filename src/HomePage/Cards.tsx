import Card1 from "../assets/Cards/Card1.svg";
import Card2 from "../assets/Cards/Card2.svg";
import Card3 from "../assets/Cards/Card3.svg";
import Card4 from "../assets/Cards/Card4.svg";
import Card5 from "../assets/Cards/Card5.svg";

import { GoHeart } from "react-icons/go";

export default function Cards() {
  const cards = [
    {
      id: 1,
      name: "Vulputate felis purus viverra morbi facilisi eget",
      desc: "Decor/Architecture",
      image: <img src={Card1} />,
    },
    {
      id: 2,
      name: "Viverra morbi facilisi eget",
      desc: "Decor/Architecture",
      image: <img src={Card2} />,
    },
    {
      id: 3,
      name: "Lorem ipsimfas dadfadkl",
      desc: "Decor/Architecture",
      image: <img src={Card3} width={"300px"} />,
    },
    {
      id: 4,
      name: "Dummy text baiusbdfa",
      desc: "Decor/Architecture",
      image: <img src={Card4} />,
    },
    {
      id: 5,
      name: "this is an example text",
      desc: "Decor/Architecture",
      image: <img src={Card5} width={"300px"} />,
    },
  ];

  return (
    <div className="w-full h-full p-2 rounded-lg font-serif">
      <div className=" p-2 flex items-center flex-col justify-center  font-mono font-bold">
        <h1 className="font-serif text-xl font-bold text-slate-400">
          Latest live auctions
        </h1>
      </div>

      <div className="w-[80%] grid grid-cols-5 mx-auto gap-2">
        {cards.map((items) => (
          <div className="p-2 shadow-md rounded-md">
            <div key={items.id} className="">
              <div className="rounded-lg bg-cover">{items.image}</div>
              <div>
                <div className="flex items-center justify-between">
                  <p className="text-white text-sm">{items.name}</p>
                  <p className="text-blue-400 text-xs">3.19 ETH</p>
                </div>
                <div>
                  <p className="text-white">Time left</p>
                </div>
                <div className="flex items-center text-white">
                  <p>
                    <span>35</span>People are bidding
                  </p>
                  <p>
                    <GoHeart />
                    120
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
