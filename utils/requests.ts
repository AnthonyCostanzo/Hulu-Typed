const API_KEY = process.env.API_KEY;
import { RequestMovie } from './models';
const movieRequests: RequestMovie[] = [
  {
    name: 'fetchTrending',
    title: 'Trending',
    url: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  },
  {
    name: 'fetchAction',
    title: 'Action',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  },
  {
    name: 'fetchComedy',
    title: 'Comedy',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  },
  {
    name: 'fetchHorror',
    title: 'Horror',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  },
  {
    name: 'fetchRomanceMovies',
    title: 'Romance',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  },
  {
    name: 'fetchMystery',
    title: 'Mystery',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=9648`,
  },
  {
    name: 'fetchSciFi',
    title: 'SciFi',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
  },
  {
    name: 'fetchAnimated',
    title: 'Animated',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
  },
  {
    name: 'fetchTv',
    title: 'TV Movie',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=10770`,
  },
];

export default movieRequests;
