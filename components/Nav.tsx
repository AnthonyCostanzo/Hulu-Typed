import movieRequests from '../utils/requests';
import { useRouter } from 'next/router';
import { RequestMovie } from '../utils/models';
function Nav() {
  const router = useRouter();
  return (
    <nav className="relative">
      <div
        className="flex px-10 sm:px-20 text-2xl whitespace-nowrap
      space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide"
      >
        {movieRequests.map((movie: RequestMovie) => (
          <h2
            key={movie.name}
            onClick={() => router.push(`/?genre=${movie.name}`)}
            className="last:pr-24 cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500 "
          >
            {movie.title}
          </h2>
        ))}
      </div>
      <div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202a] h-10 w-1/12" />
    </nav>
  );
}

export default Nav;
