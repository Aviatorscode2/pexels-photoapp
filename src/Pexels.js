import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import { Card } from 'react-bootstrap'
import Photocard from './Component/Photocard';


function Pexels() {

    const [searchText, setSearchText] = useState('');
    const [photographer, setPhotographer] = useState('');
    const [photos, setPhotos] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleSubmit = () => {
        setLoading(true);

        const url = "https://api.pexels.com/v1/search?query=" + searchText;
        const access_token = '563492ad6f91700001000001e7a714553bb74edf96bf7757f128b36b';
        Axios.get(url, {
            headers: {
                'Authorization': `${access_token}`
            }
        }).then((res) => {
            setPhotos(res.data.photos);
            setPhotographer(res.data.photos.photographer);
            setLoading(true);
            console.log(res.data.photos);
        }).catch(err => {
            throw Error(err.message);
        })
    }

    // useEffect
    useEffect(() => {
        if (searchText !== '') {
            handleSubmit();
        }
    }, [searchText])
    return ( <
        div className = "container" >
        <
        h1 > Pexels Photo App < /h1> <
        form >
        <
        input type = "text"
        placeholder = "Search photos..."
        value = { searchText }
        onChange = {
            (event) => {
                console.log(event.target.value);
                setSearchText(event.target.value)
            }
        }
        /> <
        /form> {
            searchText === '' ? ( <
                    h4 > No photos < /h4>
                ) : ( <
                    section > {
                        loading ? ( <
                            h4 > Loading... < /h4>
                        ) : ( < Photocard src = { src.medium }
                                photographer = { photographer }
                                />)
                            } <
                            /section>
                    )
                } <
                /div>
        )
    }

    export default Pexels;