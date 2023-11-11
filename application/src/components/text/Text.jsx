import React from 'react'
import { Container } from 'react-bootstrap'

export default function Text(props) {
  return (
   <>
    <h5 className="text-secondary text-center pt-3">{props.Title3}</h5> 
    <h1 className="text-center text-light">{props.Title4}</h1>    
    <h1 className="text-center text-dark">{props.Title1}</h1>
    <h4 className="text-secondary text-center pb-2">{props.Title2}</h4>
    </>
  )
}

