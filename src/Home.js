import { findByLabelText } from "@testing-library/react";
import { useState } from "react";
import Recipe from "./Recipe";

const Home = () => {
    const [recipe, setRecipe] = useState();
    const [food,setFood] = useState();


    const load=() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${food}`)
            .then(res => res.json())
            .then(data => {
                console.log(data.meals[0])
                setRecipe(data)})     
    }

    
    return (
        <>
            <div className="displayFood">
                <button onClick={()=>load()} id="search">🧑🏼‍🍳</button>
                <div>
                    <input 
                        className="input"
                        onChange={e => setFood(e.target.value)} 
                        placeholder = "Type a food name"
                    ></input>
                    
                </div>
                <div>
                    {recipe && <Recipe 
                    object={recipe} 
                    
                    />}
                </div>
            </div>  
        </>  
            
       
    );
}

export default Home;