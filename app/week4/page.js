
import NewItem from "./new-item"
import React from "react"
import Link from 'next/link'

export default function Page() {

    return(
        <main>

            <div className="flex flex-row">
                <h1 className="flex flex-grow ml-3 text-5xl">
                    CPRG 306: Web Development 2 - Assignments
                </h1>

                <nav className="flex flex-shrink bg-custom-orange p-3">
                    <Link href="/" class="hover:text-custom-slate">Home</Link>
                </nav>

            </div>

            <NewItem></NewItem>

        </main>
    )
}