
import React,{useState,useEffect} from "react";
import DataTable from "react-data-table-component";
import Sidebar from "../../components/Sidebar";
import axios from "axios";

// import 'react-select/dist/react-select.css'

const OrderBookListStyle = () => {
   
   
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
  const customStyles = {
   
    headCells: {
      style: {
        fontSize: "15px",
        fontWeight:"bold",
            paddingLeft: '8px', // override the cell padding for head cells
            paddingRight: '8px',
        },
    },
    
};
  const columns = [
    {
      name: "ProductId",
      selector: (row) => row.productId,
      
    },
    {
      name: "Product Name",
      selector: (row) => row.productName,
    },
    {
      name: "Created At",
      selector: (row) => row.createdAt,
    },

    {
      name: "Category",
      selector: (row) => row.category,
    },
    {
      name: "Quantity",
      selector: (row) => row.quantity,
    },
   
    // {
    //   name: "Vendor",
    //   selector:(row)=>row.vendor
    // },
    // {
    //   name: "Vendor",
    //   selector:(row)=>row.vendor
    // },
    // {
    //   name: "Vendor",
    //   selector:(row)=>row.vendor
    // },
    // {
    //   name: "Vendor",
    //   selector:(row)=>row.vendor
    // }
  ];
  return (
      <div>
        
      <DataTable columns={columns}
        customStyles={customStyles}
        
        data={contacts}
        pagination
        fixedHeader
        fixedHeaderScrollHeight="400px"
        highlightOnHover
      />


    </div>
  );
};

export default OrderBookListStyle;
