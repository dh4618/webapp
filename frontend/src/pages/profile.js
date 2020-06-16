import React from 'react'

const profile = ({setAuth}) => {
    return (
        <div className ="profile">
            Hi from my profile
            <input type="button" value="Log Out" onClick={()=> setAuth(false)}/>
        </div>
    )
}

export default profile;
