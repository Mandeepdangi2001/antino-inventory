import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { SidebarData } from './SidebarData';
import ProfilePIc from './img/abc.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faHouse, faXmark } from '@fortawesome/free-solid-svg-icons';



import { IconContext } from 'react-icons/lib';


const Nav = styled.div`
  background: navy;
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  h1{
  font-weight: 900;
  font-style: italic;
  }
 

  
 

`;




const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarNav = styled.nav`
  background: navy ;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;
const Text=styled.span`
  color: white;
  font-size: 1.4rem;
  padding-left: 30px;
  padding-bottom: 30px;
  
  
`
const ItemStyle=styled.div`
 
  width: 100%;
  display: flex;
  justify-content: start;
  line-height: 50px;
  text-decoration: none;
  

  text-decoration: none;

  &:hover{
    background: gray;
    text-decoration: none;

   
  }
  
  

`

const ProfileStyle=styled.div`
  display: flex;
  padding-right: 2rem;
  img{
    height: 50px;
    width:50px;
    border-radius: 50%;
    
  }
  h3{
    font-size: 1.3rem;
    padding:12px 7px 0px 0px;
  }
`

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  const[owner,setOwner]=useState([{}])
  useEffect(()=>{
    staffNavbar();
},[])
  const staffNavbar=()=>{
  const ownerData= SidebarData.filter((contact)=>contact.title!=="Employees");
  setOwner(ownerData);
  console.log(ownerData)
  }
  const userName = localStorage.getItem('UserName');

if(window.role=="O" || userName==="Mandeep"){
  return (
    <>
      <IconContext.Provider value={{ color: 'white' }}>
        <Nav style={{height:"10vh" ,position:"fixed",top:"0%",width:"100vw"}}>
          
          <NavIcon >
          <FontAwesomeIcon icon={faBars} color="white" onClick={showSidebar} ></FontAwesomeIcon>
           
          </NavIcon>
          <h1>Antino Inventory</h1>
         < ProfileStyle >
          <h3 className=''>{userName}</h3>
          <img src={ProfilePIc} alt="" />
          </ProfileStyle>

          
        </Nav>
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <NavIcon to='#'>
           < FontAwesomeIcon icon={faXmark} color="white" onClick={showSidebar} ></FontAwesomeIcon>
              
            </NavIcon>
           
            {SidebarData.map((item, index) => {
              return (<li className={item.cName} key={index}  onClick={showSidebar} style={{listStyleType:'none'}} >
                <ItemStyle><Link to={item.path} style={{textDecoration:"none"}}>
                  {item.icon}
                  <Text >{item.title}</Text>
                 
                </Link>
                </ItemStyle>
                </li>
              );
            })}
             
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>

  );
};
return(
  <>
  <IconContext.Provider value={{ color: 'white' }}>
    <Nav style={{height:"10vh" ,position:"fixed",top:"0%",width:"100vw"}}>
      
      <NavIcon >
      <FontAwesomeIcon icon={faBars} color="white" onClick={showSidebar} ></FontAwesomeIcon>
       
      </NavIcon>
      <h1>Antino Inventory</h1>
     < ProfileStyle >
      <h3 className=''>{userName}</h3>
      <img src={ProfilePIc} alt="" />
      </ProfileStyle>

      
    </Nav>
    <SidebarNav sidebar={sidebar}>
      <SidebarWrap>
        <NavIcon to='#'>
       < FontAwesomeIcon icon={faXmark} color="white" onClick={showSidebar} ></FontAwesomeIcon>
          
        </NavIcon>
        
       
        {owner.map((item, index) => {
          return (<li className={item.cName} key={index}  onClick={showSidebar} style={{listStyleType:'none'}} >
            <ItemStyle><Link to={item.path} style={{textDecoration:"none"}}>
              {item.icon}
              <Text>{item.title}</Text>
             
            </Link>
            </ItemStyle>
            </li>
          );
        })}
         
      </SidebarWrap>
    </SidebarNav>
  </IconContext.Provider>
</>

);
};



export default Sidebar;
