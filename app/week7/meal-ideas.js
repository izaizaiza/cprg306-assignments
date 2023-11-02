
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
        <div
        className="m-10">
            <h2 className="text-2xl my-4"
            >Meal Ideas with {ingredient}</h2>
            <ul>
                {meals && meals.map((meal) => (
                    <li 
                    key={meal.idMeal}
                    className="p-2 my-2 bg-custom-slate flex-wrap: wrap; max-w-md hover:bg-custom-orange rounded-md"
                    >{meal.strMeal}</li>
                ))}
            </ul>
        </div>
    )
}


async function fetchMealIdeas(ingredient){

    try{
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
        if (response.ok){
            const data = await response.json();
            console.log("data:",data);
            return data.meals;
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

