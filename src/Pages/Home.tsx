import { ErrorMessage, Field, Form, Formik } from "formik";
import Cards from "./Cards";

//IMAGE IMPORTS
import nike from "../assets/Brands/Nike.svg";
import ritter from "../assets/Brands/Ritter Sport.svg";
import adidas from "../assets/Brands/Adidas.svg";
import holland from "../assets/Brands/New Holland.svg";
import rightImage from "../assets/Right - Image.svg";
import leftImage from "../assets/Left - Image.svg";
import hand from "../assets/hand Background Removed.png";
import paint from "../assets/paintbrush.svg";
import circle from "../assets/circle.svg";

//NFT IMPORTS
import Nft1 from "../assets/Nft/Nft1.svg";
import Nft2 from "../assets/Nft/Nft2.svg";
import Nft3 from "../assets/Nft/Nft3.svg";
import Nft4 from "../assets/Nft/Nft4.svg";
import Nft5 from "../assets/Nft/Nft5.svg";
import Nft6 from "../assets/Nft/Nft6.svg";

//VECTOR IMPORTS
import C from "../assets/C.svg";
import DC from "../assets/DC.svg";

//ICON IMPORTS
import { HiDotsHorizontal } from "react-icons/hi";
import { LiaSearchSolid } from "react-icons/lia";
import { RiArrowDownSLine } from "react-icons/ri";
import { PiPaintBrushFill } from "react-icons/pi";
import { MdOutlineDashboard } from "react-icons/md";
import { TfiWallet } from "react-icons/tfi";

import AltCards from "./AltCards";
import { FaRegUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Times = [
  {
    id: 1,
    amount: "300k",
    icon: <FaRegUserCircle size={30} />,
    title: "Users Active",
  },
  {
    id: 2,
    amount: "52.5k",
    icon: <MdOutlineDashboard size={30} />,
    title: "Artworks",
  },
  {
    id: 3,
    amount: "17.5k",
    icon: <PiPaintBrushFill size={30} />,
    title: "Artists",
  },
  {
    id: 4,
    amount: "35.53k",
    icon: <TfiWallet size={30} />,
    title: "Eth Spent",
  },
];

export default function Home() {
  return (
    <main id="main" className="bg-primary font-sora">
      <div className="h-screen">
        <div className="flex flex-col mt-20 md:mt-56 items-center justify-center">
          <div className="py-3">
            <div className="flex items-center justify-center">
              <p className="text-slate-400 text-sm md:text-base">
                NON FUNGIBLE TOKENS
              </p>
            </div>
            <div>
              <div className="text-2xl flex flex-col items-center text-wrap text-white w-[90%] md:w-[700px] font-bold md:text-3xl lg:text-7xl sm:text-[30px]">
                <p className="flex items-center gap-2">
                  A new NFT
                  <span className="inline-flex items-center">
                    <img src={C} alt="" className="h-6 w-6 md:h-8 md:w-8" />
                  </span>
                </p>
                <p className="flex items-center gap-2">
                  <span className="inline-flex items-center">
                    <img src={DC} alt="" className="h-6 w-6 md:h-8 md:w-8" />
                  </span>
                  experience
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <p className="text-lg mt-4 text-slate-400 md:text-sm lg:text-xl sm:text-[13px]">
                Discover, collect and sell
              </p>
            </div>
            <div className="mt-5">
              <Formik initialValues={{}} onSubmit={() => {}}>
                <Form>
                  <div className="flex items-center justify-between p-2 bg-white rounded-xl">
                    <Field
                      type="text"
                      name="userId"
                      className={`rounded-lg p-2 focus:outline-none bg-white w-full md:w-60`}
                      placeholder="Items, collections and creators"
                    />
                    <ErrorMessage
                      name="userId"
                      component="span"
                      className="text-red-500 text-xs p-1"
                    />
                    <div className="flex items-center border-l-2 border-black h-8 p-2 gap-5 pl-5">
                      Category <RiArrowDownSLine />
                    </div>
                    <div>
                      <LiaSearchSolid size={20} />
                    </div>
                  </div>
                </Form>
              </Formik>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 items-center justify-center gap-5 w-[30%] mx-auto mt-10 md:mt-48">
          <div className="flex items-center justify-center">
            <img src={ritter} alt="ritter" className="h-8" />
          </div>
          <div className="flex items-center justify-center">
            <img src={nike} alt="nike" className="h-8" />
          </div>
          <div className="flex items-center justify-center">
            <img src={adidas} alt="adidas" className="h-8" />
          </div>
          <div className="flex items-center justify-center">
            <img src={holland} alt="new holland" className="h-8" />
          </div>
        </div>
        <div className="absolute bottom-[700px] left-[10%] md:left-[200px]">
          <img src={Nft2} alt="" className="h-9 w-14 md:h-full md:w-full" />
          <p className="text-center text-white text-xs font-sora mt-1">
            1.3 ETH
          </p>
        </div>
        <div className="absolute bottom-[200px] left-[75%] transform -translate-x-1/2">
          <img src={Nft3} alt="" className="h-9 w-14 md:h-full md:w-full" />
          <p className="text-center text-white text-xs font-sora mt-1">
            1.9 ETH
          </p>
        </div>
        <div className="md:absolute md:bottom-[300px]  transform md:-translate-x-1/2">
          <img src={Nft1} alt="" className="h-9 w-14 md:h-full md:w-full" />
          <p className="text-center text-white text-xs font-sora mt-1">
            1.3 ETH
          </p>
        </div>
        <div className="md:absolute md:bottom-[450px] left-[90%] transform -translate-x-1/2">
          <img src={Nft4} alt="" className="h-9 w-14 md:h-full md:w-full" />
          <p className="text-center text-white text-xs font-sora mt-1">
            1.2 ETH
          </p>
        </div>
        <div className="md:absolute md:bottom-[700px] left-[80%] transform -translate-x-1/2">
          <img src={Nft5} alt="" className="h-9 w-14 md:h-full md:w-full" />
          <p className="text-center text-white text-xs font-sora mt-1">
            0.443 ETH
          </p>
        </div>
        <div className="md:absolute md:bottom-[420px] left-[20%] md:left-[400px] transform -translate-x-1/2">
          <img src={Nft6} alt="" className="h-9 w-14 md:h-full md:w-full" />
          <p className="text-center text-white text-xs font-sora mt-1">
            1.254 ETH
          </p>
        </div>
      </div>

      <div id="media" className="p-4">
        <Cards />
      </div>

      <div
        id="about"
        className="mt-4 h-auto md:h-[800px] grid grid-col-1 md:grid-cols-2 justify-center items-center mx-auto w-[90%] md:w-[1100px]"
      >
        <div className="sm:w-full flex flex-col justify-end md:w-[80%] leading-10 sm:mx-auto p-2">
          <h1 className="uppercase text-lg text-slate-400 text-start font-bold">
            Overline
          </h1>
          <p className="text-[30px] md:text-[50px] mt-4 text-white">
            Sapien ipsum scelerisque convallis fusce
          </p>
          <p className="text-sm text-slate-200 mt-2">
            Ut amet vulputate faucibus vitae semper eget auctor. <br /> Diam
            tempor pulvinar ultricies dolor feugiat aliquam commodo.
          </p>
          <div className="flex items-center mt-7 gap-2">
            <button className="text-white text-xs p-2 rounded-md inset-shadow-[#4745D0] bg-[#4745D0] rounded-lg w-32">
              Get Started
            </button>
            <button className="border-2 border-border w-32 text-xs flex items-center justify-center p-2 text-slate-200 rounded-lg">
              Learn more
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center w-full md:w-[90%]">
          <img src={rightImage} className="w-full h-auto" />
        </div>
      </div>

      <section className="flex items-center justify-center gap-4 mx-auto flex-wrap">
        <div className="border-border border-2 rounded-lg h-[700px] w-[90%] md:w-[400px]">
          <div>
            <h1 className="text-slate-200 text-3xl w-72 p-2">
              Check out the hottest sale offers
            </h1>
          </div>
          <div className="mt-4">
            <Cards showHeader={false} />
          </div>
          <div className="flex items-center justify-center p-2 mt-5">
            <Link
              to="/view-more"
              className="border-2 border-border rounded-lg text-xs flex items-center justify-center p-2 text-slate-200 w-full"
            >
              <button>Show me more</button>
            </Link>
          </div>
        </div>
        <div className="flex items-center flex-col justify-between border-border border rounded-lg h-[700px] w-[90%] md:w-[400px] bg-gradient-to-t from-[#060714] to-[#262840]">
          <div className="relative bottom-4 right-[120px] bg-[#262840] w-40 rounded-se-[70%] ">
            <HiDotsHorizontal className="ml-1" fill="gray" size={20} />
          </div>
          <div className="relative bottom-20">
            <img src={hand} alt="" className="w-full h-auto" />
          </div>
          <div className="relative bottom-28 mt-10">
            <h1 className="text-2xl font-bold text-white p-2 w-72">
              Get started creating & selling your NFT's
            </h1>
            <p className="text-ashTextColor text-sm p-2 ">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.{" "}
            </p>
            <div className="flex items-center justify-center">
              <button className="text-white rounded-md inset-shadow-[#4745D0] bg-[#4745D0] w-full flex items-center justify-center p-2 text-xs mt-3">
                Get Started
              </button>
            </div>
          </div>
        </div>
        <div className="border-border border-2 rounded-lg h-[700px] w-[90%] md:w-[400px] p-4 flex flex-col justify-between">
          <div>
            <h1 className="text-white text-2xl font-bold">
              Top NFT at a lower price
            </h1>
          </div>
          <div className="">
            <AltCards />
          </div>
          <div className="">
            <button className="w-full border-2 border-border flex items-center justify-center p-2 text-slate-200 text-xs rounded-lg ">
              Show me more
            </button>
          </div>
        </div>
      </section>

      <div
        id="about"
        className="h-[600px] mt-8 flex justify-center mx-auto items-center w-[90%] md:w-[1200px] gap-10"
      >
        <div className="flex items-center justify-center p-2 w-full md:w-[500px] mx-auto">
          <img src={leftImage} alt="An image" className="w-full h-auto" />
        </div>
        <div className="w-full md:w-[500px] mx-auto p-2">
          <div className="py-4">
            <p className="text-ashTextColor py-3">OVERLINE</p>
            <h1 className="lg:text-4xl md:text-2xl sm:text-xl w-96 text-white font-bold font-serif">
              Habitant tristique aliquam in vel scelerisque
            </h1>
            <p className="lg:text-sm sm:text-sm mt-4 text-ashTextColor font-serif">
              Ut amet vulputate faucibus vitae semper eget auctor. Diam tempor
              pulvinar ultricies dolor feugiat aliquam commodo.
            </p>
          </div>
          <div className="mt-5 grid grid-cols-2 gap-4">
            <div>
              <div>
                <img src={paint} alt="" />
              </div>
              <div className="mt-4">
                <p className="text-white">Sollicitudin sapien</p>
                <p className="text-ashTextColor">Cursus fermentum</p>
              </div>
            </div>
            <div>
              <div>
                <img src={circle} alt="" />
              </div>
              <div className="mt-4">
                <p className="text-white">Pulvinar metus</p>
                <p className="text-ashTextColor">Nunc sed</p>
              </div>
            </div>
          </div>
          <div className="flex items-center mt-7 gap-4 flex-wrap">
            <button className="text-white p-2 rounded-md inset-shadow-[#4745D0] bg-[#4745D0]  w-full md:w-auto">
              Get Started
            </button>
            <button className="border-2 border-border flex items-center justify-center p-2 text-slate-200 rounded-md w-full md:w-auto">
              Learn more
            </button>
          </div>
        </div>
      </div>
      <div className="border border-border"></div>
      <div className="text-white mt-4 w-[90%] mx-auto flex flex-col justify-between">
        <div className="p-4">
          <p className="text-xs text-ashTextColor text-center mb-2">OVERLINE</p>
          <h1 className="text-3xl font-serif text-center">
            Most popular live auctions
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
      <div className="border mt-5 border-border w-[90%] mx-auto"></div>
      <div className="mt-10">
        <div className="w-full flex justify-center items-center text-center gap-10 h-[200px] mt-8 text-white flex-wrap">
          {Times.map((time) => (
            <div key={time.id} className="flex flex-col items-center">
              <div>{time.icon}</div>
              <div className="text-4xl font-semibold font-serif">
                {time.amount}
              </div>
              <div className="text-sm">{time.title}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="p-4 mt-10">
        <div className="bg-slate-800 text-white w-[70%] mx-auto rounded-xl rounded-tl-none relative">
          <div className="absolute -top-4 left-0 bg-slate-800 w-40 p-1 rounded-lg rounded-tr-none flex items-center justify-center">
            <HiDotsHorizontal className="text-gray-400" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 p-6 gap-6">
            <div className="flex flex-col justify-between space-y-4">
              <p className="text-xs text-gray-400 tracking-widest">OVERLINE</p>
              <h1 className="text-4xl font-bold leading-snug">
                Cursus vitae sollicitudin donec nascetur. <br /> Join now
              </h1>
              <p className="text-sm text-gray-400">
                Donec volutpat bibendum justo, odio aenean congue est porttitor
                ut. Mauris vestibulum eros libero amet tincidunt.
              </p>
              <div className="flex items-center gap-4">
                <button className="text-white py-2 px-6 inset-shadow-[#4745D0] bg-[#4745D0] rounded-lg">
                  Get Started
                </button>
                <button className="border-2 border-gray-500 py-2 px-6 text-gray-300 rounded-lg">
                  Learn more
                </button>
              </div>
            </div>

            <div className="flex flex-col space-y-4">
              <div className="bg-gray-900 p-4 rounded-lg w-72 flex items-center space-x-3">
                <div className="w-10 h-10 bg-gray-700 rounded-full" />{" "}
                <div>
                  <p className="text-sm font-semibold">@brook_sim</p>
                  <p className="text-xs text-gray-400">
                    Items 206 | Collection 12
                  </p>
                </div>
                <p className="ml-auto text-blue-400 text-sm">4.76 ETH</p>
              </div>

              <div className="relative left-[300px] bg-gray-900 p-4 rounded-lg w-72 flex items-center space-x-3">
                <div className="w-10 h-10 bg-gray-700 rounded-full" />
                <div>
                  <p className="text-sm font-semibold">@marvinmckin</p>
                  <p className="text-xs text-gray-400">
                    Items 479 | Collection 24
                  </p>
                </div>
                <p className="ml-auto text-blue-400 text-sm">7.63 ETH</p>
              </div>

              <div className="relative left-[100px] bg-gray-900 p-4 rounded-lg w-72 flex items-center space-x-3">
                <div className="w-10 h-10 bg-gray-700 rounded-full" />
                <div>
                  <p className="text-sm font-semibold">@esther_howard</p>
                  <p className="text-xs text-gray-400">
                    Items 387 | Collection 10
                  </p>
                </div>
                <p className="ml-auto text-blue-400 text-sm">5.31 ETH</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
