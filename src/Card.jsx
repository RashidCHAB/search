import React, { useState } from 'react';
import './App.css'
import Detail from './Detail';

const Card = (props) => {
    const [detail, setDetail] = useState(false)
    const handleDetails = () => {
        setDetail(!detail)
    }
    const [basket, addBasket] = useState(false)
    const handleAdd = (e) => {
        if (!basket) {
            e.target.disabled = true
            e.target.textContent = ("item in basket")
            addBasket(!basket)
        }
    }
    const handleDel = (e) => {
        if (basket) {
            e.target.previousSibling.disabled = false
            e.target.previousSibling.textContent = ("Add to basket")
            addBasket(!basket)
        }
    }

    return (
        <div className='card'>
            <img src={props.src} alt="123" className='image' />
            <div className='first'>
                <div>
                    <p>{props.name}</p>
                    <p>{`${props.price} ₽`}</p>
                </div>
                <button className='detailsbtn' onClick={handleDetails}>Details</button>


            </div>
            {detail && <Detail detail={detail} setDetail={setDetail} />}
            <div className='second'>Xiaomi RedmiBook Pro 15 Laptop, Windows Home
                <button className="addbtn" disabled={false} onClick={handleAdd}  >Add to basket</button>
                {basket && <p className='delForBasket' onClick={handleDel}>delete from basket</p>}
            </div>
        </div>
    );
};

export default Card;