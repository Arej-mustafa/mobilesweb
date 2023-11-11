import React from 'react'

export default  function Point1(props) {
  return (
    <>
            <img style={{textAlign:'center'}} src={props.img} alt="Perfect Cut" />
            <h5 style={{textAlign:'center'}}>{props.Title}</h5>
            <p style={{textAlign:'center'}}>{props.dic1}</p>
    </>
  )}