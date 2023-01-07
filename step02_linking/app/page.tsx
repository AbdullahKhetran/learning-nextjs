import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1> Hello World from Abdullah Khetran</h1>
      <Link href="/name">Name</Link> <br />
      <Link href="/name/address">Address</Link>
    </div>
  )
}