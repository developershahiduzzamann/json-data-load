import React, { use, useState } from 'react';
import Bottle from '../Bottle/bottle';
import './Bottles.css'
const Bottles = ({bottlePromise}) => {

    const [card, setCard] = useState([])
    const handelCard =(buttle)=>{
        const newCard = [...card, buttle];
        setCard(newCard)
        // console.log("You are Success Add", buttle)
    }
    const bottles = use(bottlePromise)
    return (
        <div>
            <h3>Bottles: {bottles.length}</h3>
            <h4>Count Bottle: {card.length}</h4>
            <div className='bottle-container'>
                {bottles.map(bottle => <Bottle 
                key ={bottle.id}
                bottle ={bottle}
                handelCard = {handelCard}
                ></Bottle>)}
            </div>
        </div>
    );
};

export default Bottles;