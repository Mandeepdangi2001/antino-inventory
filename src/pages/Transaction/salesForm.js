import React,{useState,useEffect} from 'react'
import { Modal, ModalHeader, ModalBody } from "reactstrap";
// import data from "./mock-data.json";

import _ from 'lodash';

import data from "./mock-data.json"
import styled from 'styled-components';
import axios from 'axios';
import Table from './salesList';
import "./salesForm.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faPlus } from '@fortawesome/free-solid-svg-icons';



const NavIcon = styled.div`
display: inline;

`

const FormData = () => {
  const [contacts, setContacts] = useState(data);
 
 




  // useEffect(() => {
  //   axios.get('https://mocki.io/v1/12336cc3-8873-4c59-9fa3-3d2870207bd9')
  //     .then(res => {
  //       setContacts(res.data);
       
  //     });
    
  // }, [])
  

   
  const [modal, setmodal] = useState(false);
 
 
  const [addFormData, setAddformData] = useState({
      id: '',
      transactionId: '',
      cutomerName: '',
      productName: '',
      quantity: '',
      totalPrice: '',
      createdAt:'',
      gst: '',
      
  })
  
  
  

  const handleAddFormChange = (event) => {
    event.preventDefault();
    
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    setAddformData(() => {
      return {...addFormData, [fieldName]: fieldValue}
    })
    
    // const newFormData = { ...addFormData };
    // newFormData[fieldName] = fieldValue;
    
    // setAddformData(newFormData);
  }

  

  const handleAddFormSubmit = (event) => {
    event.preventDefault();
  
    
    const newContact = {
          
      id: addFormData.id,
      transactionId: addFormData.transactionId,
      quantity: addFormData.quantity,
      customerName: addFormData.customerName,
      productName: addFormData.productName,
     totalPrice:addFormData.totalPrice,
      createdAt: addFormData.createdAt,
      gst:addFormData.gst,
    };
   
    
 
      
    
    const newContacts = [...contacts, newContact];
    setContacts(newContacts);

  };





  return (
    <div>
          
      <Modal size='lg' isOpen={modal} toggle={() => setmodal(!modal)}>;
        <ModalHeader style={{ color: 'green' }}>
          Add Your product here
        </ModalHeader>
        <ModalBody>
        <form className='d-block p-2  ' onSubmit={handleAddFormSubmit} >
           
        <div className="form-group">
        <label for="exampleInputEmail1">Product Name:</label>
       <input  type="text"
                required="required"
                name='productName'
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Product Name "
                onChange={handleAddFormChange} />
      
  </div>
             <div className="form-group">
        <label for="exampleInputEmail1">Customer Name :</label>
       <input  type="text"
                required="required"
                name='customerName'
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Customer Name "
                onChange={handleAddFormChange} />
      
  </div>
                      

         
          
                      
                      
  <div className="form-group">
        <label for="exampleInputEmail1">Quantity : </label>
       <input  type="number"
                required="required"
                name='quantity'
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Quantity "
                onChange={handleAddFormChange} />
      
            </div>
            <button className='bg-dark text-white d-block mt-3' onClick={() => setmodal(false)} >Submit</button>

          </form>
        </ModalBody>
      </Modal>

      <div style={{display:"flex",justifyContent:"center" }}>
      <button className='btn mt-3 d-inline justify-last ' style={{ fontSize:"1.5rem" }}>Add products  </button>
      <FontAwesomeIcon icon={ faPlus} size="2x" style={{paddingLeft:"2px",marginTop:"27px",background:"navy",color:"white",borderRadius:"5px",cursor:"pointer"}}  onClick={() => setmodal(true)} />
      </div>
      <Table contacts={contacts} />
      </div>
     
    
    
      
  )
}
export default FormData;