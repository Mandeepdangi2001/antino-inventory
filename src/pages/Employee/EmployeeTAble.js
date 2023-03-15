import React, { useState, useEffect } from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
// import data from "./mock-data.json";
import "./EmployeeForm.css";
import _, { filter } from "lodash";
import "bootstrap/dist/css/bootstrap.css";
import "./modal.css";
import "./EmployeeTable.css";

const Table = ({ contacts }) => {
  const [detailModal, setDetailModal] = useState(false);
  const [filtered, setFiltered] = useState([]);

  const showDetailHandler = (employeeId) => {
    console.log(employeeId);
    const filteredData = contacts.filter(
      (contact) => contact?.employeeId === employeeId
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
                <th>Employee Id</th>
                <th>Employee Name</th>
                <th>Employee Email</th>
                <th>Address</th>
                <th>Phone Number</th>
                <th>Created At</th>
               
              </tr>
            </thead>

            <tbody>
              {contacts.map((contact) => (
                <tr>
                  <td>{contact?.id}</td>
                  <td>{contact?.userName} </td>
                  <td>{contact?.userEmail}</td>
                  <td>{contact?.address}</td>
                  <td>{contact?.phoneNumber}</td>
                  <td>{contact?.createdAt}</td>

                </tr>
              ))}

              {/* <Modal
                size="lg"
                isOpen={detailModal}
                toggle={() => setDetailModal(!detailModal)}
              >
                <ModalHeader style={{ color: "green" }}>
                  Product extra Details
                </ModalHeader>
                <ModalBody>
                  <h4>Quantity is : {filtered[0]?.quantity}</h4>
                </ModalBody>
              </Modal> */}
            </tbody>
          </table>
        </form>
      </div>
    </div>
  );
};

export default Table;
