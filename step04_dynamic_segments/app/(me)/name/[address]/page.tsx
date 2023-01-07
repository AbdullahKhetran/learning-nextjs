import Link from 'next/link'

export default function Address() {
    return (
        <div>
            <h1>My page inside a <i>Dynamic Route</i></h1>
            <Link href="/">Home</Link ><br />
            <Link href="/name">Name</Link>
        </div>)
}