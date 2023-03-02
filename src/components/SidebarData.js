import React from 'react';
// import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
// import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
// import * as BiIcons from 'react-icons/bi';
import * as MdIcons from 'react-icons/md';


export const SidebarData = [
  {
    title: 'Dashboard',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName:'nav',
   


  },
  {
    title: 'Product',
    path: '/product',
    icon: <RiIcons.RiProductHuntFill />,
   
    cName:'nav',

  },
  {
    title: 'Inventory',
    path: '/inventory',
    icon: <MdIcons.MdOutlineInventory />,
    cName:'nav',


  },
 
  {
    title: 'Customer',
    path: '/customer',
    icon: <AiIcons.AiFillHome />,
    cName:'nav',

  },
  {
    title: 'Sales',
    path: '/sales',
    icon: <AiIcons.AiFillHome />,
    cName:'nav',


  },
    
];