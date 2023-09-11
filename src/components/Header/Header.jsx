import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { AiOutlineCloseSquare } from "react-icons/ai";
import { TbMailFilled } from "react-icons/tb";
import { CgProfile, CgMenuGridO } from "react-icons/cg";
import { MdOutlineNotificationsNone } from "react-icons/md";
import Profile from "../Profile/Profile";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [menu, setMenu] = useState(false);
  const [profile, setProfile] = useState(false);
  const navigate =useNavigate

  const handleSearch = () => {
    document.querySelector(".Search").classList.add("translate-y-10");
    document.querySelector(".Search").classList.add("z-2");
  };
  const handleClose = () => {
    setMenu(false);
  };
  const handleMenu = () => {
    setMenu(true);
  };
  return (
    <header className=" bg-[#131314] text-white  ">
      <nav className=" relative  ">
        <div className="flex  justify-between mx-auto w-[90%]  py-6  ">
          <div>
            <h1 className="font-semibold font-Open-Sans text-3xl"
            onClick={navigate("/home")}
            >My Wallet</h1>

            <div className="Search md:hidden absolute w-[90%]  flex justify-between items-center   transition-all bg-black    px-3 py-2 rounded  z-[-1]  -translate-y-8  focus-within:translate-y-10">
              <input
                className=" w-full   outline-none  transition-all bg-transparent  "
                type="text"
                placeholder=" Search Trasections Here..."
              />
              <AiOutlineCloseSquare
                onClick={() => {
                  document
                    .querySelector(".Search")
                    .classList.remove("translate-y-10");
                  document.querySelector(".Search").classList.remove("z-2");
                  console.log("fff");
                }}
              />
            </div>
          </div>

          <div
            className={`flex items-center flex-col md:flex-row  max-[767px]:absolute md:h-auto h-[calc(100vh-84px)] bg-[#13131476]  right-0 top-[84px] overflow-hidden md:overflow-auto transition-all  ${
              menu ? "w-20 md:w-auto  " : "w-0  md:w-auto "
            }`}

            //   className="flex items-center flex-col sm:flex-row  max-[640px]:absolute sm:h-auto h-[calc(100vh-84px)] bg-[#13131476]  right-0 top-[84px] px-4    "
          >
            <div className="hidden  group md:flex  items-center  px-3    py-2  text-white hover:bg-[#ffffff35]  focus-within:bg-[#ffffff35] mt-6 md:mt-0">
              <input
                className="group-hover:w-[220px] focus-within:w-[220px] peer   outline-none w-0 transition-all bg-transparent  "
                type="text"
                placeholder=" Search Trasections Here..."
              />
              <BsSearch className="flex-shrink-0  " />
            </div>
            <BsSearch
              className="flex-shrink-0 mt-8 md:hidden "
              onClick={() => {
                handleClose();
                handleSearch();

                // document.querySelector(".hearder1").classList.add("translate-y-0");
              }}
            />

            <TbMailFilled
              className="flex-shrink-0   text-2xl md:ml-12 mt-12 md:mt-0 "
              onClick={handleClose}
            />

            <MdOutlineNotificationsNone
              className="flex-shrink-0   text-2xl md:ml-12 mt-12 md:mt-0"
              onClick={handleClose}
            />
            {/* profile *********************** */}
            <div className="">
              <CgProfile
                className="flex-shrink-0   text-3xl  md:ml-12 mt-12 md:mt-0"
                onClick={() => {
                  handleClose();
                  setProfile(!profile);
                }}
              />
              <div
                className={`absolute hidden md:grid    top-[86px] right-0   transition-all    ${
                  profile ? "grid-rows-[1fr] border-[1px] border-white rounded-es-md  overflow-hidden" : "grid-rows-[0fr]"
                } `}
              >
                <Profile/>
              </div>
            </div>

            {/* ******************************************** */}
          </div>

          <div className="flex md:hidden text-white">
            {menu ? (
              <AiOutlineCloseSquare
                className="flex-shrink-0  my-auto  text-3xl "
                onClick={handleClose}
              />
            ) : (
              <CgMenuGridO
                className="flex-shrink-0  my-auto  text-3xl  "
                onClick={handleMenu}
              />
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
