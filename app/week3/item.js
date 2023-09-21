

export default function Item({ name, quantity, category }) {
    return (
        <section className="flex flex-col justify-content: flex-start; p-24 bg-">
            <h3 className="text-lg">{name}</h3>
            <p>Buy {quantity} in {category}</p>
        </section>
        
    );
  }