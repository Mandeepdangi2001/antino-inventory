import React, { useState, useEffect } from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import Pagination from "./Pagination";
// import data from "./mock-data.json";

import _, { filter } from "lodash";
import "bootstrap/dist/css/bootstrap.css";
import "./modal.css";
import "./form.css";

const Table = ({ contacts }) => {
  const [detailModal, setDetailModal] = useState(false);
  const [filtered, setFiltered] = useState([]);

  const showDetailHandler = (productId) => {
    
    const filteredData = contacts.filter(
      (contact) => contact?.productId === productId
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
                <th>Product Id</th>
                <th>Product Name</th>
                <th>Created At</th>
                <th>Category</th>
              

                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              
              {contacts.map((contact) => (
                <tr>
                  <td>{contact?.productId}</td>
                  <td>{contact?.productName} </td>
                  <td>{contact?.createdAt}</td>

                  <td>{contact?.category}</td>
                  
                  

                  <td
                    style={{
                      cursor: "pointer",

                      fontWeight: "bold",
                    }}
                    className="f-2rem"
                    onClick={() => {
                      setDetail();
                      showDetailHandler(contact?.productId);
                    }}
                  >
                    Product Detail
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
                <ModalBody>
                  <h4>Quantity : {filtered[0]?.quantity}</h4>
                  <h4>ProductDescription : {filtered[0]?.productDescription}</h4>
                  <h4>Price Per Piece : {filtered[0]?.price}</h4>
                  <h4>Gst : {filtered[0]?.gst}</h4>
                  <h4>Purchase Type : { filtered[0]?.purchaseType}</h4>
                  <h4>Vendor : { filtered[0]?.vendor}</h4>
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
