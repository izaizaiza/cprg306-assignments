

"use client";

import { useState } from "react"; 


export default function NewItem(){

    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");


    const handleSubmit = (event) => {
        event.preventDefault();
        
        const item = {name, quantity, category };
        console.log(item);

        alert(`You are submitting name:${name}, quantity:${quantity}, and quantity:${category}.`);

        // reset state of variables
        setName("");
        setQuantity(1);
        setCategory("produce");

    }

    return(
        <main>
            
            <div className="m-10">
                <h2 className="text-center">Add New Item</h2>
                <form onSubmit={handleSubmit}
                    className = "flex flex-row justify-center  rounded-md bg-custom-slate">
                    
                    <div className="flex flex-col m-5 space-y-5">
                        <label htmlFor="name">Name</label>
                        <label htmlFor="quantity">Quantity</label>
                        <label htmlFor="category">Category</label>

                    </div>

                    <div className="flex flex-col m-5 space-y-5">
                        <input
                            id="name"
                            type = "text"
                            value = {name}
                            onChange = {(event) => setName(event.target.value)}
                            className = "bg-black rounded-md text-custom-white"
                        />

                        <input
                            id = "quantity"
                            type="number"
                            min={1}
                            max={99}
                            value = {quantity}
                            onChange = {(event) => setQuantity(event.target.value)}
                            className = "bg-black rounded-md text-custom-white"
                        />

                        <select
                        id = "category"
                        value = {category}
                        onChange={(event) => setCategory(event.target.value)}
                        className = "bg-black rounded-md text-custom-white"
                        >
                            <option value="produce">Produce</option>
                            <option value="dairy">Dairy</option>
                            <option value="meat">Meat</option>
                            <option value="bakery">Bakery</option>
                            <option value="frozen foods">Frozen Foods</option>
                            <option value="canned goods">Canned Goods</option>
                            <option value="dry goods>">Dry Goods</option>
                            <option value="beverages">Beverages</option>
                            <option value="snacks">Snacks</option>
                            <option value="household">Household</option>
                            <option value="other">Other</option>
                        </select>

                        <submit 
                        type="submit"
                        className = "bg-custom-slate hover:bg-custom-orange w-20 text-center rounded-md"
                        >
                            Submit</submit>

                    </div>
    
                </form>

            </div>
            

        </main>
    )


}
