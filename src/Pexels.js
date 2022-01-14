import React, { useState } from 'react'
import Axios from 'axios'
import { Card } from 'react-bootstrap'

function Pexels() {

    const [searchText, setSearchText] = useState('');
    const [perPage, setPerPage] = useState("");
    const [result, setResult] = useState([]);
    const [loadings, setLoading] = useState(true);


    function handleChange(event) {
        const searchText = event.target.value;
        setSearchText(searchText);
    }

    function noOfPics(event) {
        const perPage = event.target.value;
        setPerPage(perPage);
    }

    function handleSubmit(event) {
        event.preventDefault();
        const url = "https://api.pexels.com/v1/search?query=" + searchText + "&per_page=";
        const access_token = '563492ad6f91700001000001e7a714553bb74edf96bf7757f128b36b';
        Axios.get(url, {
            headers: {
                'Authorization': `${access_token}`
            }
        }).then(data => {
            console.log(data);
            setResult(data.data.photos);
        })
    }
    return ( <
        form onSubmit = { handleSubmit } >
        <
        div className = "card-header main-search" >
        <
        div className = "row" >
        <
        div className = "col-12 col-md-3 col-xl-3" >
        <
        input onChange = { handleChange }
        className = "AutoFocus form-control"
        placeholder = "Type something..."
        type = "text" / >
        <
        /div>    <
        div className = "ml-auto" >
        <
        input type = "submit"
        value = "Search"
        className = "btn btn-primary search-btn" / >
        <
        /div>   <
        /div>   <
        /div>   <
        div class = "container" >
        <
        div class = "row" > {
            result.map(searchText => ( <
                div className = "col-sm-4" >
                <
                Card style = {
                    { 'margin-top': '10px' } } >
                <
                Card.Img variant = "top"
                src = { searchText.src.landscape }
                alt = { searchText.photographer }
                />   <
                Card.Body >
                <
                h5 className = "card-title" > Card title < /h5>   <
                a className = "btn btn-primary" > Know more < /a>   <
                /Card.Body>   <
                /Card>   <
                /div>  
            ))
        } <
        /div>   <
        /div>   <
        /form>  
    )
}

export default Pexels;