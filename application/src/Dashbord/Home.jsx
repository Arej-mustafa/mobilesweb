import React from 'react'
import Dashboard from './Dashboard'
import {Carousel, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col} from 'react-bootstrap';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Logo3 from './images/phono2.webp'
import Logo4 from './images/phono1.webp'
import Logo5 from './images/phono3.webp'
import Logo6 from './images/support-icon.webp'
import Logo7 from './images/free-deliver-icon.webp'
import Logo8 from './images/offers-icon.webp'
import Logo9 from './images/ic11.webp'
import Logo10 from './images/ic12.webp'
import Logo11 from './images/ic13.avif'
import Logo12 from './images/ic7.webp'
import Logo13 from "./images/hostpot.webp"
import Logo14 from './images/ic10.webp'
import Logo15 from './images/ic9.webp'
import Logo16 from './images/ic8.png'
import Logo17 from './images/mobile4.webp'
import Logo18 from './images/mobile2.webp'
import Logo19 from './images/mobile3.webp'
import Logo27 from './images/center.webp'

import './pages.css'
import Cards from '../components/cards/Cards';
import Cards1 from '../components/cards/Cards1';
import Text from '../components/text/Text';
import Point1 from '../components/point/Point1';
import Point2 from '../components/point/Point2';
import CardSlider from '../components/cards/CardSlider';
import Card2 from '../components/cards/Card2';
import Card4 from '../components/cards/Card4';
import Accordion1 from '../components/Accordion1/Accordion1'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Footer from '../components/Footer/Footer';





export default function Home() {

  const [email,setEmail] =useState("");
  function Submit (e){
      e.preventDefault();

  }
  const splideOptions = {
    type: 'loop',
    perPage: 3,
    rewind: true,
    breakpoints: {
      640: {
        perPage: 2,
        gap: '.7rem',
        height: '12rem', 
      },
      480: {
        perPage: 1,
        gap: '.7rem',
        height: '12rem',
      },
    },
  };

  
  
  return (
    <> <Dashboard />
       <header className="App">
         <Carousel >
           <Carousel.Item>
             <Image 
               className="d-block w-100"
               src={Logo3}
               alt="First slide"
             />
             <Carousel.Caption>
               <h3 style={{color:'black'}}>ZANIA BLACK EDITION</h3>
               <p style={{color:'black'}}> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
             </Carousel.Caption>
           </Carousel.Item>
           <Carousel.Item>
             <Image
               className="d-block w-100"
               src={Logo4}
               alt="Second slide"
             />
             <Carousel.Caption>
               <h3 >DUAL AUDIO</h3>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
             </Carousel.Caption>
           </Carousel.Item>
           <Carousel.Item>
             <img
               className="d-block w-100"
               src={Logo5}
               alt="Third slide"
             />
             <Carousel.Caption>
               <h3>CURVY BEVEL</h3>
               <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
             </Carousel.Caption>
           </Carousel.Item>
         </Carousel>
         <Row>
         <Col  lg={4} md={6} sm={12}><Cards img={Logo7} Title={'FREE SHIPPING'} dic={'For orders over $50'}/></Col>
         <Col  lg={4} md={6} sm={12}><Cards img={Logo8} Title={'OFFICIAL DISCOUNTS'} dic={'For orders over $50'}/></Col>
         <Col  lg={4} md={6} sm={12}><Cards img={Logo6} Title={'Save Big on next product'} dic={'Care till the end'}/></Col>
         </Row>
      </header>
      <section  >
      <Container className='section-AM1'>
      <Text
      className="text-dark"
      Title1={'WHAT MAKES THE ESSENTIAL DIFFERENT?'}
      Title2={'EXPERIENCE HIGH PERFORMANCE AND SECURE'}
    ></Text>
    <Row>
      <Col lg={4} md={6} sm={12} className="card1">
        <Cards1
          img={Logo9}
          Title={'PERFECT CUT'}
          dic1={'DUAL CAMERA'}
          dic2={'Tristique senectus et netus et malesuada ante.'}
        />
      </Col>
      <Col lg={4} md={6} sm={12} className="card1">
        <Cards1
          img={Logo10}
          Title={'MOST POPULAR'}
          dic1={'8GB DDR5 RAM'}
          dic2={'Tristique senectus et netus et malesuada ante.'}
        />
      </Col>
      <Col lg={4} md={6} sm={12} className="card1">
        <Cards1
          img={Logo11}
          Title={'PRETTYT'}
          dic1={'INTELLIGENT PROCESSING'}
          dic2={'Consequat ac habit amet asse felis donec et odio pellentesque diam.'}
        />
      </Col>
    </Row>
  </Container>
</section>

<section >
  <Container className='section-AM'>
    <Text
      Title1={'POSSIBILITIES. PERFORMANCE. POWER.'}
      Title2={'FASTER PROCESSING WITH LESS POWER'}
    ></Text>
    <img className="img-fluid" style={{ position: 'relative' }} src={Logo13} alt="Hostpot" />
    <Row className="Rowww">
      <Col xs={3} className="text-center">
        <div className="point1">
          <span className="dot1"></span>
        </div>
        <Point1 img={Logo12} Title={'SCORPION'} dic1={'Tristique senectus et netus et fames ac turpis..'} />
      </Col>
      <Col xs={3} className="text-center" style={{ transform: 'translateY(135px)' }}>
        <div className="point2">
          <span className="dot2"></span>
        </div>
        <Point2
          img={Logo14}
          Title={'DUAL SIM CARDS'}
          dic1={'Donec ultrices tincidunt arcu non sodales neque sodales ut'}
        />
      </Col>
      <Col xs={3} className="text-center">
        <div className="point1">
          <span className="dot1"></span>
        </div>
            <Point1  img={Logo15} Title={'8GB DDR5 RAM'} dic1={'Cursus euismod quis viverra nibh cras pulvinar mattis nunc sed.'}/>
          </Col>
          <Col xs={3} className="text-center" style={{ transform: 'translateY(135px)' }}>
            <div className="point2">
              <span className="dot2"></span>
            </div>
            <Point1 className="img7 pb-5" img={Logo16} Title={'48 HRS BACKUP'} dic1={'Natoque penatibus et magnis dis parturient montes nasceturp'}/>
          </Col>
        </Row>
      </Container>
    </section>
    <section   className='section-AM'>
    <Container >
    <Text Title1={'NEW ARRIVALS'}></Text>
    <Text className="text-secondary text-center pt-3" Title2={'FIND THE PERFECT PHONE FOR YOU'}></Text>
      <Row>
        <Splide options={splideOptions}>
          <SplideSlide>
          <Col sm={4} className="m-2">
              <CardSlider img={Logo18} Title={'Add To Cart'} dic1={'Read me note 10 s'} dic2={'$76.00'} />
            </Col>
          </SplideSlide>
          <SplideSlide>
            <Col sm={4} className="m-2">
              <CardSlider img={Logo19} Title={'Add To Cart'} dic1={'Read me note 10 s'} dic2={'$76.00'} />
            </Col>
          </SplideSlide>
          <SplideSlide>
            <Col sm={4} className="m-2">
            <CardSlider img={Logo18} Title={'Add To Cart'} dic1={'Read me note 10 s pluse'} dic2={'$100.00'} />
            </Col>
          </SplideSlide>
          <SplideSlide>
            <Col sm={4} className="m-2">
            <CardSlider img={Logo17} Title={'Add To Cart'} dic1={'Read me note 10 s pluse'} dic2={'$200.00'} />
            </Col>
          </SplideSlide>
          <SplideSlide>
          <Col sm={4} className="m-2">
              <CardSlider img={Logo19} Title={'Add To Cart'} dic1={'Read me note 10 s'} dic2={'$76.00'} />
            </Col>
          </SplideSlide>
        </Splide>
      </Row>
    </Container>
    </section>

  <Container className="py-5">
  <Text Title1={'INNOVATIVE QUALITIES & FEATURES'} Title2={'SHOW YOURS TO THE WORLD'}></Text>
  <Row className="align-items-center position-relative bg-white-transparent py-4">
    <Col lg={4} sm={6} xs={12} style={{ '--align': 'end' }} className='card4'>
    <Card2 />
    </Col>
    <Col lg={4} sm={4} className="position-absolute-lg">
      <img src={Logo27} alt="" className="card5"  />
    </Col>
    <Col lg={4} sm={6} xs={12} style={{ '--align': 'start' }}>
      <Card4 />
    </Col>
  </Row>
</Container>

<section className="py-5 my-5 accoridon1 " style={{height:'700px'}} >
    <Text Title4={'POSSIBILITIES. PERFORMANCE. POWER'} Title2={'FASTER PROCESSING WITH LESS POWER<'}></Text>
  <Container className="pt-5">
    <Row className="d-flex g-4">
    <Col lg={4} md={5} sm={6}>
    <Image  src={Logo27}  alt='flags' style={{width:'300px', height:'500px'}}/>
    </Col>
      <Col lg={8} md={7} sm={6}>
         <Accordion1  Title={'NEW GRADIENT COLOR FINISHES'} content={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam cumque voluptatem soluta ullam, fugiat quis adipisci est. Eius ratione, libero sapiente rem rerum excepturi quas velit numquam. Aut, officia. Ipsa.'}/> 
         <Accordion1  Title={' FOUR-SIDED CURVED CERAMIC BODY'} content={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam cumque voluptatem soluta ullam, fugiat quis adipisci est. Eius ratione, libero sapiente rem rerum excepturi quas velit numquam. Aut, officia. Ipsa.'} /> 
         <Accordion1  Title={' 4000MAH HIGH-CAPACITY BATTERY'} content={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam cumque voluptatem soluta ullam, fugiat quis adipisci est. Eius ratione, libero sapiente rem rerum excepturi quas velit numquam. Aut, officia. Ipsa.'} /> 
      </Col>
    </Row>
  </Container>
</section>
<section className='Get-fast ' style={{marginTop:'5rem',height:'700px'}}>
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
  
<Row className=" text-light d-flex" style={{width:'70%',paddingTop:'8rem'}} >
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
