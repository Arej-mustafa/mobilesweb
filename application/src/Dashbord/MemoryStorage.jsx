import React from 'react'
import Dashboard from './Dashboard'
import Footer from '../components/Footer/Footer'
import { Col, Container, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import Text from '../components/text/Text'

function MemoryStorage() {
  const [email,setEmail] =useState("");
  function Submit (e){
      e.preventDefault();

  }
  return (
    <>
    <Dashboard/>
   <h1>MemoryStorage</h1> 
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

export default MemoryStorage