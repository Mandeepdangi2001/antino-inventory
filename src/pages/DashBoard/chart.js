import React,{useEffect,useState} from 'react'
import { Line } from "react-chartjs-2";
import axios from 'axios';
import { Chart as ChartJs, Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement, Filler } from 'chart.js';
import card from './card';
ChartJs.register(
  Title,Tooltip,LineElement,Legend,CategoryScale,LinearScale,PointElement,Filler

)

const LineChart = () => {
  const [data, setData] = useState({
    labels: [],
    datasets:[
    //  labels: [1,2,3,4, 5,6],
    //  datasets: [
      {
        label: "first Dataset",
      
        data: [1,2,3,4,5,6],
        backgroundColor: "yellow",
        borderColor: "red",
        tension: 0.4
      }
    ]
  })
 

  useEffect(() => {
    const loadData = async () => {
      await axios.get("https://mocki.io/v1/b0bb67c5-e4f9-4002-9ef1-a36e1e7f9ba6")
        .then(res => { 
          setData({
            labels: res.data.map((item) => +item.Date),
            datasets: [{
              label: "Monthly Transactions ", data: res?.data.map((item) => +item.Transaction),
              backgroundColor: "blue",
               borderColor: "red",
              tension: 0.4,
                Filler: true,
               

                
            }]
            
        })
        }
        )
    }
    loadData();
  
    
  } ,[])
    return (
      <div  >
     
        
        <Line data={data} style={{width:"600px",height:"300px"}}></Line>
      </div>

    )
  }
  


export default LineChart;