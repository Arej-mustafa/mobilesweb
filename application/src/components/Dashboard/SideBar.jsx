import './bars.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faUsers} from "@fortawesome/free-solid-svg-icons"
import { Link } from 'react-router-dom'
import { Menu } from '../../Context/MenuContext'
import { useContext } from 'react'
import { WindowSize } from '../../Context/WindowContext'
import { Col, Container,Image,NavDropdown, Row } from 'react-bootstrap'
import mobile from "./assets/center.webp";
export default  function SideBar() {
  const menu =useContext(Menu);
  const WindowContext =useContext(WindowSize);
  const windowSize = WindowContext.windowSize;
  //console.log(windowSize)
  const isOpen =menu.isOpen;
  //console.log(isOpen);
    return (
      <div className="side-bar pt-3" style={{left:windowSize <'995' ? (isOpen ? 0 : "-100%") : 0,
        width: isOpen ? '210px' : "fit-content"}}>
        <Link to={"/home"} className={"d-flex align-items-center gap-2 side-bar-link"}>
        <FontAwesomeIcon style={{padding: isOpen ? '10px 8px 10px 15px' : '10px 4px'}} icon={faUsers} />
        <p className='m-0' style={{display: isOpen ? "block" : "none",}}>Home</p>
        </Link>
        <NavDropdown title="collection" id="navbarScrollingDropdown"  className='m-0 side-bar-link' style={{display: isOpen ? "block" : "none", color: 'black', fontWeight: 'bolder', marginLeft: '15px' }}>
                <Container className='collection'>
                  <Row>
                    <Col sm={'6'} xs={'6'}>
                      <h1 className="text-black">SSD CARD</h1>
                      <div className="line" style={{ height: '2px' }}></div>
                      <p className="text-black">ANIFINTY M20</p>
                      <p className="text-black">INFINTIY M 40PRO</p>
                      <p className="text-black">PO V40 THINQ</p>
                    </Col>
                    <Col sm={'6'} xs={'6'}>
                      <h1 className="text-black">SSD CARD</h1>
                      <div className="line" style={{ height: '2px' }}></div>
                      <p className="text-black">ANIFINTY M20</p>
                      <p className="text-black">INFINTIY M 40PRO</p>
                      <p className="text-black">PO V40 THINQ</p>
                    </Col>
                    <Col sm={'6'} xs={'6'} >
                      <h1 className="text-black">SSD CARD</h1>
                      <div className="line" style={{ height: '2px' }}></div>
                      <p className="text-black">ANIFINTY M20</p>
                      <p className="text-black">INFINTIY M 40PRO</p>
                      <p className="text-black">PO V40 THINQ</p>
                    </Col>
                    <Col sm={'6'} xs={'6'} >
                      <h1 className="text-black">SSD CARD</h1>
                      <div className="line" style={{ height: '2px' }}></div>
                      <p className="text-black">ANIFINTY M20</p>
                      <p className="text-black">INFINTIY M 40PRO</p>
                      <p className="text-black">PO V40 THINQ</p>
                    </Col>
                    <Col sm={'6'} xs={'6'} >
                      <Image src={mobile} alt=""  style={{height:'300px', width:'250px'}} />
                    </Col>
                  </Row>
                </Container>
              </NavDropdown>
              <NavDropdown title="Pages" id="navbarScrollingDropdown" className='side-bar-link' style={{ color: 'black', fontWeight: 'bolder', marginLeft: '15px' }}>
                <NavDropdown.Item href="#">About Us</NavDropdown.Item>
                <NavDropdown.Item href="#">Contact Us</NavDropdown.Item>
                <NavDropdown.Item href="#">Blog</NavDropdown.Item>
                <NavDropdown.Item href="#">Fag's</NavDropdown.Item>
              </NavDropdown>
              <Link to={"/shop"}  className="nav-link" style={{ color: 'black', fontWeight: 'bolder', marginLeft: '15px' }}>Shop</Link>
              <Link to={"/andriod"} className="nav-link" style={{ color: 'black', fontWeight: 'bolder', marginLeft: '15px' }}>Android</Link> 
              <Link to={"/accessoires "}  className="nav-link" style={{ color: 'black', fontWeight: 'bolder', marginLeft: '15px' }}>Accessories</Link>
              <Link to={"/memorystorge "} className="nav-link" style={{ color: 'black', fontWeight: 'bolder', marginLeft: '15px' }}>Memory&Storge</Link>

      
        </div>
    )
  }