import Link from 'next/link';

export default function StudentInfo() {
    return (
        <div>
            <h1>Student Info</h1>
            <p>Student Name: Iza Lumpio</p>
            <p>Course Section: CPRG306-F</p>
            <p>GitHub link: <Link href={"https://github.com/izaizaiza/cprg306-assignments.git"}>https://github.com/izaizaiza/cprg306-assignments.git</Link> </p>
        </div>
    )
}