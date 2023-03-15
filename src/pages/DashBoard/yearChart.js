import React,{useEffect,useState} from 'react'
import { Line } from "react-chartjs-2";
import axios from 'axios';
import "./DashBoard.css"
import { Chart as ChartJs, Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement, Filler } from 'chart.js';
import card from './card';
ChartJs.register(
  Title,Tooltip,LineElement,Legend,CategoryScale,LinearScale,PointElement,Filler

)

const YearChart = () => {
    const [data, setData] = useState({
        labels: [],
        datasets: [],
        //  labels: [1,2,3,4, 5,6],
        //  datasets: [
        //   {
        label: "first Dataset",
      
        //     data: [1,2,3,4,5,6],
        //     backgroundColor: "yellow",
        //     borderColor: "red",
        //     tension: 0.4
        //   }
        // ]
    })
  

    useEffect(() => {
        const loadData = async () => {
            await axios.get("https://mocki.io/v1/8cdd4023-6bc5-401f-a8c1-66c61c3cddc9")
                .then(res => {
                    setData({
                        labels: res.data.map((item) => +item.Date),
                        datasets: [{
                            label: "Yearly Transactions ", data: res?.data.map((item) => +item.Transaction),
                            backgroundColor: "yellow",
                            borderColor: "red",
                            tension: 0.4,
                            Filler: true
                        }]
            
                    })
                }
                )
        }
        loadData();
  
    
    }, [])

    return (
        <div className='dashBoard-yearChart'  >
            <Line data={data} style={{width:"40vw" ,height:"45vh"}}></Line>
        </div>
    )
}

export default YearChart;