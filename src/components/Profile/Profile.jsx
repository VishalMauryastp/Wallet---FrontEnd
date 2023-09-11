import React from "react";
import { CgProfile} from "react-icons/cg";

const Profile = () => {
  return (
    <div className="overflow-hidden ">
      <div className="w-[375px] p-4  bg-black text-white     ">
        <div className="flex gap-3  ">
          <div>
            <CgProfile className="flex-shrink-0   text-5xl" />
          </div>
          <div>
            <h1>Vishal Maurya</h1>
            <p>vishal@gmail.com</p>

            <button className="bg-[#ffffff35] px-3 py-1 mt-3">log out</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
