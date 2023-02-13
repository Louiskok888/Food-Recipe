import React, { useEffect, useState } from "react";
import { json } from "react-router-dom";




const Favorite = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const storedData = localStorage.getItem('favorites');
    console.log(storedData)
    if (storedData) {
      setData(JSON.parse(storedData));
    }
  }, []);
 console.log(data)

 function handleRemove(id) {
    console.log("removed");
   
        const jsonData = localStorage.getItem('favorites')
        const arrayData = JSON.parse(jsonData)
        const newData = arrayData.filter(item => item.idMeal!==id )
        localStorage.setItem('favorites', JSON.stringify(newData))
        setData(newData);
        
 }
    

 
  


  return (
    <div className="favoriteData">
      {data ? (
            <div>
                <ul>{ data.map(recipe => (
                    <li key={recipe.idMeal}>{recipe.strMeal}
                    <div className="remove">
                    <button  onClick={()=> handleRemove(recipe.idMeal)}> Remove</button>
                    </div>
                    

                    </li>
                ))}
                </ul>
                
            </div>

      ) : (
        <div>No data found in local storage</div>
      )}
      

    </div>

  );
};

export default Favorite;








// export default function Favorite () {



//         return (
//             <div className="favorite">
//                 <h1 className="foodTitle">favorite recipe</h1>
                
//             </div>

//         )

// }



                    // <button type="button" onClick={()=> {
                    //     setData(
                    //         data.filter( r =>
                    //             r.strMeal !== recipe.strMeal
                    //         )
                    //     )
                        
                    //   }}>
                    //     Remove
                    // </button>
