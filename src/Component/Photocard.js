import React from 'react';
import '../App.css';

const Photos = (props) => {
  return (
    <div className="col-lg-3 mb-5">
      <img className="photo mb-3" alt="pics" src={props.url} />
      <div className="mb-3 d-flex">
        <h5 className="mb-0"> Photographer</h5>
        <h6>{props.photographer}</h6>
      </div>
    </div>
  );
};

export default Photos;
