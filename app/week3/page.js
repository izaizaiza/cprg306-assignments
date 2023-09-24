import ItemList from "./item-list"
import Link from 'next/link'


export default function Page() {
    return (
        <main>        
            <ItemList class="flex-wrap: wrap; max-w-5xl"></ItemList>
        </main>
    )
}