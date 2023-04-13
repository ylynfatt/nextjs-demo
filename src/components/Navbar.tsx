import Link from 'next/link';

export default function Navbar() {
    return (
        <header className='w-full bg-gray-800 shadow justify-between py-4 px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8'>
            <h1 className='text-white font-bold'>NextJS/React Demo</h1>
            <nav>
                <ul className='text-white items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0'>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/movies">Movies</Link></li>
                    <li><Link href="/search">Search</Link></li>
                </ul>
            </nav>
        </header>
    )
}