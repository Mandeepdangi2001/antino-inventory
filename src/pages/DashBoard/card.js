import { Colors } from "chart.js";
import React from "react";

const Card = ({data}) => {
    return (
        <div>
            <div style={{ width: "300px", height: "100px", border: "1px solid gray", borderRadius: "8px " }}>
                <h4 style={{marginTop:"1rem" ,paddingLeft:"2px" ,color:"blue"}}>{data}</h4>
            </div>
      </div>
  );
};

export default Card;
