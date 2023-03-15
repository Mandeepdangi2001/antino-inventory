import React,{useState,useEffect} from "react";
import Card from "./card";
import LineChart from "./chart";
import YearChart from "./yearChart";
import { CSVLink } from 'react-csv';
import "./DashBoard.css"

import axios from "axios";
const DashBoard = () => {
  const token = localStorage.getItem('Token');
  const [monthUserData, setMonthUserData] = useState([]);
  const [yearlyUserData, setYearlyUserData] = useState([]);
  // const[size,setSize]=useState("");

  const [size,setSize]=useState();
  useEffect(() => {
    async function getCartData() {
      try {
        const response = await axios.get(
          "http://localhost:8080/transactions/current-month/sales",{ headers: {"Authorization" : `Bearer ${token}`,
          'Accept' : 'application/json',
          'Content-Type': 'application/json'} }
        );
        // console.log("Cart returned the data: ", window.token);
        setSize(response.data.size)
        setMonthUserData(response.data.transactionDetails)
        // console.log(productData[1].description);
      } catch (error) {
        console.log(">>>>>>>>>>> error is ",error);
      }
    }
    getCartData();
  }, []);

  // useEffect(() => {
  
  //   axios.get("http://localhost:8080/transactions/current-month/sales",{ headers: {"Authorization" : `Bearer ${window.token}`},  withCredentials: false })
  //     .then(res => setMonthUserData(res.data.transactionDetails)
  //     );
  // }, []);
  // console.log(monthUserData);

  
  // useEffect(() => {
  
  //   axios.get("https://mocki.io/v1/8cdd4023-6bc5-401f-a8c1-66c61c3cddc9")
  //     .then(res => setYearlyUserData(res.data)
  //     );
  // }, []);
  
  
     


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
        className="dashBoard-cards"
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginTop: "12vh",
          marginBottom: "2rem",
          marginRight:"2rem"
        }}
      >
        <Card data={size} />
       
      </div>

      <div className="dashBoard-charts" style={{ display: "flex", justifyContent: "space-around" }}>
        <LineChart  className='dashBoard-monthChart'/>
        {/* <YearChart className='dashBoard-yearChart'  /> */}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "30px",
        }}
      >
        <button 
          // onClick={yearlyReport}
          style={{
            borderRadius: "8px",
            background: "black",
           
            cursor: "pointer",
            padding:"0.3rem"
          }}
        >
          <CSVLink style={{ color: "white",
            }} data={monthUserData}> Download Report</CSVLink>
         
        </button>
        {/* <button
          // 
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
        
        </button> */}
      </div>
    </div>
  );
};

export default DashBoard;
