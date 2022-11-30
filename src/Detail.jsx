import React from 'react';
import './App.css'

const Detail = (props) => {
    const handleDetails = () => {
        props.setDetail(!props.detail)
    }
    return (
        <div className='detail'>
            The 15.6" display of RedmiBook Pro has a pixel density 3 times higher than conventional FullHD displays.
                <button className='closebtn' onClick={handleDetails}>x</button>

        </div>
    );
};

export default Detail;