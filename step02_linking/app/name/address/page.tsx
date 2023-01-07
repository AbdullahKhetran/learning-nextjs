import Link from 'next/link'

export default function Address() {
    return (
        <div>
            <h1>Responding from <i>app/name/address</i> route</h1>
            <Link href="/">Home</Link ><br />
            <Link href="/name">Name</Link>
        </div>)
}