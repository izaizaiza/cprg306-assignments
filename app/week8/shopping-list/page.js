
"use client"
import { useState } from "react";
import { useUserAuth } from "../_utils/auth-context";
import StudentInfo from "./StudentInfo";
import Link from 'next/link'
import ItemList from "./item-list"
import NewItem from "./new-item";
import itemsData from "./items.json";
import MealIdeas from "./meal-ideas";


export default function Page() {

    // 1.initialize state variable items with itemsData
    let [items, setItems] = useState(itemsData);

    //2. create event handler function handleAddItem
    const handleAddItem = (newItem) => {
        // 1. create a copy of items array
        // 2. add item to the copy
        // 3. setItems to the copy
        let copy = [...items];
        copy.push(newItem);
        setItems(copy);
    };


    // add new state variable to hold the name of the selected item from the shopping list
    let [selectedItemName, setSelectedItemName] = useState("");

    // create event handler function handleItemSelect
    const handleItemSelect = (item) => {
        // clean up the item name by removing size and emoji
        //const cleanedItemName = item.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|�[�-�]|�[�-�]|[\u2011-\u26FF]|�[�-�])/g, '');
        const cleanedItemName = item.split(',')[0].trim();
        setSelectedItemName(cleanedItemName);
    };


    // chek if user is logged in using useUserAuth hook
    //conditionally render the shopping page list  or 
    // redirect the user to the landing page if user object is null
    const { user } = useUserAuth();
    if (user === null) {
        window.location.href = "/";
        return null;
    }

    

    return (
        <main>
            <div className="flex flex-col">
                <div className="flex flex-row">
                    <h1 className="flex flex-grow ml-3 text-5xl">
                        CPRG 306: Web Development 2 - Assignments
                    </h1>

                    <nav className="flex flex-shrink bg-custom-orange p-3 self-start">
                        <Link href="/" className="hover:text-custom-slate">Home</Link>
                    </nav>

                </div>

                <div className="mt-10 mb-1 ml-10">
                    <div className="flex flex-row">
                        <hi className="flex-grow text-4xl ml-5 pt-20 mb-1 text-left align-middle">My Shopping List</hi>
                        <StudentInfo className="justify-end flex-shrink"></StudentInfo>
                    </div>
                </div>

                <div className="flex">
                    <div className="flex flex-row">
                        <NewItem 
                        className="flex flex-row"
                        onAddItem = {handleAddItem}></NewItem>

                        <ItemList 
                        className="flex-wrap: wrap; max-w-5xl"
                        items = {items}
                        onItemSelect={handleItemSelect}
                        ></ItemList>
                    </div>

                    <div className="flex flex-row">
                        <MealIdeas 
                        className="flex flex-col"
                        ingredient={selectedItemName}></MealIdeas>
                    </div>
                </div>

                </div>
        </main>
    );
  }
