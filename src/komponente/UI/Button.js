import React from 'react'
import PropTypes from 'prop-types'

//import classes from './Button.module.css';


const Button = ({color,text}) => {
    return (
        <button style = {{backgroundColor:color}} >{text}</button>
    )
}
Button.propTypes = {
    
    color: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    
    
    }
export default Button
