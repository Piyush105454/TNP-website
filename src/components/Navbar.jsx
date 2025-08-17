import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="bg-white shadow-md px-6 py-4 flex items-center justify-between static top-0 z-50 border-b border-gray-200 flex-wrap md:flex-nowrap">
      
      {/* Logo & Title */}
      <div className="flex items-center gap-4 w-full md:w-auto justify-between">
        <div className="flex items-center gap-4">
          {/* Logo from public folder */}
          <img
            src="./bgImages/tnp_logo.png"  
            alt="RGPV Logo"
            className="w-12 h-12 object-cover rounded-full border-2 border-gray-100 shadow-sm"
          />
          <h1 className="text-xl font-semibold text-gray-800 tracking-tight">
            Training and Placement RGPV
          </h1>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-800 text-2xl ml-4"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Navigation Links */}
      <div
        className={`flex-col md:flex md:flex-row md:items-center md:gap-6 gap-2 mt-2 md:mt-0 w-full md:w-auto ${
          menuOpen ? "flex" : "hidden"
        }`}
      >
        <ul className="flex flex-col md:flex-row gap-2 md:gap-6 text-gray-700 font-medium list-none m-0 p-0 w-full md:w-auto">
          {["About Us", "Success Stories", "Recruiters", "Contact"].map(
            (item) => (
              <li
                key={item}
                className="cursor-pointer relative py-2 hover:text-red-600 transition-all duration-300 w-full md:w-auto border-b md:border-none border-gray-100 md:hover:-translate-y-0.5"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-red-600 transition-all duration-300 group-hover:w-full"></span>
              </li>
            )
          )}
        </ul>

        {/* Login Button */}
        <button  onClick={() => navigate("/login")} className="bg-red-600 text-white px-5 py-2 rounded-md text-sm font-medium shadow-md hover:bg-red-700 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 w-full md:w-auto mt-2 md:mt-0">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
