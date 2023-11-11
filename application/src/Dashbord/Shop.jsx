
import { Col, Container, Row } from 'react-bootstrap'
import Footer from '../components/Footer/Footer'
import Dashboard from './Dashboard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Text from '../components/text/Text';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import Logo17 from './images/mobile4.webp'
import Logo18 from './images/mobile2.webp'
import Logo19 from './images/mobile3.webp'
import CardSlider from '../components/cards/CardSlider';

function Shop() {
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
  <>
    <Dashboard />
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
  
<Row RowclassName=" text-light d-flex pt-5 " style={{width:'70%'}} >
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

export default Shop