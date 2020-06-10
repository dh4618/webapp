import React, {Component} from 'react'
import Tippy from '@tippy.js/react';
import 'tippy.js/dist/tippy.css';
import {AiFillQuestionCircle} from 'react-icons/ai'

export default class Tips extends Component {
    state = {
        showBox: false
      };
    
    handleBoxToggle = () => this.setState({ showBox: !this.state.showBox });
    textbox(){
        // var box = document.getElementById("tips");
        // if(box.style.visibility==="hidden") {
        //     box.style.visibility= "visible"
        // }
    }


    render() {
        return (

            <Tippy content="The opening price is the 
            price at which a security first trades upon 
            the opening of an exchange on a trading day; 
            for example, the New York Stock Exchange (NYSE) 
            opens at precisely 9:30 a.m. Eastern time. The 
            price of the first trade for any listed stock 
            is its daily opening price.">
            <button><AiFillQuestionCircle/></button></Tippy>
           
            
        )
              
        //     <>
            
        //     <div className="tip-box" onMouseOver={this.textbox}>
        //     <AiFillQuestionCircle/>
        //     <div id="tips" style={{background: "red"},{visibility:"hidden"}}>hiiiii</div>
            
        // </div>
        // </>
        
    }
}

