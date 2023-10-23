import Image from 'next/image'
import StudentInfo from './StudentInfo'
import Link from 'next/link'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-10">
      <div className="max-w-5xl w-full items-center font-mono text-sm lg:flex">
        <h1 className="text-4xl">CPRG 306: Web Development 2 - Assignments</h1>      
      </div>

      <div class="pt-10">
        <StudentInfo />
      </div>

      <div>
        <nav className="flex flex-col justify-between mt-3 bg-custom-slate rounded-md">
          <Link href="/week2" class="p-3 hover:bg-custom-orange">Week2</Link>
          <Link href="/week3" class ="p-3 hover:bg-custom-orange">Week3</Link>
          <Link href="/week4" class ="p-3 hover:bg-custom-orange">Week4</Link>
          <Link href="/week5" class ="p-3 hover:bg-custom-orange">Week5</Link>
          <Link href="/week6" class ="p-3 hover:bg-custom-orange">Week6</Link>
        </nav>
      </div>

      
    </main>
  )
}
