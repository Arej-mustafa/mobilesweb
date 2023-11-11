

export default function Card5(props) {

  return (
    <>
    <div className="d-flex flex-column-md mb-3 align-items-end">
    <div>
      <img src={props.img} alt="" className="max-width-custom imgScale transition order-md-1 order-0" />
    </div>
      <div className="flex-grow-1 pe-0 me-3 text-bold order-md-0 order-1 center-xs">
      <h5 className="redHover transition">{props.dic1}</h5>
      <p>{props.dic2}</p>
    </div>
    <div>
    </div>
  </div> 
    
    </>
  )
} 