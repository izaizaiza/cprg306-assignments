import ItemList from "./item-list"
import Link from 'next/link'


export default function Page() {
    return (
        <main>
            <div class="flex flex-col">

                
                <div class="flex flex-row">
                    <h1 class="flex flex-grow ml-3 text-5xl">
                            CPRG 306: Web Development 2 - Assignments
                        </h1>

                        <nav class="flex flex-shrink bg-custom-orange p-3">
                            <Link href="/" class="hover:text-custom-slate">Home</Link>
                        </nav>
                </div>

                
                <div>
                    <h1 class= "text-4xl mt-5 mb-5 ml-5">Shopping List</h1>
                    <ItemList class="flex-wrap: wrap; max-w-5xl"></ItemList>
                </div>

            </div>
            
        </main>
    )
}