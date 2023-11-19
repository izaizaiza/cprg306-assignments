

"use client";

import { useState } from "react"; 


export default function NewItem({onAddItem}){

    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");


    const handleSubmit = (event) => {
        event.preventDefault();
        
        const item = {name, quantity, category };
        //console.log(item);

        onAddItem(item);
        
        alert(
            `You are submitting a new item: 
            ${name}, 
            quantity: ${quantity}, 
            and under the category: ${category}`);
        
            

        // reset state of variables
        setName("");
        setQuantity(1);
        setCategory("produce");

    }

    

    return(
        
        <div className="m-10 justify-between max-w-md">
            <h2 className="text-center text-2xl p-5">Add New Item</h2>
            <form className = "flex flex-row justify-center rounded-md p-4 my-4 ml-4 bg-custom-slate">
                
                <div className="flex flex-col  m-5 space-y-5 text-lg">
                    <label className= "text-xl p-1" htmlFor="name">Name</label>
                    <label className= "text-xl p-1" htmlFor="quantity">Quantity</label>
                    <label className= "text-xl p-1" htmlFor="category">Category</label>

                </div>

                <div className="flex flex-col m-5 space-y-5">
                    <input
                        id="name"
                        type = "text"
                        value = {name}
                        onChange = {(event) => setName(event.target.value)}
                        className = "bg-black rounded-md text-custom-white text-lg p-1"
                    />

                    <input
                        id = "quantity"
                        type="number"
                        min={1}
                        max={99}
                        value = {quantity}
                        onChange = {(event) => setQuantity(parseInt(event.target.value))}
                        className = "bg-black rounded-md text-custom-white text-lg p-1"
                    />

                    <select
                    id = "category"
                    value = {category}
                    onChange={(event) => setCategory(event.target.value)}
                    className = "bg-black rounded-md text-custom-white text-lg p-1"
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

                    <button 
                    onClick = {handleSubmit}
                    type="submit"
                    className = "bg-custom-slate hover:bg-custom-orange w-20 text-center rounded-md text-xl p-1 border-custom-white border-2">
                        Submit
                    </button>

                </div>

            </form>

        </div>
        
    )


}
