
import React,{useState,useEffect} from "react";
import DataTable from "react-data-table-component";
import Sidebar from "../../components/Sidebar";
import axios from "axios";

// import 'react-select/dist/react-select.css'

const OrderBookListStyle = () => {
   
   
  const token = localStorage.getItem("Token");
  const [contacts, setContacts] = useState([]);
  useEffect(() => {
      CartData(localStorage.getItem("UserId"));
     
  
  
    }, []);
  async function CartData(userId) {
      try {
        const response = await axios.get(
          `http://localhost:8080/rentals/users/${userId}/rentals`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          }
        );
        // console.log("Cart returned the data: ", token);
        console.log("data is" ,response.data);
        setContacts(response.data);
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
    cells: {
      style: {
          paddingLeft: '8px', // override the cell padding for data cells
          paddingRight: '8px',
      },
  },

    
};
  const columns = [
    {
      name: "Rental Id",
      selector: (row) => row.rentalId,
      
    },
    {
      name: "Product Id",
      selector: (row) => row.productId,
    },
    {
      name: "Product Name",
      selector: (row) => row.product.productName,
    },
    {
      name: "Quantity",
      selector: (row) => row.quantity,
    },
    {
      name: "Issue Date",
      selector: (row) => row.issueDate,
    },

    {
      name: "Return Date",
      selector: (row) => row.returnDate,
    },
   

    {
      name: "Rental Status",
      selector: (row) =><>{row.rentalStatus}</>,
      conditionalCellStyles: [
        {
            when: row => row.rentalStatus === "PENDING",
            style: {
              color: "yellow",
              fontWeight: "bold",
              fontSize:"15px",
             
              
                '&:hover': {
                    cursor: 'pointer',
                },
          },
            
        },
        {
          when: row => row.rentalStatus === "APPROVED",
          style: {
            
              color: 'Green',
              '&:hover': {
                  cursor: 'pointer',
              },
        },
        },
        {
          when: row => row.rentalStatus === "REJECTED",
            style: {
              
                color: 'Red',
                '&:hover': {
                    cursor: 'pointer',
                },
          },
        },
      ]



        

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
