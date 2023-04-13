import Link from 'next/link';

export default function About() {
  return (
    <>
      <h1>About This App</h1>
      <p>This demo application uses the NextJS Framework which is based on ReactJS. We will be making some API requests to the <Link href="https://www.themoviedb.org">The Movie Database API</Link>.</p>
    </>
  );
}
