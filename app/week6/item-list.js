"use client"


import { useState } from "react";
//import itemsData from "./items.json";
import Item from "./item.js";



export default function ItemList({items}) {

    
    
    // 1.initialize state variable
    // create state variable named sortBy and setter function setSortBy
    // set initial value to "name"
    let [sortBy, setSortBy] = useState("name");

    //2. Sort the items use javaScript's sort function to sort the items array
    // if sortBy is name, sort the items by name
    // if sortBy is category, sort the items by category
    
    let sortedItems = items.sort((a, b) => {
        if (sortBy === "name") {
            return a.name.localeCompare(b.name);
        } else {
            return a.category.localeCompare(b.category);
        }
    });


    console.log(sortedItems)
    
    

    return (
        <div className = "m-10 justify-between max-w-md ">
        <div>
            <div
            className="flex flex-row p-4 my-4 ml-4"
            >
                <p
                className="p-1"
                >Sort by:</p>

                <button
                className="p-1 w-40 bg-custom-orange hover:text-custom-slate "
                onClick={() => setSortBy('name')}
                >
                    Sort by Name
                </button>

                <button
                className="p-1 w-40 bg-custom-orange hover:text-custom-slate"
                onClick={() => setSortBy('category')}
                >
                    Sort by Category
                </button>
            </div>
            
        </div>
        <ul>
            {sortedItems.map(item => (
            <Item key={item.id} {...item} />
            ))}
        </ul>
        </div>
        
    );
}