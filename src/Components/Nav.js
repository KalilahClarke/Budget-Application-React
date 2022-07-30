import React from 'react'
import {useNavigate} from "react-router-dom"
import './Nav.css'

export default function Nav() {
  const navigate = useNavigate();

  return (
    <div className ='navigation'>
      <h1 onClick ={()=>{navigate('/transactions')}}>Budget Application</h1>
      <button onClick= {()=>{navigate('/transactions/new')}}>New Transaction</button>
    </div>
    
  )
}

