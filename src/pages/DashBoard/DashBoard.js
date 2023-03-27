import React, { useState, useEffect } from "react";
import LargeCard from "./Cards/LargeCard";
import MediumCards from "./Cards/MediumCards";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChartLine} from '@fortawesome/free-solid-svg-icons';


import LineChart from "./chart";

import { CSVLink } from "react-csv";
import "./DashBoard.css";

import axios from "axios";
const DashBoard = () => {
  const token = localStorage.getItem("Token");
  const [monthUserData, setMonthUserData] = useState([]);
 
  const [totalAmountDaily, setTotalAmountDaily] = useState(0);
  const [transaction, totalTransactions] = useState([]);
  const [currentDate, setCurrentDate] = useState();
  const [max, setMax] = useState(0);
  const [lastTransaction, setLastTransaction] = useState();
  const [listArray, setListArray] = useState();
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

        // console.log(response.data.response.transactionDetails);
        setSize(response.data.response.size);
        setMonthUserData(response.data.response.transactionDetails);
        if (monthUserData.length <= 5) {
        

          const arrayList = [];
         
          monthUserData.map((item) => {
            arrayList.push(item);
           
         })
          setListArray(arrayList);
         
          // console.log(listArray);
          
         
        }
        else if(monthUserData.length>5) {
          var length = monthUserData.length;
          const listStartPoint = length - 5;
          const arrayList = [];
          const arrayList2 = [];

          for (let i = listStartPoint; i < length; i++)
          {
            arrayList.push(monthUserData[i]);
           
            
          
           
          }
          setListArray(arrayList);
          
          // console.log(listArray);
          
          
        }

        

      

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
  let count = 0;
    for (let i = 0; i < totalAmountArray.length; i++) {
      result = result + totalAmountArray[i];
      if (totalAmountArray[i] > 0)
      {
        count++;
        }
      
    }
    let maximum = Math.max(...totalAmountArray);
    setMax(maximum);
    totalTransactions(count);
    setTotalAmountDaily(result);

  }

  const getWeeklyData = () => {
    const totalAmountArray = monthUserData.map((item, index) => {
      return item.totalAmount;
    });
    let result = 0;
    let count = 0;

    for (let i = totalAmountArray.length - 1; i >= 0; i++)
    {
      console.log(totalAmountArray[i]);
      if (totalAmountArray[i] > 0)
      {
        setLastTransaction(totalAmountArray[i]);

        count = i;
        break;
        }
    }
    
    // for (let i = 0; i < 7; i++)
    // {
    //   result=result+totalAmountArray[count-i-1]
    // }
    
   

  }


  useEffect(() => {
    getTransactionData();
    getWeeklyData();
  })

  return (
    <div>
      <div className="dashBoardStyle" >
      <div
        className="dashBoard-cards"
        style={{
          display: "flex",
          flexDirection:"column",
          justifyContent: "space-between",
          marginTop: "14vh",
          marginLeft: "2rem",
          marginBottom: "2rem",
          marginRight: "2rem",
        }}
      >
    
      <div className='cards-large'>
      <LargeCard  icon={faChartLine} text="Total Sales : "  data={totalAmountDaily} />
            <LargeCard text="No. of Purchase :  " data={transaction} />
            <LargeCard text="Last Transaction : "  data={lastTransaction} />
    
      </div>
     
      <div className='cards-medium' >
      <MediumCards text="Inventory" text1="Total Item " text2="Low Item" />
      <MediumCards text="Users" text1="Total Customers" text2="Total Vendors" />
       <MediumCards text="Products" text1="Total Products" text2="Out of Stock" />
        </div>

    </div>
        
      <div
        className="dashBoard-charts"
        style={{ display: "flex", justifyContent: "space-between", marginTop: "14vh",
        marginLeft: "2rem",
        marginBottom: "2rem",
        marginRight: "2rem", }}
      >
        <LineChart className="dashBoard-monthChart" />
      
      </div>

      

    
      </div>  
  
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        
         
        }}
      >
        <button
          
          style={{
            borderRadius: "8px",
            background: "navy",
            marginRight: "297px",
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
