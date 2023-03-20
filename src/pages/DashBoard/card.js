import { faAlignJustify } from "@fortawesome/free-solid-svg-icons";
import { Colors } from "chart.js";
import React from "react";

const Card = ({data,Text}) => {
    return (
        <div>
            <div style={{ width: "320px", height: "80px", border: "1px solid gray", borderRadius: "8px " ,backgroundColor:"navy" }}>
                <h4 style={{ display:"flex" ,justifyContent:"center" ,color:"white",marginTop:"9px" }}>{Text} : {data}</h4>
            </div>
      </div>
  );
};

export default Card;
