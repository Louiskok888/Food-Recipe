import React from "react";

const AddFavorite = ({handleFavoritesClick}) => {
return (
    <>
        
        <svg xmlns="http://www.w3.org/2000/svg" 
            width="20" height="20" 
            fill="red" 
            class="bi bi-heart-fill" 
            viewBox="0 0 16 16">
        
        
    
           <path 
                fill-rule="evenodd" 
                d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
           />
        </svg>

    <button className="mr-2 heart" 
            onClick={() => handleFavoritesClick()}>Add to Favorites</button>
        <svg xmlns="http://www.w3.org/2000/svg" 
             width="20" height="20" 
             fill="red" 
             class="bi bi-heart-fill" 
             viewBox="0 0 16 16">
             
            <path 
                fill-rule="evenodd" 
                d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
            />
        </svg>
    </>
)
} 
export default AddFavorite;