import { GetStaticProps, GetServerSideProps } from 'next'
import axios from 'axios';
import { Movie } from "../../interfaces/index";
import MovieCard from '../../components/MovieCard'

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

  await axios.get(`${apiUrl}/movie/popular?api_key=${process.env.TMDB_API_KEY}`)
    .then(function (resp) {
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

  return (
    <>
      <h2 className='text-4xl mb-5'>Movies</h2>
      <div className='grid grid-cols-4 gap-4'>
          {movies.map((movie: Movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
      </div>
    </>
  );
}
