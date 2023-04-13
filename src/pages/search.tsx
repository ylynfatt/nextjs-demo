import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import axios from 'axios';
import { Movie } from '../interfaces/index'
import MovieCard from '../components/MovieCard'

export default function Search() {

    const [search, setSearch] = useState("");
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const imagePath = "https://image.tmdb.org/t/p/original";

    const handleChange = (event: any) => {
        setSearch(event.target.value);
    };

    const handleSubmit = (event: any) => {
        event.preventDefault();
        if (search.length > 3) {
            setLoading(true);

            const apiUrl = "https://api.themoviedb.org/3";

            axios.get(`${apiUrl}/search/movie?query=${search}&api_key=19cb32bdaf2d1b9c825bc739271fc48b`)
            .then((resp: any) => {
                setMovies(resp.data.results);
            })
            .catch(err => console.log(err))
            .finally(() => {
                setLoading(false)
            });
        }
    }

    return (
        <>
            <h2 className='text-4xl mb-5'>Movie Search</h2>
            <form onSubmit={handleSubmit} className='w-64 mb-16'>
                <div className="form-group flex">
                    <input type="search" name="q" onChange={handleChange} placeholder="Enter movie name" className="relative block w-full rounded border-0 py-1.5 px-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    <button type="submit" className='flex justify-center rounded-md bg-indigo-600 px-3 py-2 ml-2 text-sm font-semibold text-white hover:bg-indigo-500'>Search</button>
                </div>
            </form>

            { loading &&
                <div className="">Loading...</div>
            }

            {!loading &&
            <div className='results grid grid-cols-4 gap-4'>
                { movies.map((movie: Movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
            }
        </>
    );
}