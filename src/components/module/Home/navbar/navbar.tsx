import Logo from "@/components/logo/logo";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-[999] px-[2.5em] py-6 bg-[#faf4ec] flex items-center justify-around font-['Inter',sans-serif]">
      
      {/* Logo */}
      <div className="flex-shrink-0">
        <Logo />
      </div>

      {/* Floating Pill Menu */}
      <nav className="hidden md:flex bg-white rounded-full px-2 py-2 shadow-[0_4px_20px_rgba(0,0,0,0.03)] items-center border border-gray-50">
        <ul className="flex items-center gap-1 text-[0.95em] font-semibold text-[#161616]">
          {["Expertises", "Work", "About", "Contact"].map((item) => (
            <li 
              key={item}
              className="px-6 py-2 rounded-full hover:bg-[#faf4ec] transition-colors cursor-pointer"
            >
              {item}
            </li>
          ))}
        </ul>
      </nav>

      {/* Action Button - No Border, Tilt on Hover */}
      <div className="flex items-center">
        <button className="group flex items-center gap-3 bg-[#fcb8fa] hover:bg-[#fba6f8] text-[#161616] font-bold py-1.5 pl-5 pr-1.5 rounded-full transition-transform duration-300 hover:rotate-[-3deg] active:scale-95">
          <span className="text-[1.1em] tracking-tight">Get Results</span>
          
          {/* Icon Container */}
          <div className="bg-[#fffef7] p-2 rounded-2xl shadow-sm flex items-center justify-center">
            <svg 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="#fa5424" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.507 14.303l.251-.303c1.088-1.321 1.622-2.311 1.622-3.812 0-2.433-1.614-4.524-3.837-5.111.127.319.191.666.191 1.026 0 1.157-.648 2.195-1.677 2.695-1.03.499-2.251.353-3.134-.374-.153-.125-.328-.153-.418-.046-.09.106-.068.286.071.464 1.159 1.484 1.433 3.654.542 5.176-.114.195-.246.38-.395.553C9.074 16.324 8 18.232 8 20.301c0 1.25.438 2.39 1.168 3.292-.375-.623-.591-1.346-.591-2.12 0-1.802.775-3.35 2.112-4.47.164-.138.312-.138.408-.003.097.135.074.316-.062.531-1.116 1.76-1.028 4.102.131 5.626l.162.213C12.449 23.823 13.731 24 15.08 24c3.414 0 6.182-2.821 6.182-6.301 0-1.284-.376-2.478-1.026-3.483l-.004-.006a6.04 6.04 0 01-2.725.093z" />
            </svg>
          </div>
        </button>
      </div>
    </header>
  );
};

export default Navbar;