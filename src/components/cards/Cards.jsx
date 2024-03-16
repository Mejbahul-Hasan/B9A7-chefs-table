import { useEffect, useState } from "react";
import Card from "../card/Card";

const Cards = ({handleAddToCookingItem}) =>{
    const [cards, setCards] = useState([]);

useEffect(()=>{
    fetch('recipes.json')
    .then(res=>res.json())
    .then(data=>setCards(data));
}, [])

    return (
        <div className="w-2/3 ml-20 grid grid-cols-2">
            {
                cards.map(card=> <Card 
                    key={card.recipe_id} 
                    card={card}
                    handleAddToCookingItem={handleAddToCookingItem}
                    ></Card>)
                    
            }
        </div>
    );
};

export default Cards;