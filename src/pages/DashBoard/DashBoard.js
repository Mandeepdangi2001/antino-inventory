import React, { useState, useEffect } from "react";
import Card from "./card";
import LineChart from "./chart";
import YearChart from "./yearChart";
import { CSVLink } from "react-csv";
import "./DashBoard.css";

import axios from "axios";
const DashBoard = () => {
  const token = localStorage.getItem("Token");
  const [monthUserData, setMonthUserData] = useState([]);
  const [yearlyUserData, setYearlyUserData] = useState([]);
  const [totalAmountDaily, setTotalAmountDaily] = useState(0);
  const [dailyTransaction, setDailyTransactions] = useState([]);
  const [currentDate, setCurrentDate] = useState();
  const [max, setMax] = useState(0);
  // const[size,setSize]=useState("");

  const [size, setSize] = useState();
  useEffect(() => {
    async function getCartData() {
      try {
        const response = await axios.get(
          "http://localhost:8080/transactions/current-month/sales",
          {
            headers: {
              Authorization: `Bearer ${token}`,
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          }
        );
        // console.log("Cart returned the data: ", window.token);

        console.log(response.data.response.transactionDetails);
        setSize(response.data.response.size);
        setMonthUserData(response.data.response.transactionDetails);
        getTransactionData();
      } catch (error) {
        console.log(">>>>>>>>>>> error is ", error);
      }
    }
    getCartData();
  }, []);
  const getTransactionData = () => {
    const totalAmountArray = monthUserData.map((item, index) => {
      return item.totalAmount;
    });
    let result = 0;
  
    for (let i = 0; i < totalAmountArray.length; i++) {
      result = result + totalAmountArray[i];
      
    }
    let maximum = Math.max(...totalAmountArray);
    setMax(maximum);
    setTotalAmountDaily(result);

  }
  useEffect(() => {
    getTransactionData();
  })

  return (
    <div>
      <div
        className="dashBoard-cards"
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "12vh",
          marginLeft: "2rem",
          marginBottom: "2rem",
          marginRight: "2rem",
        }}
      >
        <Card data={size} Text="No. Of Transactions" />
        <Card data={totalAmountDaily} Text="Total Amount " />
        <Card data ={max} Text="Max Transaction" />
      </div>

      <div
        className="dashBoard-charts"
        style={{ display: "flex", justifyContent: "left" }}
      >
        <LineChart className="dashBoard-monthChart" />
      
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "left",
          marginLeft:"280px"
         
        }}
      >
        <button
          
          style={{
            borderRadius: "8px",
            background: "black",
            marginLeft: "90px",
            marginBottom:"2px",
            cursor: "pointer",
            padding: "0.35rem",
          }}
        >
          <CSVLink style={{ color: "white" }} data={monthUserData}>
            {" "}
            Download Report
          </CSVLink>
        </button>
        
      </div>
    </div>
  );
};

export default DashBoard;
