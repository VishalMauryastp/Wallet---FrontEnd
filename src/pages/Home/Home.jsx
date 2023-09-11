import React from "react";
import Header from "../../components/Header/Header";
import Balance from "../../components/Home/Balance";
import Trasections from "../../components/History/Trasections";

const Home = () => {
  return (
    <div className="bg-[#131314]">
      <Header />
      <div className=" min-h-[calc(100vh-84px)] ">
        <div className="w-[80%] mx-auto flex flex-col lg:flex-row gap-4 mt-8    ">
          <Balance />
          <div className="text-white border-2 border-white rounded-md">
            <h1 className="text-2xl font-semibold w-fit mx-auto mt-4 ">
              Trasection History
            </h1>

            <Trasections />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
