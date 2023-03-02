import React,{useState,useEffect} from "react";
import Card from "./card";
import LineChart from "./chart";
import YearChart from "./yearChart";
import { CSVLink } from 'react-csv';

import axios from "axios";
const DashBoard = () => {
  const [monthUserData, setMonthUserData] = useState([]);
  const [yearlyUserData, setYearlyUserData] = useState([]);

  useEffect(() => {
  
    axios.get("https://mocki.io/v1/b0bb67c5-e4f9-4002-9ef1-a36e1e7f9ba6")
      .then(res => setMonthUserData(res.data)
      );
  }, []);
  console.log(monthUserData);

  
  useEffect(() => {
  
    axios.get("https://mocki.io/v1/8cdd4023-6bc5-401f-a8c1-66c61c3cddc9")
      .then(res => setYearlyUserData(res.data)
      );
  }, []);
  
  
     


  // const monthlyReport = () => {
    
  //   const ws = XLSX.utils.json_to_sheet([monthUserData]);
  //   const wb = { Sheets: {data:ws}, SheetsName: ["data"] };
  //   const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
  //   const data1 = new Blob([excelBuffer], { type: "xlsx" });
  //   FileSaver.saveAs(data1, "myFile" + ".xlsx");

  // }
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "12vh",
          marginBottom: "2rem",
        }}
      >
        <Card data="Total Transactions : 1000" />
        <Card data="Total Amount :34 " />
        <Card data="Pending Transaction :5" />
      </div>

      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <LineChart />
        <YearChart />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "30px",
        }}
      >
        <button 
          style={{
            borderRadius: "8px",
            background: "lightBlue",
            color: "black",
            cursor: "pointer",
          }}
        >
          <CSVLink data={monthUserData}> Download Report</CSVLink>
         
        </button>
        <button
          // onClick={yearlyReport}
          style={{
            borderRadius: "8px",
            background: "lightBlue",
            color: "black",
            cursor: "pointer",
            ":hover": {
              color:"blue"

            }
          }}
        >
           <CSVLink data={yearlyUserData}> Download Report</CSVLink>
        
        </button>
      </div>
    </div>
  );
};

export default DashBoard;
