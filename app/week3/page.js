import ItemList from "./item-list"
import Link from 'next/link'


export default function Page() {
    return (
        <main>
            <nav className="flex-wrap: wrap; bg-slate flex-col items-center justify-between">
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/week2">Week2</Link></li>
                </ul>
            </nav>
            <div>
                <h1>Shopping List</h1>
                <ItemList className="flex-wrap: wrap"></ItemList>
            </div>
            

        </main>
    )
}