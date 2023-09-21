

export default function Item({ name, quantity, category }) {
    return (
        <div className="flex: 1 1 auto; p-5 space-x-1 bg-green-400">
            <h3 className="text-xl">{name}</h3>
            <p className= "text-xs">Buy {quantity} in {category}</p>
        </div>
        
    );
  }