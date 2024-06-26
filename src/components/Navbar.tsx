import { FC, useState } from "react";
import hyggexLogo from "../assets/logo-full.svg";
import { menuLinks } from "../data";
import { RiCloseFill, RiMenu3Fill } from "react-icons/ri";

const Navbar: FC = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavToggle = () => {
    setIsNavOpen((prevState) => !prevState);
  };

  return (
    <>
      <div className="h-[5rem] fixed z-50 top-0 left-0 right-0 max-w-[1280px] mx-auto">
        <nav className=" flex justify-between items-center font-inter bg-white px-6 py-6 ">
          <img src={hyggexLogo} alt="Hyggex Logo" className="w-36 md:w-auto" />
          <div className="justify-between items-center hidden md:flex gap-[40px]">
            <ul className="flex justify-between items-center gap-6">
              {menuLinks.map((menuLink, index) => (
                <li
                  key={index}
                  className="text-[#3A3740] text-[18px] hover:drop-shadow-2xl transition-colors duration-200 cursor-pointer"
                >
                  {menuLink.text}
                </li>
              ))}
            </ul>
            <button className="bg-gradient-to-b from-[#06286E] to-[#164EC0] px-4 py-2 text-white rounded-full w-[128px] h-[48px] hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)]  transition-colors duration-500">
              Login
            </button>
          </div>

          <div
            onClick={handleNavToggle}
            className="block md:hidden cursor-pointer"
          >
            {isNavOpen ? (
              <RiCloseFill
                size={25}
                className="block lg:hidden animate-fade-in-out text-[#06286E]"
              />
            ) : (
              <RiMenu3Fill
                size={25}
                className="block lg:hidden animate-fade-in-out text-[#06286E]"
              />
            )}
          </div>
        </nav>
      </div>

      {/* MOBILE NAV  */}
      <div
        className={`mobile-nav fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 lg:hidden transition-opacity z-[45] pt-4 ${
          isNavOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={handleNavToggle}
        onScroll={handleNavToggle}
      >
        <div className="bg-gradient mt-20 md:mt-0 rounded-3xl w-[60%] ml-auto mr-[5%] text-white p-4 text-sm shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
          <ul className="flex flex-col items-center w-full justify-center gap-6 pb-4 transition-transform duration-300 border-b-[1px] border-white">
            {menuLinks.map((menuLink) => (
              <li
                //   key={menuLink}
                className="p-2 px-4 cursor-pointer  transition-colors duration-200 hover:bg-white hover:text-blacks w-full text-center rounded-lg hover:text-black"
              >
                {menuLink.text}
              </li>
            ))}
          </ul>

          <button className="bg-white px-4 py-2 text-[#06286E] rounded-full w-[128px] h-[48px] hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)]  transition-colors duration-500 mt-[1rem] font-bold">
            Login
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
