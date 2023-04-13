import { useState, useEffect     } from 'react';
import { Movie } from '../interfaces/index'

export default function Search() {

    const [searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState([]);

    async function fetchMovies(event: any) {
        console.log(event.target.value)
        setSearchQuery(event.target.value)

        const apiUrl = "https://api.themoviedb.org/3";

        const res = await fetch(
            `${apiUrl}/search/movie?query=${searchQuery}&api_key=`
        );
        const data = await res.json();
        const moviesData: Movie[] = data.results;
        // setMovies(moviesData)
    }

    // useEffect(() => {
    //     fetchMovies
    // }, []);

    return (
        <>
            <h1 className="text-2xl">Movie Search</h1>
            <div className="form-group">
                <input type="search" name="q" onChange={fetchMovies} placeholder="Enter movie name" className="relative block w-full rounded border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
            {searchQuery}
        </>
    );
}