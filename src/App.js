
import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashBoard from "./pages/DashBoard/DashBoard";
import Product from "./pages/Products/Product";
import Sales from "./pages/Transaction/Sales";
import Inventory from "./pages/Inventory/Inventory";
import Customer from "./pages/customer/Customer";

function App() {
  return (
    <div  >
    <BrowserRouter>
      <Sidebar />
      <Routes>
        <Route path="/" element={<DashBoard />}/>
        
         
          <Route path="/product" element={<Product />}/>
          <Route path="/inventory" element={<Inventory />}/>
          <Route path="/customer" element={<Customer />}/>
          <Route path="/sales" element={<Sales/>}/>
        </Routes>
      </BrowserRouter >
      </div>
  );
}

export default App;
