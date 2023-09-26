

"use client";

import { useState } from "react"; 

export default function NewItem(){

    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");


    const handleSubmit = (event) => {
        event.preventDefault();
        //console.log("form submitted");
        console.log(name);
        console.log(quantity);
        console.log(category);

        
    }

    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input 
                id="name" 
                type="text" 
                value={name} 
                onChange={(event) => setName(event.target.value)} 
            />
            <label htmlFor="quantity">Quantity</label>
            <input 
                id="quantity" 
                type="text" 
                value={quantity} 
                onChange={(event) => setQuantity(event.target.value)} 
            />
            <label htmlFor="category">Category</label>
            <input 
                id="category" 
                type="text" 
                value={category} 
                onChange={(event) => setCategory(event.target.value)} 
            />
            <button type="submit">Submit</button>
        </form>
    )


}
