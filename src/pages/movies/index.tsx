import { GetStaticProps, GetServerSideProps } from 'next'
import Link from 'next/link'
import Image from "next/image";
import axios from 'axios';
import { Movie } from "../../interfaces/index";

type Props = {
    movies: Movie[];
}

export const getStaticProps: GetStaticProps = async () => {
  // Example for including static props in a Next.js function component page.
  // Don't forget to include the respective types for any props passed into
  // the component.
  const apiUrl = 'https://api.themoviedb.org/3';

  // Call an external API endpoint to get movies.
  // You can use any data fetching library
  let movies: Movie[] = [];
  // try {
  //   const res = await fetch(`${apiUrl}/movie/popular?api_key=${process.env.TMDB_API_KEY}`)
  //   const data = await res.json()
  //   movies = data.results;
  // } catch(err) {
  //   console.log(err)
  // }

  await axios.get(`${apiUrl}/movie/popular?api_key=${process.env.TMDB_API_KEY}`)
    .then(function (resp) {
      console.log(resp.data.results);
      movies = resp.data.results;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })

  return {
    props: {
      movies: movies
    }
  }
}

export default function Movies({ movies }: Props) {
  const imagePath = "https://image.tmdb.org/t/p/original";

  return (
    <>
      <h1 className='text-2xl'>Movies</h1>
      <ul className='grid grid-cols-4 gap-4'>
          {movies.map((movie: Movie) => (
            <li key={ movie.id }>
              <Image src={imagePath + movie.poster_path} alt={movie.title + ' poster'} width={ 280 } height={ 100 } />
              {/* <img src={imagePath + movie.poster_path} alt={movie.title + ' poster'} /> */}
              <Link href={'/movies/' + movie.id}>{movie.title}</Link>
            </li>
          ))}
      </ul>
    </>
  );
}
