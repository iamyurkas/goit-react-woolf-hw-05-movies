import { useEffect, useState } from 'react';
import { fecthTrendingMovies } from 'service/theMovieDbApi';
import { MovieList } from 'components/MovieList/MovieList';

import styles from './Home.module.css';

const Home = () => {
  const [movies, setMovies] = useState(null);
  useEffect(() => {
    const fecthTrendingMoviesData = async () => {
      try {
        const result = await fecthTrendingMovies();
        setMovies(result);
      } catch (error) {
        console.log(error.message);
      }
    };
    fecthTrendingMoviesData();
  }, []);
  
  return (
    <div className={styles.homeContainer}>
      {movies && <MovieList movies={movies} />}
    </div>
  );
};
export default Home;
