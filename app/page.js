import Image from 'next/image'
import StudentInfo from './StudentInfo'
import Link from 'next/link'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-10">
      <div className="max-w-5xl w-full items-center font-mono text-sm lg:flex">
        <h1 className="text-4xl">CPRG 306: Web Development 2 - Assignments</h1>      
      </div>

      <div className="pt-10">
        <StudentInfo />
      </div>

      <div>
        <nav className="flex flex-col justify-between mt-3 bg-custom-slate rounded-md">
          <Link href="/week2" className="p-3 hover:bg-custom-orange">Week2</Link>
          <Link href="/week3" className ="p-3 hover:bg-custom-orange">Week3</Link>
          <Link href="/week4" className ="p-3 hover:bg-custom-orange">Week4</Link>
          <Link href="/week5" className ="p-3 hover:bg-custom-orange">Week5</Link>
          <Link href="/week6" className ="p-3 hover:bg-custom-orange">Week6</Link>
          <Link href="/week7" className ="p-3 hover:bg-custom-orange">Week7</Link>
          <Link href="/week8" className ="p-3 hover:bg-custom-orange">Week8</Link>
          <Link href="/week10" className ="p-3 hover:bg-custom-orange">Week10</Link>
        </nav>
      </div>

      
    </main>
  )
}
