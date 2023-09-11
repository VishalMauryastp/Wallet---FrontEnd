import axios from "axios";
import React, { useState } from "react";
import { BiHide, BiShow } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SignUp = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  });
  const Base_Url = import.meta.env.VITE_BASE_URL;

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSignUp = (data) => {
    if (
      formData.username.trim() !== "" &&
      formData.email.trim() !== "" &&
      formData.password.trim() !== ""
    ) {
      axios({
        method: "post",
        url: `${Base_Url}/auth/signup`,
        data: data,
      })
        .then((result) => {
          setFormData({
            username: "",
            password: "",
            email: "",
          });
          toast.success("Sign up successfully");
          console.log(result);
        })
        .catch((err) => {
          console.log(err);
          toast.error("Error in sign up");
        });
    } else {
      toast.error("Fill all input fields");
    }
  
    // console.log(formData);
  };
  

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 ">
      <div className="bg-white p-8 rounded shadow-md w-full md:w-96 mx-3">
        <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="mt-1 p-2 w-full border rounded"
              value={formData.username}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium">
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              className="mt-1 p-2 w-full border rounded"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium">
              Password
            </label>
            <div className="relative flex px-2 mt-1 focus-within:outline outline-2  border-[1px] rounded">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                className="border-none outline-none py-2 w-full rounded"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
              <button
                type="button"
                className=" pl-2 flex items-center outline-none  "
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <BiShow /> : <BiHide />}
              </button>
            </div>
          </div>
          <button
            type="button"
            className="w-full bg-blue-500 text-white p-2 rounded"
            onClick={() => {
              handleSignUp(formData);
            }}
          >
            Sign Up
          </button>
          <button
            className="w-fit ml-auto mr-5 block mt-4 hover:text-blue-500 group"
            onClick={() => {
              navigate("/");
            }}
          >
            Already registerd / Log In{" "}
            <BsArrowRight className="self-center inline-block group-hover:translate-x-2 transition-all" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
