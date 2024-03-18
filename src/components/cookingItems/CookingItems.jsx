import { useState } from "react";
import CookingItem from "../../CookingItem/CookingItem";
import CurrentlyCooking from "../CurrentlyCooking/CurrentlyCooking";


const CookingItems = ({cookingItems, setCookingItems}) => {
    
    const [currentlyCooking, setCurrentlyCooking] = useState([]);

    const handlePreparing = cookingItem =>{
            setCurrentlyCooking([...currentlyCooking, cookingItem]);

            const remainingCookingItem = cookingItems.filter(item=> item.recipe_id!=cookingItem.recipe_id);

            setCookingItems(remainingCookingItem);
        }         
    
    return (
        <div className="w-1/3 mr-10 my-3 bg-base-200 rounded-2xl">
            <h3 className="text-3xl font-bold text-center mt-10 border-b-2 ">Want to cook: {cookingItems.length}</h3>
            {
                cookingItems.map((cookingItem)=> <CookingItem 
                    cookingItem={cookingItem}
                    handlePreparing={handlePreparing}
                    ></CookingItem>)
            }
            <h3 className="text-3xl font-bold text-center mt-10 border-b-2 ">Currently cooking: {currentlyCooking.length}</h3>
            {
                currentlyCooking.map((currentlyCooking, index)=> <CurrentlyCooking
                index={index}
                currentlyCooking={currentlyCooking}
                ></CurrentlyCooking>)
            }
        </div>
    );
};

export default CookingItems;