import Link from 'next/link';

export default function Name() {
    return (
        <div>
            <h1>Responding from <i>app/name</i> route</h1>
            <Link href="/">Home</Link ><br />
            <Link href="/name/address">Address</Link >
        </div>
    )
}