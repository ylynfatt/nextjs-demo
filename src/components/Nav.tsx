import Link from 'next/link';

export default function Nav() {
    return (
        <nav>
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/movies">Movies</Link></li>
                <li><Link href="/search">Search</Link></li>
            </ul>
        </nav>
    )
}