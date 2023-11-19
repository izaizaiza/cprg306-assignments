"use client"


import { useState } from "react";
import Item from "./item.js";



export default function ItemList({items, onItemSelect}) {

    
    
    // 1.initialize state variable
    // create state variable named sortBy and setter function setSortBy
    // set initial value to "name"
    let [sortBy, setSortBy] = useState("name");

    //2. Sort the items use javaScript's sort function to sort the items array
    // if sortBy is name, sort the items by name
    // if sortBy is category, sort the items by category
    
    let sortedItems = [...items].sort((a, b) => {
        const propA = sortBy === "name" ? a.name : a.category;
        const propB = sortBy === "name" ? b.name : b.category;

        if (propA && propB) {
            return propA.localeCompare(propB);
        } else {
            // if propA or propB is undefined, sort by category
            return 0;
        }
    });


    console.log(sortedItems)
    
    

    return (
        <div className = "m-10 justify-between max-w-md ">
        <div>
            <div
            className="flex flex-row p-2 ml-4"
            >
                <p
                className="p-1"
                >Sort by:</p>

                <button
                className="p-1 w-40 bg-custom-orange hover:bg-custom-slate active:bg-custom-slate"
                onClick={() => setSortBy('name')}
                >
                    Sort by Name
                </button>

                <button
                className="p-1 w-40 bg-custom-orange hover:bg-custom-slate active:bg-custom-slate"
                onClick={() => setSortBy('category')}
                >
                    Sort by Category
                </button>
            </div>
            
        </div>
        <ul>
            {sortedItems.map(item => (
            <Item 
            key={item.id} {...item} 
            onSelect={onItemSelect}/>
            ))}
        </ul>
        </div>
        
    );
}