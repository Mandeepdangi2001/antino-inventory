
import React,{useState,useEffect} from "react";
import DataTable from "react-data-table-component";
import Sidebar from "../../components/Sidebar";
import axios from "axios";
import ListStyle from "./ListStyle";

// import 'react-select/dist/react-select.css'

const MyOrder = () => {
    const token = localStorage.getItem("Token");
    const [contacts, setContacts] = useState([]);
    useEffect(() => {
        CartData();
       
    
    
      }, []);
    async function CartData() {
        try {
          const response = await axios.get(
            "http://localhost:8080/product/pageNO/0/noOfItems/1000",
            {
              headers: {
                Authorization: `Bearer ${token}`,
                Accept: "application/json",
                "Content-Type": "application/json",
              },
            }
          );
          console.log("Cart returned the data: ", token);
          console.log("data is" + JSON.stringify(response.data.response));
          setContacts(response.data.response);
        } catch (error) {
          console.log(">>>>>>>>>>> error is ", error);
        }
      }

  return (
      <div>
    
     <ListStyle contacts={contacts} />

    </div>
  );
};

export default MyOrder;
