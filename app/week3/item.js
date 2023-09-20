

export default function Item(name, quantity, category) {
    return (
        <li class="p-2 m-4 bg-slate-800 max-w-sm">{name},{quantity},{category}</li>
        
    );
  }