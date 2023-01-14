import Link from 'next/link';

export default function Name({ params }: { // it should be exact params, looks like a built-in function
    // params: string // this wil generate error because it should be an object
    params: { name: string }
}) {
    return (
        <>
            My name is {params.name}. <br />
            <Link href="/">Home</Link>
        </>
    )
}