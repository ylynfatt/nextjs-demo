import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import axios from 'axios';
import { Movie } from '../interfaces/index'

export default function Search() {

    const [searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const imagePath = "https://image.tmdb.org/t/p/original";

    async function fetchMovies(event: any) {
        console.log(event.target.value)
        setSearchQuery(event.target.value)

        const apiUrl = "https://api.themoviedb.org/3";

        // const res = await fetch(
        //     `${apiUrl}/search/movie?query=${searchQuery}&api_key=`
        // );
        // const data = await res.json();
        // const moviesData: Movie[] = data.results;

        axios.get(`${apiUrl}/search/movie?query=${searchQuery}&api_key=19cb32bdaf2d1b9c825bc739271fc48b`)
        .then((resp: any) => {
            console.log(resp)
            setMovies(resp.data.results);
        })
        .catch(err => console.log(err));

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
            <div className='results grid grid-cols-4 gap-4'>
            {movies.map((movie: Movie) => (
            <div key={ movie.id } className=''>
              <Image
                src={imagePath + movie.poster_path}
                alt={movie.title + ' poster'}
                width={ 280 }
                height={ 100 }
                style={{
                    width: "100%",
                    height: "auto"
                }}
              />
              {/* <img src={imagePath + movie.poster_path} alt={movie.title + ' poster'} /> */}
              <Link href={'/movies/' + movie.id}>{movie.title}</Link>
            </div>
          ))}
            </div>
        </>
    );
}