import React from 'react'
import { Card } from 'react-bootstrap'
import FontAwosme from '../FontAwosme/FontAwosme'

function CardSlider(props) {
  return (
    <>
        <Card bg="dark" text="white" className='card1'>
          <Card.Img src={props.img} className="card-img-top" alt="..."></Card.Img>
          <Card.Body>
            <Card.Title>{props.Title}</Card.Title>
            <Card.Text>
               {props.dic1}
            </Card.Text>
            <Card.Text style={{display:'flex',flexDirection:'row',width:'100%',alignItems:'center',justifyContent:'center'}}><FontAwosme /> <FontAwosme /><FontAwosme /><FontAwosme /><FontAwosme /><FontAwosme /></Card.Text>
            <Card.Text>{props.dic2}</Card.Text>  
            </Card.Body>
        </Card>    
    </>

  )
}

export default CardSlider