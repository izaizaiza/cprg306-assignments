import Link from 'next/link';

export default function StudentInfo() {
    return (
        <div class="bg-custom-slate flex-wrap: wrap; max-w-md rounded-md pt-2 pb-2">
            <h1 class="text-xl ml-5 underline">Student Info</h1>
            <p class= "text-md ml-5">Student Name: Iza Lumpio</p>
            <p class= "text-md ml-5">Course Section: CPRG306-F</p>
            <p class= "text-md ml-5">GitHub link: 
                <Link 
                    href={"https://github.com/izaizaiza/cprg306-assignments.git"}
                    target="_blank">
                        https://github.com/izaizaiza/cprg306-assignments.git
                </Link> </p>
        </div>
    )
}