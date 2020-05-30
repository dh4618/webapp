import React from 'react'
import './style.css'
import Card from '../UI/Card'
import Logo from '../Logo'
import NavBar from '../NavBar'

/**
* @author
* @function Hero
**/

const Hero = (props) => {
  return(
    <div>
      <Card>
        <div style={{padding: '40px'}}>
        
        <Logo/>
        </div>
    
        <NavBar/>
            
      </Card>
    
    </div>
   )

 }

export default Hero