import logo from "../assets/Sygnet.svg";

export default function Navbar() {
  return (
    <div className="grid grid-cols-3 justify-center gap-4 items-center p-4">
      <div className="rounded sm:w-[40px] p-1">
        <img src={logo} alt="" width={"50px"} />
      </div>
      <div className="flex items-center justify-center p-4 gap-8 text-slate-400">
        <a href="#about" className="p-1 text-xs hover:border-b rounded">
          Auction
        </a>
        <a href="#admission" className="p-1 text-xs hover:border-b rounded ">
          Roadmap
        </a>
        <a href="#media" className="p-1 text-xs hover:border-b rounded ">
          Discovery
        </a>
        <a href="#contacts" className="p-1 text-xs hover:border-b rounded">
          Community
        </a>
      </div>
      <div className="flex items-center justify-end gap-3">
        <div>
          <button className="p-2 flex items-center text-[#FFFFFF] text-xs rounded ">
            Contact
          </button>
        </div>
        <div>
          <button className="p-2 flex items-center justify-center rounded-md inset-shadow-[#4745D0] bg-[#4745D0] text-[#FFFFFF] text-xs rounded ">
            My account
          </button>
        </div>
      </div>
    </div>
  );
}
