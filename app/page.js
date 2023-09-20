import Image from 'next/image'
import StudentInfo from './StudentInfo'
import Link from 'next/link'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h1 className="text-4xl">CPRG 306: Web Development 2 - Assignments</h1>
        <StudentInfo />
        <nav>
                <ul>
                    <li><Link href="/week2">Week2</Link></li>
                    <li><Link href="/week3">Week3</Link></li>
                </ul>
            </nav>      
      </div>

      
    </main>
  )
}
