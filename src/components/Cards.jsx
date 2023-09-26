import { useEffect } from "react";
import { useState } from "react";
import Card from "./Card";

const Cards = ({ searchIN }) => {
   const [cards, setCards]= useState([]);
   const [filteredCards, setFilteredCards] = useState([]);

   useEffect(() =>{
    fetch('../donation.json')
    .then(res => res.json())
    .then(data => setCards(data))
   },[])

   useEffect(() => {
    if (searchIN) {
      const filtered = cards.filter((card) =>
        card.category.toLowerCase().includes(searchIN.toLowerCase())
      );
      setFilteredCards(filtered);
    } else {
      setFilteredCards(cards);
    }
  }, [searchIN,cards]);
  console.log(filteredCards)

  


    return (
        <div className="w-4/5 mx-auto my-10">
            
             <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-5">
                {
                    filteredCards.map( (card,idx)=> <Card key={idx} card={card}></Card>)
                }
             </div>
            
        </div>
    );
};

export default Cards;