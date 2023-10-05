

export default function Item({ name, quantity, category }) {
    return (
        <div className="p-4 ml-4 bg-custom-slate flex-wrap: wrap; max-w-md">
            <h3 className="text-xl">{name}</h3>
            <p className= "text-xs">Buy {quantity} in {category}</p>
        </div>
        
    );
  }