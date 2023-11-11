import React from 'react'
import {  faStar} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './FontAwsome.css'

export default function FontAwosme() {
  return (
  <> <FontAwesomeIcon icon={faStar} className='icon' style={{color:'gold',display:'flex',alignItems:'center',justifyContent:'center'}} /></>
  )
}
