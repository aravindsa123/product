import React from 'react'
import './Home.css'
import Header from '../Header/Header'
const Home = (props) => {
  return (
    <div>
      <Header xxx={props.checkLogout}/>
      <h1 className='a'>WELCOME TO ADMIN PANEL</h1>
    </div>
  )
}

export default Home
