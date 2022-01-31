import Head from 'next/head';
import Header from '../components/Header/Header';
import Nav from '../components/Nav';
import { NextPage, GetServerSideProps } from 'next';

interface MovieResults {
  page?: number;
  results: Movie[];
}

import { Movie } from '../utils/models';
import movieRequests from '../utils/requests';
import { RequestMovie } from '../utils/models';
import Results from '../components/Results';

const Home: NextPage<{ results: Movie[] }> = ({ results }) => {
  return (
    <>
      <Head>
        <title>Hulu 2.0</title>
      </Head>
      <Header />
      <Nav />
      <Results results={results} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const genre = context?.query?.genre;
  let movie: Partial<RequestMovie | undefined>;
  if (genre !== undefined) {
    movie = movieRequests.find((request) => request.name === genre);
  } else {
    movie = movieRequests.find((request) => request.name === 'fetchTrending');
  }
  const res = await fetch(`https://api.themoviedb.org/3${movie?.url}`);
  const data: MovieResults = await res.json();
  return {
    props: {
      results: data.results,
    },
  };
};

export default Home;
