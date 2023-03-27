import React from 'react'
import "./mediumcard.css";
import SmallCards from './SmallCards';

const MediumCards = ({text,text1,text2}) => {
  return (
    <div  className="card-medium"  >
     <h1 style={{fontSize:"30px",marginLeft:"20px"}}>{text}</h1>
    <div className="card-medium-heading" >
       
     
       
    
        <SmallCards text1={text1}   />
        <SmallCards text1={text2} />
         
        <div className="card-body-medium" ></div>
      </div>
   </div>
  )
}

export default MediumCards