import React from "react";
import { PiDotsThreeOutlineVerticalLight } from "react-icons/pi";
import { FaRupeeSign, FaHistory } from "react-icons/fa";
import { BsArrowDownRight, BsArrowUpLeft } from "react-icons/bs";

const Balance = () => {
  const btn = [
    {
      icons: <FaHistory />,
      to: "/history",
      name: "history",
    },
    {
      icons: <BsArrowUpLeft />,
      to: "/send",
      name: "send",
    },
    {
      icons: <BsArrowDownRight />,
      to: "/request",
      name: "request",
    },
    {
        icons:<img className="w-[70%]" src="/wallet (1).png"/>,
    //   icons: <FaHistory />,
      to: "/Top-up",
      name: "Top UP",
    },
  ];
  return (
    <div className=" flex-shrink-0 text-white border-white border-[1px] rounded-md lg:w-[400px] p-6">
      <div className="flex items-center justify-between">
        <h1>Available Balance</h1>
        <PiDotsThreeOutlineVerticalLight className="text-2xl" />
      </div>
      <div className="py-8 flex  ">
        <FaRupeeSign className="text-2xl  mt-4" />
        <p className="text-[48px] ">366660</p>
      </div>
      <div className="flex justify-between">
        {btn.map((val, i) => {
          const { icons, to, name } = val;
          return (
           
              <div
                title={name}
                // to={to}
                className="  "
              >
                <span className="w-[50px] h-[50px]  bg-[#ffffff35] flex justify-center items-center ">{icons}</span>
                <p className="mt-1 text-center">{name}</p>
              </div>
              
         
          );
        })}
      </div>
    </div>
  );
};

export default Balance;
