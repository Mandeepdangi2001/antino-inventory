import React,{useState,useEffect} from 'react'
import { Modal, ModalHeader, ModalBody } from "reactstrap";
// import data from "./mock-data.json";
import "./InventoryForm.css";
import _ from 'lodash';
import * as AiIcons from 'react-icons/ai';
import data from "./mock-data.json"
import styled from 'styled-components';
import axios from 'axios';
import Table from './Table';



const NavIcon = styled.div`
display: inline;

`

const FormData = () => {
  const [contacts, setContacts] = useState([]);
 
 




  useEffect(() => {
    axios.get('https://mocki.io/v1/12336cc3-8873-4c59-9fa3-3d2870207bd9')
      .then(res => {
        setContacts(res.data);
       
      });
    
  }, [])
  

   
  const [modal, setmodal] = useState(false);
 
 
  const [addFormData, setAddformData] = useState({
    fullName: '',
    description: '',
    quantity: '',
    price: '',
    selectCategory: 'Dbms',
    action: 'action'
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
          
      fullName: addFormData.fullName,
      description: addFormData.description,
      quantity: addFormData.quantity,
      price: addFormData.price,
      selectCategory: addFormData.selectCategory,
      action: addFormData.action,
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
            <label className='d-block ' >Name :</label>
            <input
              className='w-75'
              type="text"
              required="required"
              name='fullName'
              onChange={handleAddFormChange}
            />
                      
                      
            <label className='d-block'>Description :</label>
            <input
              className='w-75'
              type="text"
              required="required"
              name='description'
              onChange={handleAddFormChange}
            />
            <label className='d-block'>Select Category</label>
            <select
              className='w-50'
              name="selectCategory"
                          
              form="carform"
              onChange={handleAddFormChange}
              required='required'
            >
              <option >Dbms</option>
              <option >Os</option>
              <option >Dsa</option>
              <option >React</option>
            </select>
          
            
            <label className='d-block'>Price :</label>
            <input
              className='w-75'
              type="number"
              step="any"
              required="required"
              name='price'
              onChange={handleAddFormChange}
            />
            <label className='d-block' >Quantity :</label>
            <input
              className='w-75'
              type="number"
              required="required"
              name='quantity'
              onChange={handleAddFormChange}
            />
                    
            <label htmlFor="" className='d-block'>Action :</label>
            <input
              className='w-75'
              type="text"
              required="required"
              name='action'
              onChange={handleAddFormChange}
            />
                    
            <button className='bg-dark text-white d-block mt-3' onClick={() => setmodal(false)} >Submit</button>

          </form>
        </ModalBody>
      </Modal>


      <button className='btn mt-3 d-inline justify-last ' style={{ backgroundColor: "#0b3629", color: 'white' }} onClick={() => setmodal(true)} >Add products</button>
      <Table contacts={contacts} />
     
     
    </div>
    
      
  )
}
export default FormData;