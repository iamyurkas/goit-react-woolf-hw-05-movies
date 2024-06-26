import { useEffect, useState } from 'react';
import { fetchMoviesByQuery } from 'service/theMovieDbApi';
import { MovieList } from 'components/MovieList/MovieList';
import { useSearchParams } from 'react-router-dom';
import { SearchForm } from 'components/SearchForm/SearchForm';

const Movies = () => {
  const [movies, setMovies] = useState(null);
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query') || '';

  useEffect(() => {
    const fetchMoviesByQueryData = async () => {
      if (!query) return;
      try {
        const result = await fetchMoviesByQuery(query);
        setMovies(result);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };
    fetchMoviesByQueryData();
  }, [query]);
  return (
    <div>
      <SearchForm />
      {movies && <MovieList movies={movies} />}
    </div>
  );
};
export default Movies;