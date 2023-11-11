
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './bars.css'
import { faBars, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react'
import { Menu } from '../../Context/MenuContext'
import {  Nav, NavDropdown, Image, Container, Row, Col, } from 'react-bootstrap'
import  Logo from "./assets/logo.webp"
import Flags from "./assets/Germany.webp"
import { Link } from 'react-router-dom';
import mobile from "./assets/center.webp";
export default  function TopBar() {


  const menu =useContext(Menu);
  const setIsOpen =menu.setIsOpen;
  console.log(setIsOpen);
  return (
    
 
    <div className="top-bar d-flex align-items-center justift-content-between">

      <Container className='d-flex align-items-center gap-5'>
      <FontAwesomeIcon onClick={() => setIsOpen(prev => !prev)} cursor={"pointer"} icon={faBars} className='icon1' />
      <FontAwesomeIcon icon={faCartShopping} className='icon1' />
       
          <Nav  className="logo_item mt-3 mr-5">
            <i className="bx bx-menu" id="sidebarOpen"></i>
            <Image className="pb-2 img9" src={Logo} alt="LOGO" />
          </Nav>
            <Nav className="UL " style={{ listStyle: 'none' ,display: 'flex',alignItems:'center',justifyContent:'center'}}>
              <Link to={"/home"}   className="nav-link active" aria-current="page" style={{ color: 'black', fontWeight: 'bolder', marginLeft: '15px' }}>Home</Link>
              <NavDropdown title="collection" id="navbarScrollingDropdown" style={{ color: 'black', fontWeight: 'bolder', marginLeft: '15px' }}>
                <Container fluid>
                  <Row style={{ width:'max-content' }}>
                    <Col lg={2}  sm={6} xs={12}>
                      <h1 className="text-black">SSD CARD</h1>
                      <div className="line" style={{ height: '2px' }}></div>
                      <p className="text-black">ANIFINTY M20</p>
                      <p className="text-black">INFINTIY M 40PRO</p>
                      <p className="text-black">PO V40 THINQ</p>
                    </Col>
                    <Col lg={2}  sm={6} xs={12}>
                      <h1 className="text-black">SSD CARD</h1>
                      <div className="line" style={{ height: '2px' }}></div>
                      <p className="text-black">ANIFINTY M20</p>
                      <p className="text-black">INFINTIY M 40PRO</p>
                      <p className="text-black">PO V40 THINQ</p>
                    </Col>
                    <Col lg={2}  sm={6} xs={12}>
                      <h1 className="text-black">SSD CARD</h1>
                      <div className="line" style={{ height: '2px' }}></div>
                      <p className="text-black">ANIFINTY M20</p>
                      <p className="text-black">INFINTIY M 40PRO</p>
                      <p className="text-black">PO V40 THINQ</p>
                    </Col>
                    <Col lg={2}  sm={6} xs={12}>
                      <h1 className="text-black">SSD CARD</h1>
                      <div className="line" style={{ height: '2px' }}></div>
                      <p className="text-black">ANIFINTY M20</p>
                      <p className="text-black">INFINTIY M 40PRO</p>
                      <p className="text-black">PO V40 THINQ</p>
                    </Col>
                    <Col lg={2}  sm={6} xs={12}>
                      <Image src={mobile} alt=""/>
                    </Col>
                  </Row>
                </Container>
              </NavDropdown>
              <NavDropdown title="Pages" id="navbarScrollingDropdown" style={{ color: 'black', fontWeight: 'bolder', marginLeft: '15px' }}>
                <NavDropdown.Item href="#">About Us</NavDropdown.Item>
                <NavDropdown.Item href="#">Contact Us</NavDropdown.Item>
                <NavDropdown.Item href="#">Blog</NavDropdown.Item>
                <NavDropdown.Item href="#">Fag's</NavDropdown.Item>
              </NavDropdown>
              <Link to={"/shop"}  className="nav-link" style={{ color: 'black', fontWeight: 'bolder', marginLeft: '15px' }}>Shop</Link>
              <Link to={"/andriod"}   className="nav-link" style={{ color: 'black', fontWeight: 'bolder', marginLeft: '15px' }}>Android</Link> 
              <Link to={"/accessoires"}  className="nav-link" style={{ color: 'black', fontWeight: 'bolder', marginLeft: '15px' }}>Accessories</Link>
              <Link to={"/memorystorge"} className="nav-link" style={{ color: 'black', fontWeight: 'bolder', marginLeft: '15px' }}>Memory&Storge</Link>
              

              <div className="dropdown mt-1" style={{marginLeft:'30px'}}>
                <div className="dropdown-toggle" id="country-dropdown" data-toggle="dropdown">
               <span id="selected-country">
               <Image  src={Flags}  alt='flags' 
                style={{width:'20px' ,height:'20px', marginLeft:'10px',marginBottom:'5px'}}/>

               </span>
               </div>
               </div>
             <ul className="dropdown-menu" id="country-menu"></ul>
             <FontAwesomeIcon icon={faCartShopping} style={{paddingLeft:'10px',marginLeft:'20px'}} className='Icon'/>
            </Nav>

      </Container> 
     </div>
    
  )
}
