import { useEffect } from "react";
import { useState } from "react";
import Card from "./Card";

const Cards = () => {
   const [cards, setCards]= useState([]);

   useEffect(() =>{
    fetch('../donation.json')
    .then(res => res.json())
    .then(data => setCards(data))
   },[])


    return (
        <div className="w-4/5 mx-auto my-10">
            
             <div className="grid grid-cols-4 gap-5">
                {
                    cards.map( (card,idx)=> <Card key={idx} card={card}></Card>)
                }
             </div>
            
        </div>
    );
};

export default Cards;