import StudentInfo from "../StudentInfo";
import Link from 'next/link'
import ItemList from "../week3/item-list"
import Page from "../week3/page"

export default function Week2() {
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

                <div class="mt-10 mb-1 ml-10">
                    <div class="flex flex-row">
                        <hi class="flex-grow text-4xl ml-5 pt-20 mb-1 text-left align-middle">My Shopping List</hi>
                        <StudentInfo class="justify-end flex-shrink"></StudentInfo>
                    </div>
                </div>
                
                <div>
                    <Page></Page>
                </div>

            </div>
            

        </main>
    );
  }
