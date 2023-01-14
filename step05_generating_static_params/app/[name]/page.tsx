import Link from 'next/link';

export default function Name({ params }: {
    params: { name: string }
}) {
    return (
        <>
            My name is {params.name}. <br />
            <Link href="/">Home</Link>
        </>
    )
}

export async function generateStaticParams() {
    const names: string[] = ["abdullah", "hamza", "zia"] // usually await will be here because we would be fetching data

    return names.map((name) => ({
        name: name
    }));
}