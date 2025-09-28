import logo from "../assets/Sygnet.svg";

export default function Navbar() {
  return (
    <div className="flex flex-col lg:grid lg:grid-cols-3 justify-between items-center p-4 gap-4">
      <div className="flex items-center justify-center lg:justify-start">
        <img src={logo} alt="" className="h-12 w-12" />
      </div>

      {/* Mobile Navigation - Hidden on larger screens */}
      <div className="flex items-center justify-center gap-4 text-slate-400 lg:hidden">
        <a href="#about" className="p-1 text-xs hover:border-b rounded">
          Auction
        </a>
        <a href="#admission" className="p-1 text-xs hover:border-b rounded">
          Roadmap
        </a>
        <a href="#media" className="p-1 text-xs hover:border-b rounded">
          Discovery
        </a>
        <a href="#contacts" className="p-1 text-xs hover:border-b rounded">
          Community
        </a>
      </div>

      {/* Desktop Navigation - Hidden on mobile */}
      <div className="hidden lg:flex items-center justify-center p-4 gap-8 text-slate-400">
        <a href="#about" className="p-1 text-xs hover:border-b rounded">
          Auction
        </a>
        <a href="#admission" className="p-1 text-xs hover:border-b rounded">
          Roadmap
        </a>
        <a href="#media" className="p-1 text-xs hover:border-b rounded">
          Discovery
        </a>
        <a href="#contacts" className="p-1 text-xs hover:border-b rounded">
          Community
        </a>
      </div>

      <div className="flex items-center justify-center lg:justify-end gap-2 lg:gap-3">
        <button className="p-2 flex items-center text-[#FFFFFF] text-xs rounded hover:bg-gray-800 transition-colors">
          Contact
        </button>
        <button className="p-2 flex items-center justify-center rounded-md inset-shadow-[#4745D0] bg-[#4745D0] text-[#FFFFFF] text-xs hover:bg-[#3a37b8] transition-colors">
          My account
        </button>
      </div>
    </div>
  );
}
