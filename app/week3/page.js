import ItemList from "./item-list"


export default function Page() {
    return (
        <main>
            <nav>
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/week2">Week2</Link></li>
                </ul>
            </nav>
            <div>
                <h1>Shopping List</h1>
                <ItemList></ItemList>
            </div>
            

        </main>
    )
}