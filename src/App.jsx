import React, { useEffect, useState } from "react";
import Home from "./pages/Home/Home";
import { Route, Routes } from "react-router-dom";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./components/Login/Login";
import SignUp from "./components/Login/SignUp";

function App() {
  return (
    <>
      <main>
        <Routes>
          <Route path="/wallet/home" element={<Home />} />
          <Route path="/" element={<Login />} />
          <Route path="/wallet/sign-up" element={<SignUp />} />
        </Routes>
        <ToastContainer position="top-right" autoClose={800} />
      </main>
    </>
  );
}

export default App;
