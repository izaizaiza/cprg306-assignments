import StudentInfo from "../StudentInfo";
import Link from 'next/link'
import ItemList from "../week3/item-list"
import Page from "../week3/page"

export default function Week2() {
    return (
        <main>

            <div className="flex flex-col">

                <div className="flex flex-row">
                    <h1 className="flex flex-grow ml-3 text-5xl">
                        CPRG 306: Web Development 2 - Assignments
                    </h1>

                    <nav className="flex flex-shrink bg-custom-orange p-3 self-start">
                        <Link href="/" class="hover:text-custom-slate">Home</Link>
                    </nav>

                </div>

                <div className="mt-10 mb-1 ml-10">
                    <div className="flex flex-row">
                        <hi className="flex-grow text-4xl ml-5 pt-20 mb-1 text-left align-middle">My Shopping List</hi>
                        <StudentInfo className="justify-end flex-shrink"></StudentInfo>
                    </div>
                </div>
                
                <div>
                    <Page></Page>
                </div>

            </div>
            

        </main>
    );
  }
