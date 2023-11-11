
import Accordion from 'react-bootstrap/Accordion';
import'./Accoridon1.css'


export default  function Accordion1(props) {
  return (


    <Accordion defaultActiveKey="0" flush>
    <Accordion.Item eventKey="0">
      <Accordion.Header>{props.Title}</Accordion.Header>
      <Accordion.Body>
          {props.content}
      </Accordion.Body>
    </Accordion.Item>
    </Accordion>


  )
}