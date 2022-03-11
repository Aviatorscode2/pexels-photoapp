import React from 'react'
import '../App.css';


const Photocard = (props) => {
    return ( <
        div >
        <
        img className = "photo"
        alt = 'pics'
        src = { props.url }
        /> <
        div className = "" >
        <
        h5 className = "" > Photographer < /h5> <
        h6 className = "" > { props.photographer } < /h6> <
        /div> <
        /div>
    )
}

export default Photocard