

export default function Item({ name, quantity, category, onSelect }) {

    const handleClick = () => {
        onSelect(name);
    }

    return (
        <div 
        className="p-4 my-4 ml-4 bg-custom-slate flex-wrap: wrap; max-w-md hover:bg-custom-orange rounded-md active:bg-custom-orange"
        onClick={handleClick}>
            <h3 className="text-xl">{name}</h3>
            <p className= "text-xs">Buy {quantity} in {category}</p>
        </div>
        
    );
  }