import React from 'react'
import "../css/roundblue.css";

function Roundblue(props) {
    const customStyle = {
        "position":"absolute",
        "overflow": "hidden",
        "top": props.top,
        "right": props.right,
        "left": props.left
    }
    return (
        <div className='rdblue' style={customStyle}>
            
        </div>
    )
}

export default Roundblue
