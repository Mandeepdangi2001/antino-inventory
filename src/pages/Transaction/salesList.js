import React, { useState, useEffect } from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
// import data from "./mock-data.json";

import _, { filter } from "lodash";
import 'bootstrap/dist/css/bootstrap.css'
import "./modal.css";
import "./salesForm.css";

const Table = ({ contacts }) => {

  
  


 

  return (
    <div>
      <div className="app-container">
        <form>
          <table>
            <thead>
              <tr>
                 
                 <th>Customer Name</th>
                <th>Product Name</th>
                <th>Created At</th>
                <th>Quantity</th>
                <th>Gst</th>
                <th>Total Price</th>
               
               
              </tr>
            </thead>

            <tbody>
              {contacts.map((contact) => (
                <tr>
                  <td>{contact?.customerName}</td>
                  <td>{contact?.productName} </td>
                  <td>{ contact?.createdAt}</td>
                 
                  <td>{contact?.quantity}</td>
                  <td>{contact?.gst}</td>
                  <td>{contact?.totalPrice}</td>
                 
                 
                 
                </tr>
              ))}

              
             
            </tbody>
          </table>
        </form>
      </div>
      
    </div>
  );
};

export default Table;
