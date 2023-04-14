import Link from 'next/link'
import Image from "next/image";
import { Movie } from "../interfaces/index";

type Props = {
    movie: Movie;
}

export default function MovieCard({ movie }: Props) {

    const imagePath = "https://image.tmdb.org/t/p/original";

    return (
        <>
        <div key={ movie.id } className='bg-white shadow-md hover:shadow-xl rounded-md overflow-hidden'>
            <Link href={'/movies/' + movie.id}>
                <Image
                    src={imagePath + movie.poster_path}
                    alt={movie.title + ' poster'}
                    width={ 280 }
                    height={ 100 }
                    className='border-b'
                />
                <div className='p-4'>
                    <h2 className='text-teal-800'>{movie.title}</h2>
                </div>
            </Link>
        </div>
        </>
    );

}