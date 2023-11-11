import { Container} from 'react-bootstrap';

export default function Cards1(props) {
  return (
    <> 
        <img className="img-center" src={props.img} alt="Perfect Cut" />
        <p className="text-center">{props.Title}</p>
        <h3 className="text-center">{props.dic1}</h3>
        <p className="text-secondary text-center">{props.dic2}</p>
      </>
      
  )
}

