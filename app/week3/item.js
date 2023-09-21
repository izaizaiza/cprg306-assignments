

export default function Item(name, quantity, category) {
    return (
        <ul>
            <li class="p-2 m-4 bg-slate-800 max-w-sm">
                {name}
                Buy {quantity} in {category}
            </li>
        </ul>
        
    );
  }