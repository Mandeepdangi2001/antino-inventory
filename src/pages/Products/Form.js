import React, { useState, useEffect } from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
// import data from "./mock-data.json";

import _ from "lodash";
import * as AiIcons from "react-icons/ai";
import data from "./mock-data.json";
import styled from "styled-components";
import axios from "axios";
import Table from "./Table";
import "./form.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Pagination from "./Pagination";

const NavIcon = styled.div`
  display: inline;
`;

const FormData = () => {
  const token=localStorage.getItem('Token')
  const [contacts, setContacts] = useState([{}]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(7);
  const [modal, setmodal] = useState(false);

  const [addFormData, setAddformData] = useState({
    productName: "",
    productDescription: "",
    quantity: "",
    price: "",
    gst:"",
    category:"",

    // createdAt: "",
    productId: "",
  });

  // useEffect(() => {
  //   axios.get('http://localhost:8080/product/pageNO/0/noOfItems/1')
  //     .then(res => {
  //       console.log(res.data);
  //       setContacts(res.data);

  //     });

  // }, [])
  // useEffect(() => {
  
    //   axios.get("http://localhost:8080/transactions/current-month/sales",{ headers: {"Authorization" : `Bearer ${window.token}`},  withCredentials: false })
    //     .then(res => setMonthUserData(res.data.transactionDetails)
    //     );
    // }, []);
  useEffect(() => {
    
    CartData();
  }, []);
  // console.log(contacts)

  async function CartData() {
    try {
      const response =  await axios.get(
        "http://localhost:8080/product/pageNO/0/noOfItems/1000",{ headers: {"Authorization" : `Bearer ${token}`,
        'Accept' : 'application/json',
        'Content-Type': 'application/json'} }
      );
      console.log("Cart returned the data: ", token);
      console.log("data is" + JSON.stringify(response.data));
      setContacts(response.data);

     
    } catch (error) {
      console.log(">>>>>>>>>>> error is ",error);
    }
  }

 

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    setAddformData(() => {
      return { ...addFormData, [fieldName]: fieldValue };
    });

    // const newFormData = { ...addFormData };
    // newFormData[fieldName] = fieldValue;

    // setAddformData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      productName: addFormData.productName,
      productDescription: addFormData.productDescription,
      quantity: addFormData.quantity,
      price: addFormData.price,
      gst: addFormData.gst,
      category: addFormData.category,

      // createdAt: addFormData.createdAt,
      productId: addFormData.productId,
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
     
  const getCartData= async () =>  {
      try {
        const response = await axios.post(
          "http://localhost:8080/addproduct",newContact,{ headers: {"Authorization" : `Bearer ${token}`,
          'Accept' : 'application/json',
          'Content-Type': 'application/json'
       } })
        ;
        // console.log("Cart returned the data: ", window.token);
       
        console.log("data is " + JSON.stringify(response.data.response));
        // setContacts(...contacts,response.data)
        CartData();
      // setContacts(JSON.stringify(response.data))
        
      } catch (error) {
        console.log(">>>>>>>>>>> error is ",error);
      }
    }
    getCartData();
  };  
  const lastPostIndex = currentPage * postPerPage;
  const firPostIndex = lastPostIndex - postPerPage;
  const currentPost = contacts.slice(firPostIndex, lastPostIndex);
  return (
    <div style={{ marginTop: "11vh" }}>
      <Modal size="lg" isOpen={modal} toggle={() => setmodal(!modal)}>
        <ModalHeader
          style={{
            color: "green",
            display: "flex",
            justifyContent: "center",
            fontSize: "30px",
          }}
        >
          Add Your product here
        </ModalHeader>
        <ModalBody>
          <form className="d-block p-2  " onSubmit={handleAddFormSubmit}>
            <div className="form-group">
              <label for="exampleInputEmail1">Product Id:</label>
              <input
                type="number"
                required="required"
                name="productId"
                className="form-control"
                id="productId"
                aria-describedby="emailHelp"
                placeholder="Product Id "
                onChange={handleAddFormChange}
              />
            </div>
            <div className="form-group">
              <label for="exampleInputEmail1">Name :</label>
              <input
                type="text"
                required="required"
                name="productName"
                className="form-control"
                id="productName"
                aria-describedby="emailHelp"
                placeholder="Name "
                onChange={handleAddFormChange}
              />
            </div>

            <div className="form-group">
              <label for="exampleInputEmail1">Description :</label>
              <input
                type="text"
                required="required"
                name="productDescription"
                className="form-control"
                id="productDescription"
                aria-describedby="emailHelp"
                placeholder="Description "
                onChange={handleAddFormChange}
              />
            </div>
           
            <div className="form-group">
              <label for="exampleInputEmail1">Category :</label>
              <input
                type="text"
                required="required"
                name="category"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Category "
                onChange={handleAddFormChange}
              />
            </div>

            <div className="form-group">
              <label for="exampleInputEmail1">Price :</label>
              <input
                type="number"
                required="required"
                name="price"
                className="form-control"
                id='price'
                aria-describedby="emailHelp"
                placeholder="price "
                onChange={handleAddFormChange}
              />
            </div>

            <div className="form-group">
              <label for="exampleInputEmail1">Gst :</label>
              <input
                type="number"
                required="required"
                name="gst"
                className="form-control"
                id="gst"
                aria-describedby="emailHelp"
                placeholder="gst "
                onChange={handleAddFormChange}
              />
            </div>

            <div className="form-group">
              <label for="exampleInputEmail1">Quantity :</label>
              <input
                type="number"
                required="required"
                name="quantity"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Quantity "
                onChange={handleAddFormChange}
              />
            </div>

            <button
              className="bg-dark text-white d-block mt-3 rounded"
              onClick={() => setmodal(false)}
            >
              Submit
            </button>
          </form>
        </ModalBody>
      </Modal>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <button
          className="btn mt-3 d-inline justify-last "
          style={{ fontSize: "1.5rem" }}
        >
          Add Custom Inventory{" "}
        </button>
        <FontAwesomeIcon
          icon={faPlus}
          size="2x"
          style={{
            paddingLeft: "2px",
            marginTop: "27px",
            background: "navy",
            color: "white",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          onClick={() => setmodal(true)}
        />
      </div>
     
      <Table contacts={currentPost} />
      <Pagination totalPost={contacts.length} postPerPage={postPerPage} setCurrentPage={setCurrentPage} />
     
    </div>
  );

        };
export default FormData;
