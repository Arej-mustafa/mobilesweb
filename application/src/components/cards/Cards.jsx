import { Container, Row, Col} from 'react-bootstrap';
export default function Cards(props) {
  return (    
       <Row>
         <Col xs={4}>
           <img src= {props.img} alt="Free Delivery Icon" />
         </Col>
         <Col xs={8}>
           <p>{props.Title}</p>
           <p className="text-secondary">{props.dic}</p>
         </Col>
       </Row>
  )
}

