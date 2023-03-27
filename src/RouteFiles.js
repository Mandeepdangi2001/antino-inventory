import React from "react";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashBoard from "./pages/DashBoard/Dash_Board";
import Inventory from "./pages/Products/Product";
import Sales from "./pages/Transaction/Sales";
// import Inventory from "./pages/Inventory/Inventory";
import Customer from "./pages/customer/Customer";
import Login from "./pages/Login/firstPage";
import Logout from "./pages/LogOut/logout";
import SignUp from "./pages/Login/SignUp";

import Employee from "./pages/Employee/Employee";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const User_Type = {
  O: "O",
  S: "S",
};

function RouteFiles() {
  const Navigate = useNavigate;
 
  const current_user = window.role;

  return (
    <div>
      <BrowserRouter>
        <Routes >
          <Route
            path="/"
            element={
              <Login />
            }
          ></Route>
     <Route
            path="/signUp"
            element={
              <SignUp/>
            }
          ></Route>

          <Route
          
            exact
            path="/dashboard"
            element={<DashBoard /> }
          />

          <Route path="/product" element={<Inventory />} />
          <Route path="/customer" element={<Customer />} />
          <Route path="/sales" element={<Sales />} />

          <Route path="/employee" element={<Employee />} />

          <Route path="/" element={<Logout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}



export default RouteFiles;
