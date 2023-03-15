import React, { useState, useEffect } from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
// import data from "./mock-data.json";
import "./customerform.css";
import _, { filter } from "lodash";
import 'bootstrap/dist/css/bootstrap.css'
import "./modal.css";


const Table = ({ contacts }) => {
  const [detailModal, setDetailModal] = useState(false);
  const [filtered, setFiltered] = useState([]);
  

  const showDetailHandler = (customerId) => {
    
    const filteredData = contacts.filter(
      (contact) => contact?.customerId === customerId
    );
    // console.log({contacts})
    setFiltered(filteredData);
    console.log(filtered);
  };
  const setDetail = () => {
    setDetailModal(true);
  };
 

  return (
    <div>
      <div className="app-container">
        <form>
          <table>
            <thead>
              <tr>
                <th>Customer Id</th>
                <th>Customer Name</th>
                <th>PhoneNumber</th>
                <th>Customer Address</th>
                <th>Created At</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {contacts.map((contact) => (
                <tr>
                  <td>{contact?.customerId} </td>
                  <td>{contact?.customerName}</td>
                  <td>{contact?.customerPhone}</td>
                  <td>{contact?.customerAddress}</td>
                  <td>{contact?.createdAt}</td>
                  <td
                    style={{
                      cursor: "pointer",
                      textDecoration: "underline",
                      fontWeight: "bold",
                    }}
                    className="f-2rem"
                    onClick={() => {
                      setDetail();
                      showDetailHandler(contact?.customerId);
                    }}
                  >
                   Extra Details
                  </td>
                </tr>
              ))}

              <Modal
                size="lg"
                isOpen={detailModal}
                toggle={() => setDetailModal(!detailModal)}
              >
                <ModalHeader style={{ color: "green" , display:"flex" ,justifyContent:"center"}}>
                Customer Details
                </ModalHeader>
                <ModalBody >
                 
                  <h4 >Email Address:{ filtered[0]?.customerEmail}</h4>
                </ModalBody>
              </Modal>
            </tbody>
          </table>
        </form>
      </div>
      
    </div>
  );
};

export default Table;
