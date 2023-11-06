import Link from 'next/link';

export default function StudentInfo() {
    return (
        <div className="bg-custom-slate flex-wrap: wrap; max-w-md rounded-md pt-2 pb-2">
            <h1 className="text-xl ml-5 underline">Student Info</h1>
            <p className= "text-md ml-5">Student Name: Iza Lumpio</p>
            <p className= "text-md ml-5">Course Section: CPRG306-F</p>
            <p className= "text-md ml-5">GitHub link: 
                <Link 
                    href={"https://github.com/izaizaiza/cprg306-assignments.git"}
                    target="_blank"
                    className="hover:text-custom-orange">
                        https://github.com/izaizaiza/cprg306-assignments.git
                </Link> </p>
        </div>
    )
}