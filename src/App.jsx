import { useState } from "react"
import Banner from "./components/banner/Banner"
import Cards from "./components/cards/Cards"
import NavBar from "./components/navbar/NavBar"
import Recipes from "./components/recipes/Recipes"
import CookingItems from "./components/cookingItems/CookingItems"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
const [cookingItems, setCookingItems] = useState([]);

const handleAddToCookingItem = card =>{
  const isExist = cookingItems.find(cookingItem=> cookingItem.recipe_id==card.recipe_id);
  if(!isExist){
    const newCookingItems = [...cookingItems, card];
    setCookingItems(newCookingItems);
  }
  else{
    toast("Menu Already Selected !");
  }

  // const handlePreparing = setCookingItems=>{
  //   const preparingItem = CookingItems.filter(cookingItem => cookingItem.recipe_id != recipe_id);
  //   setCookingItems(preparingItem);
  // }
}

  return (
    <>
    <NavBar></NavBar>
    <Banner></Banner>
    <Recipes></Recipes>
    <div className="flex">
      <Cards handleAddToCookingItem={handleAddToCookingItem}></Cards>
      <CookingItems cookingItems={cookingItems}></CookingItems>
    </div>
    <ToastContainer/>
    </>
  )
}

export default App
