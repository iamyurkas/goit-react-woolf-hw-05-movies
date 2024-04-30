import { Link, useLocation } from 'react-router-dom';

import styles from './MovieList.module.css';
import defaultMovieImg from '../../img/movie.png';

export const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <div className={styles.container}>
      <ul>
        {movies.map(({ title, id, poster_path }) => (
          <li key={id} className={styles['movie-list-item']}>
            <Link
              to={`/movies/${id}`}
              state={location}
              className={styles['movie-link']}
            >
            <img
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w185${poster_path}`
                  : defaultMovieImg
              }
              alt={title}
              className={styles.moviePoster}
              />
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
