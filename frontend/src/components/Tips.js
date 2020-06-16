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
     
    }


    render() {
        const{word, explanation} = this.props
        return (
            
            <Tippy className="tippy" distance="100px" content={explanation}><button className="tips-button"><AiFillQuestionCircle/></button></Tippy>
            
            
        )
              
    
        
    }
}

