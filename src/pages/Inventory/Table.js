import React, { useState, useEffect } from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
// import data from "./mock-data.json";
import "./InventoryForm.css";
import _, { filter } from "lodash";
import 'bootstrap/dist/css/bootstrap.css'
import "./modal.css";


const Table = ({ contacts }) => {
  const [detailModal, setDetailModal] = useState(false);
  const [filtered, setFiltered] = useState([]);
  

  const showDetailHandler = (quantity) => {
    console.log(quantity);
    const filteredData = contacts.filter(
      (contact) => contact?.quantity === quantity
    );
    // console.log({contacts})
    setFiltered(filteredData);
    // console.log(filtered);
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
                <th>Name</th>
                <th>Description</th>
                <th>Category</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {contacts.map((contact) => (
                <tr>
                  <td>{contact?.fullName} </td>
                  <td>{contact?.description}</td>
                  <td>{contact?.selectCategory}</td>
                  <td>{contact?.price}</td>
                  <td>{contact?.quantity}</td>
                  <td
                    style={{
                      cursor: "pointer",
                      textDecoration: "underline",
                      fontWeight: "bold",
                    }}
                    className="f-2rem"
                    onClick={() => {
                      setDetail();                      showDetailHandler(contact?.quantity);
                    }}
                  >
                    {contact.action}
                  </td>
                </tr>
              ))}

              <Modal
                size="lg"
                isOpen={detailModal}
                toggle={() => setDetailModal(!detailModal)}
              >
                <ModalHeader style={{ color: "green" }}>
                  Product extra Details
                </ModalHeader>
                <ModalBody >
                  <h4 >Quantity is : {filtered[0]?.quantity}</h4>
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
