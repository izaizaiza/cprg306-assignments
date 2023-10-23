
"use client"
import { useState } from "react";
import StudentInfo from "../StudentInfo";
import Link from 'next/link'
import ItemList from "./item-list"
import NewItem from "./new-item";
import itemsData from "./items.json";

export default function Week6() {

    // 1.initialize state variable items with itemsData
    let [items, setItems] = useState(itemsData);

    //2. create event handler function handleAddItem
    const handleAddItem = (item) => {
        // 1. create a copy of items array
        // 2. add item to the copy
        // 3. setItems to the copy
        let copy = [...items];
        copy.push(item);
        setItems(copy);
    };

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

                <div>
                    <NewItem className="flex flex-row"
                    onAddItem = {handleAddItem}></NewItem>
                    <ItemList className="flex-wrap: wrap; max-w-5xl"></ItemList>
                </div>

                </div>
        </main>
    );
  }
