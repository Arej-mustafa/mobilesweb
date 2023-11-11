import React from 'react'
import Dashboard from './Dashboard'
import CardSlider from '../components/cards/CardSlider';
import {  SplideSlide} from '@splidejs/react-splide';
import Logo17 from './images/mobile4.webp'
import Logo18 from './images/mobile2.webp'
import Logo19 from './images/mobile3.webp'
import 'react-slideshow-image/dist/styles.css'
import { Col, Container, Image, Row } from 'react-bootstrap';
import Footer from '../components/Footer/Footer';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Text from '../components/text/Text'
import { Slide} from 'react-slideshow-image';
import './pages.css'
import Accordion1 from '../components/Accordion1/Accordion1';


function Accessories() {
  const splideOptions = {
    type: 'loop',
    perPage: 1,
    rewind: true,
    breakpoints: {
      640: {
        perPage: 1,
        height: '12rem', 
      },
      480: {
        perPage: 1,
        height: '12rem',
      },
    },
  };



  
  const [email,setEmail] =useState("");
  function Submit (e){
      e.preventDefault();

  }

  return (
    <>
     <Dashboard />
     <section className="py-5 my-5 accoridon2 " style={{height:'700px'}} >
    <Text Title4={'POSSIBILITIES. PERFORMANCE. POWER'} Title2={'FASTER PROCESSING WITH LESS POWER<'}></Text>
  <Container className="pt-5">
    <Row className="d-flex g-4" style={{marginRight:'4rem'}}>
      <Col lg={12} >
        <Accordion1  Title={'NEW GRADIENT COLOR FINISHES'} content={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'} />
         <Accordion1  Title={' 4000MAH HIGH-CAPACITY BATTERY'} content={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. '} /> 
      </Col>
    </Row>
  </Container>
</section>
        <section className='Get-fast ' style={{marginTop:'5rem',height:'100vh'}}>
      <div className='form-container '>
      <Text Title4={'GET OUR UPDATES ALWAYS FAST'} Title2={'YOUR PERSONAL DATA WILL ALWAYS BE SAFE'} Title3={'SUBSCRIBE NOW'}></Text>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <form onSubmit={Submit} style={{ display: 'flex', alignItems: 'center',marginTop:'5rem' }}>
       <input
       id='email'
      type="email"
      placeholder='Enter Business Email'
      className='from-control'
      required
      value={email}
      onChange={(e) => setEmail(e.target.value)}

    />
    <button
      className='btn areej'
      style={{
        backgroundColor: 'black',
        borderRadius: '50%',
        marginLeft: '-2rem', 
        padding: '0.5rem', 
        border: 'none', 
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <FontAwesomeIcon
        icon={faChevronRight}
        style={{ color: 'white', fontSize: '0.99rem' }}
      />
    </button>
  </form>
</div>

<Container style={{width:'100%',display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
  
<Row className=" text-light d-flex pt-5 " style={{width:'70%'}} >
          <Col lg={2} sm={12} className=" SEARCH pt-3 ">SEARCH<span className='span-arej'> |</span></Col>
          <Col lg={2} sm={12} className="Help pt-3">Help <span className='span-arej'> |</span></Col >
          <Col lg={3} sm={12} className="INFORMATION pt-3">INFORMATION<span className='span-arej'> |</span></Col >
          <Col lg={2} sm={12} className="PRIVACY pt-3">PRIVACY<span className='span-arej'> |</span> </Col >
          <Col lg={3} sm={12} className="SHIPPING pt-3">SHIPPING <span className='span-arej'> |</span></Col>
  </Row>
</Container>
</div>
</section>
<Footer />
    </>
  )
}

export default Accessories