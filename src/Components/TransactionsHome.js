import React from 'react'
import './TransactionsHome.css'
import { useNavigate } from 'react-router-dom'

export default function TransactionsHome() {
  const navigate = useNavigate()
  return (
    <div className='home'>
      <h1>
        Welcome to <br></br>Your <br></br> Budgeting Application 
        <br></br>
        Let's get Budgeting
        </h1>
        <button onClick={()=>navigate('/transactions')}>Let's Get Started</button>
    </div>
  )
}
