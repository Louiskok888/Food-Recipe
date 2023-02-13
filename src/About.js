import React from "react";
import img from './image/recipe8.jpg'
import img2 from './image/recipe9.jpg'
import img3 from './image/recipe10.png'

const About = () => {


    return (
        <div className="about">
            <h2><u>Recipes</u></h2>
            <br/>
            <h3 className="text-primary">
            A recipe is a set of instructions that describes how to prepare or make something, 
            especially a dish of prepared food. A sub-recipe or subrecipe is a recipe for an ingredient 
            that will be called for in the instructions for the main recipe.
            </h3>
            <div>
                <img src={img} />
                <h3>
                The 3,600-year-old Ancient Egyptian Recipe Making Waves 
                in the Skincare Industry - Acumen Consulting
                </h3>
            </div>
            <br/>
            <div className="book">
                <img src={img2} />
                <div className="description">
                    <div className="description2">
                The All-in-One Cookbook: 
                <br/>
                100 top-rated recipes for 
                <br/>
                one-pot, one-pan, one-tray 
                <br/>
                and your slow cooker
                <br/>
                    </div>
                <div className="bookLogo">
                    <img src={img3} />  
                </div>    
                </div>
                
            </div>

        </div>

    )





}

export default About;

