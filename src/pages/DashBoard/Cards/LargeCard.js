import React from 'react'
import "./largecard.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faChartLine } from '@fortawesome/free-solid-svg-icons';

const LargeCard = ({text,data}) => {
  return (
    <div>
      <div className="card-large" >
      
        <h1 style={{ display: "flex", fontSize: "25px", marginLeft: "25px", marginTop: "27px" }}><FontAwesomeIcon icon={faChartLine} size="xl" style={{ marginRight: "20px" }} />{text}{ data}</h1>
        <div className="card-body-large" >
        
        </div>
      </div>
   </div>
  )
}

export default LargeCard