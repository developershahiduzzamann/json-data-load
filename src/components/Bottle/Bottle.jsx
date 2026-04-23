import React from 'react';
import './Bottle.css'
const Bottle = ({bottle, handelCard }) => {

    const {brand , imageUrl,price, material, capacity} = bottle;
    return (
        <div className='scart'>
            <h3 className='title'>Brand:{brand}</h3>
            <div className=''>
                <img className='img' src={imageUrl} alt="" />
                <h4>Material: {material}</h4>
                <h4>Capacity: {capacity}</h4>
                <h4>Price: ${price}</h4>
                <button className='btn' onClick={()=>handelCard (bottle)}>Add Card</button>
            </div>
        </div>
    );
};

export default Bottle;