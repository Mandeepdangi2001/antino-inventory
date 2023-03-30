import React, { useState, useEffect } from "react";

// import data from "./mock-data.json";

import _ from "lodash";

import styled from "styled-components";
import axios from "axios";

import ListStyle from "./OrderingListStyle";
import "./form.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NavIcon = styled.div`
  display: inline;
`;

const FormData = () => {
  const token = localStorage.getItem("Token");
  const [contacts, setContacts] = useState([{}]);
  const [contactsQuantity, setContactsQuantity] = useState([]);

  const [filteredBooks, setFilteredBooks] = useState([]);


  return (
    <div style={{ marginTop: "11vh" }}>
      <ToastContainer />

      <ListStyle
       
      ></ListStyle>
    </div>
  );
};
export default FormData;
