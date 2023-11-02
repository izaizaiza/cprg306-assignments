
"use client"
import { useState, useEffect } from "react";

export default function MealIdeas({ ingredient }){

    const [meals, setMeals] = useState([]);

    // function to load meal ideas
    const loadMealIdeas = async () => {
        const data = await fetchMealIdeas(ingredient);
        setMeals(data);
    }

    //use the useEffect hook to call loadMealIdeas whenever the ingredient prop changes
    useEffect(() => {
        loadMealIdeas();
    }, [ingredient]);
    

    return(
        <div>
            <h2>Meal Ideas with {ingredient}</h2>
            <ul>
                {meals.map((meal) => (
                    <li key={meal.idMeal}>{meal.strMeal}</li>
                ))}
            </ul>
        </div>
    )
}


async function fetchMealIdeas(ingredient){

    try{
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}');
        if (response.ok){
            const data = await response.json();
            return data;
        }
        else{
            throw new Error("Error fetching meals");
        }
        
    }
    catch(error){
        console.log("Error:",error);
        return[];
    }
}

