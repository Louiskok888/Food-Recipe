import React, { useEffect, useState } from "react";
import { json } from "react-router-dom";
import AddFavorites from "./AddFavorites";


export default function Recipe({object}) {
  
    const [img, setImg] = useState();
    const data = object.meals[0];
    const imageUrl = data.strMealThumb;

    const fetchImage = async () => {
        const res = await fetch(imageUrl);
        const imageBlob = await res.blob();
        const imageObjectURL = URL.createObjectURL(imageBlob);
        setImg(imageObjectURL);
      };

    useEffect(() => {
      fetchImage();
     
    },[img] );
      

    
    return (
        <div className="result">
            <h1 className="foodTitle">{data.strMeal}</h1>
            <br/>
            <img src={img} className="recipeImg" alt="icons" />
            <div>
            <button className="favoriteBtn" 
                    onClick={() => {
              let favorites = localStorage.getItem('favorites')
              favorites = favorites ? JSON.parse(favorites):[]
              // if (favorites === null){
              //    favorites = []
              // }  else {
              //   favorites = JSON.parse(favorites)}
              console.log("favorites is:",favorites, "type:",typeof favorites )
              if ( /**new favorite items not inside favorite list */ !favorites.find(item => item.idMeal=== data.idMeal)) {
                favorites.push(data)
              }
              
              localStorage.setItem('favorites', JSON.stringify(favorites))
              
            }}>❤️ Favorite ❤️</button>
            </div>
      
            <div>
            <ul className="ingredients">
              <h3><u>Ingredients</u></h3>
              
              {data.meals}
              {data.strIngredient1 &&<li>{data.strMeasure1} of {data.strMeasure1} of {data.strIngredient1}</li>}
              {data.strIngredient2 &&<li>{data.strMeasure2} of {data.strIngredient2}</li>}
              {data.strIngredient3 &&<li>{data.strMeasure3} of {data.strIngredient3}</li>}
              {data.strIngredient4 &&<li>{data.strMeasure4} of {data.strIngredient4}</li>}
              {data.strIngredient5 &&<li>{data.strMeasure5} of {data.strIngredient5}</li>}
              {data.strIngredient6 &&<li>{data.strMeasure6} of {data.strIngredient6}</li>}
              {data.strIngredient7 &&<li>{data.strMeasure7} of {data.strIngredient7}</li>}
              {data.strIngredient8 &&<li>{data.strMeasure8} of {data.strIngredient8}</li>}
              {data.strIngredient9 &&<li>{data.strMeasure9} of {data.strIngredient9}</li>}
              {data.strIngredient10 &&<li>{data.strMeasure10} of {data.strIngredient10}</li>}
              {data.strIngredient11 &&<li>{data.strMeasure11} of {data.strIngredient11}</li>}
              {data.strIngredient12 &&<li>{data.strMeasure12} of {data.strIngredient12}</li>}
              {data.strIngredient13 &&<li>{data.strMeasure13} of {data.strIngredient13}</li>}
              {data.strIngredient14 &&<li>{data.strMeasure14} of {data.strIngredient14}</li>}
              {data.strIngredient15 &&<li>{data.strMeasure15} of {data.strIngredient15}</li>}
              {data.strIngredient16 &&<li>{data.strMeasure16} of {data.strIngredient16}</li>}
            </ul>
            </div>

            <br/>
      
            <div className="instructions">
                {<h3><u>Instructions</u></h3>}
                {data.strInstructions}
            </div>

            <div className="youtube">
            <br/>
            <h4 className="text-danger"><u>Youtube Tutorial</u></h4>
            {data.strYoutube} 
          
            </div>  
            
          </div>
        
            

            
          
            )
}
