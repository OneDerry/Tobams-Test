import logo from "../assets/Sygnet.svg";

export default function Navbar() {
  return (
    <div className="grid grid-cols-3 justify-center gap-4 items-center p-2">
      <div className="rounded sm:w-[480px] p-1">
        <img src={logo} alt="" width={"50px"} />
      </div>
      <div className="flex items-center justify-center p-4 gap-8 text-slate-400">
        <a
          href="#about"
          className="p-1 text-md hover:border-b rounded"
        >
          Auction
        </a>
        <a
          href="#admission"
          className="p-1 text-md hover:border-b rounded "
        >
          Roadmap
        </a>
        <a
          href="#media"
          className="p-1 text-md hover:border-b rounded "
        >
          Discovery
        </a>
        <a
          href="#contacts"
          className="p-1 text-md hover:border-b rounded"
        >
          Community
        </a>
      </div>
      <div className="flex items-center justify-end gap-3">
        <div>
          <button className="p-2 flex items-center text-[#FFFFFF] text-md rounded ">
            Contact
          </button>
        </div>
        <div>
          <button className="p-2 flex items-center justify-center bg-gradient-to-tr from-[#4745D0]  to-[#2A27C9] text-[#FFFFFF] text-md rounded ">
            My account
          </button>
        </div>
      </div>
    </div>
  );
}
