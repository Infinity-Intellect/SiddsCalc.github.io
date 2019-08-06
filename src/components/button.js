import React from 'react'

const Button = (props) =>{
    return(
        <input type="button" value={props.display}  onClick={props.handleClick}></input>
    )
}
export default Button;