import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'
import { Movie } from "../../interfaces/index";
import Image from "next/image";
import Link from "next/link";
import axios from 'axios';

type Props = {
    movie: Movie;
}

export default function Movie({ movie }: Props) {
    // const imagePath = process.env.TMDB_IMAGE_PATH;
    const imagePath = "https://image.tmdb.org/t/p/original";


    return (
        <>
        <div className='w-full lg:max-w-full lg:flex'>
            <Image
                src={imagePath + movie.poster_path}
                alt={movie.title + ' poster'}
                width={ 280 }
                height={ 100 }
                className='h-48 lg:h-auto lg:w-52 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden'
            />
            <div className='movie-details border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col leading-normal'>
                <h2 className='text-4xl mb-2'>{movie.title}</h2>
                <p className='text-sm text-gray-600'>Status: {movie.status}</p>
                <p className='text-sm text-gray-600 mb-2'>Released on {movie.release_date}</p>
                <p>{movie.overview}</p>
            </div>
        </div>
        <Link href={'/movies'} className="flex w-52 justify-center rounded-md bg-indigo-600 px-3 py-2 my-2 text-sm font-semibold text-white hover:bg-indigo-500">Return to Movies</Link>
        </>
    )
}

// export const getStaticPaths: GetStaticPaths = async () => {
//     const apiUrl = 'https://api.themoviedb.org/3';

//     // Call an external API endpoint to get posts.
//     // You can use any data fetching library
//     const res = await fetch(`${apiUrl}/movie/popular?api_key=${process.env.TMDB_API_KEY}`)
//     const data = await res.json()
//     const movies: Movie[] = data.results;

//     // Get the paths we want to pre-render based on users
//     const paths = movies.map((movie) => ({
//       params: { id: movie.id.toString() },
//     }))

//     // We'll pre-render only these paths at build time.
//     // { fallback: false } means other routes should 404.
//     return { paths, fallback: false }
// }

  // This function gets called at build time on server-side.
  // It won't be called on client-side, so you can even do
  // direct database queries.
//   export const getStaticProps: GetStaticProps = async ({ params }) => {
//     const apiUrl = 'https://api.themoviedb.org/3';
//     try {
//       const id = params?.id
//       const res = await fetch(`${apiUrl}/movie/${id}?api_key=${process.env.TMDB_API_KEY}`)
//       const movie: Movie = await res.json()

//       // By returning { props: item }, the StaticPropsDetail component
//       // will receive `item` as a prop at build time
//       return { props: { movie } }
//     } catch (err: any) {
//       return { props: { errors: err.message } }
//     }
//   }

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    const apiUrl = "https://api.themoviedb.org/3";
    // console.log(params);
    let movie: Movie = { id: 0, title: '', overview: '', release_date: ''};
    try {
        const id = params?.id;

        await axios.get(`${apiUrl}/movie/${id}?api_key=${process.env.TMDB_API_KEY}`)
        .then(function (resp) {
            // console.log(resp);
            movie = resp.data;
        })
        .catch(function (error) {
            // handle error
            console.log("error", error);
        })

        // By returning { props: item }, the StaticPropsDetail component
        // will receive `item` as a prop at build time
        return { props: { movie } };
    } catch (err: any) {
        return { props: { errors: err.message } };
    }
};