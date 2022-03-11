import React from 'react'
import Photocard from './Photocard'
import '../App.css';


const Photocollage = props => {

    const Photoloop = () => {
        return props.photos.map(photo => {
            return <Photocard key = { photo.id }
            url = { photo.src.medium }
            photographer = { photo.photographer }
            />
        })
    }
    return ( <
        section className = "row" > { Photoloop() } < /section>
    )
}

export default Photocollage