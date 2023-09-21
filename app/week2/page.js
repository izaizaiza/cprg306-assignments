import StudentInfo from "../StudentInfo";
import Link from 'next/link'

export default function Week2() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">

            <nav>
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/week2">Week2</Link></li>
                </ul>
            </nav>

            <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
            <h1 class= 'text-4xl'>My Shopping List</h1>
            <StudentInfo />
            </div>

        </main>
    );
  }
