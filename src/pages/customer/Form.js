import React,{useState,useEffect} from 'react'
import { Modal, ModalHeader, ModalBody } from "reactstrap";
// import data from "./mock-data.json";
import "./customerform.css";
import _ from 'lodash';
import * as AiIcons from 'react-icons/ai';
import data from "./mock-data.json"
import styled from 'styled-components';
import axios from 'axios';
import Table from './Table';
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
    fullName: '',
    id: '',
   phoneNumber : '',
    Address: '',
    email: '',
    
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
      fullName: addFormData.fullName,
       phoneNumber: addFormData.phoneNumber,
      Address: addFormData.Address,
      createdAt: addFormData.createdAt,
      email:addFormData.email,
    
    };
   
    
 
      
    
    const newContacts = [...contacts, newContact];
    setContacts(newContacts);

  };





  return (
    <div style={{marginTop:"11vh"}}>
          
      <Modal size='lg' isOpen={modal} toggle={() => setmodal(!modal)}>;
        <ModalHeader style={{ color: 'green' }}>
          Add Your product here
        </ModalHeader>
        <ModalBody>
        <form className='d-block p-2' onSubmit={handleAddFormSubmit} >
         
         <div className="form-group">
    <label for="exampleInputEmail1">Id :</label>
   <input    type="number"
            required="required"
            name='id'
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="id "
            onChange={handleAddFormChange} />
  </div>   

  <div className="form-group">
    <label for="exampleInputEmail1">Name :</label>
   <input  type="text"
            required="required"
            name='fullName'
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Name "
            onChange={handleAddFormChange} />
  
</div>
<div className="form-group">
    <label for="exampleInputEmail1">Phone Number :</label>
   <input  type="number"
            required="required"
            name='phoneNumber'
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Phone Number "
            onChange={handleAddFormChange} />
  
        </div>
        <div className="form-group">
    <label for="exampleInputEmail1">Address :</label>
   <input  type="text"
            required="required"
            name='Address'
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Address "
            onChange={handleAddFormChange} />
  
</div>
                  
<div className="form-group">
    <label for="exampleInputEmail1">Created At :</label>
   <input  type="date"
            required="required"
            name='createdAt'
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Created At "
            onChange={handleAddFormChange} />
  
        </div>
        <div className="form-group">
<label for="exampleInputEmail1">Email address :</label>
          <input type="email"
                className="form-control"
                name='email'
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
                placeholder="Enter email"
                onChange={handleAddFormChange} 
           
                />

</div>
      


                   
            <button className='bg-dark text-white d-block mt-3' onClick={() => setmodal(false)} >Submit</button>

          </form>
        </ModalBody>
      </Modal>

     
      <div style={{display:"flex",justifyContent:"center" }}>
      <button className='btn mt-3 d-inline justify-last ' style={{ fontSize:"1.5rem" }}>Add Customers </button>
      <FontAwesomeIcon icon={ faPlus} size="2x" style={{paddingLeft:"2px",marginTop:"27px",background:"navy",color:"white",borderRadius:"5px",cursor:"pointer"}}  onClick={() => setmodal(true)} />
      </div>
     <Table contacts={contacts} />
     
     
    </div>
    
      
  )
}
export default FormData;