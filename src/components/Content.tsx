
import { MovieProps } from '../components/SideBar';
import { MovieCard } from './MovieCard';

interface ContentProps {
  movies: MovieProps[];
  children: React.ReactNode;
}

export function Content( props: ContentProps ) {

  return (
    <div className="container">
      { props.children }

      <main>
        <div className="movies-list">
          {props.movies.map(movie => (
            <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
          ))}
        </div>
      </main>
    </div>
  )
}