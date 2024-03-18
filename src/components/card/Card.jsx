import fire from "../../assets/fire.png"
import time from "../../assets/time.png"

const Card = ({ card, handleAddToCookingItem }) => {
    const {recipe_name, recipe_description, recipe_image, ingredients, preparing_time, calories} = card;

    return (
        <div className="p-3">
            <div className="card w-96 bg-base-200 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={recipe_image} alt="recipe" className="rounded-xl" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{recipe_name}</h2>
                    <p className="border-b-2">{recipe_description}</p>
                    <div>
                        <h2 className="card-title">Ingredients: {ingredients.length}</h2>
                        <ul className="p-3 list-disc">
                            {ingredients?.map(ingredient=> 
                                <li key={ingredient}>{ingredient}</li>)}
                        </ul>
                    </div>
                    <div className="border-t-2 flex gap-12">
                        <div className="flex">
                            <img src={time} alt="" />
                            <p>{preparing_time}</p>
                        </div>
                        <div className="flex">
                            <img src={fire} alt="" />
                            <p>{calories}</p>
                        </div>
                    </div>
                    <br />
                    <div className="card-actions">
                    <button onClick={() => handleAddToCookingItem(card)} className="btn bg-green-500 rounded-3xl">Want to Cook</button>
                    </div>
                </div>
            </div>
        </div>
    );
};



export default Card;