import CookingItem from "../../CookingItem/CookingItem";

const CookingItems = ({cookingItems}) => {
    return (
        <div className="w-1/3 mr-10 my-3 bg-base-200 rounded-2xl">
            <h3 className="text-3xl font-bold text-center mt-10 border-b-2 ">Want to cook: {cookingItems.length}</h3>
            {
                cookingItems.map(cookingItem=> <CookingItem cookingItem={cookingItem}></CookingItem>)
            }
        </div>
    );
};

export default CookingItems;