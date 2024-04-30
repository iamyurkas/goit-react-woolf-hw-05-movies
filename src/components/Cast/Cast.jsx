import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCreditsByMovieId } from 'service/theMovieDbApi';

import styles from './Cast.module.css';
import defaultMovieImg from '../../img/movie.png';
console.log(defaultMovieImg)
const Cast = () => {
  const [cast, setCast] = useState(null);
  const { movieId } = useParams();
  useEffect(() => {
    const fetchCastData = async () => {
      try {
        const result = await fetchCreditsByMovieId(movieId);
        setCast(result);
      } catch (error) {
        console.log(error.message);
      } finally {
      }
    };
    fetchCastData();
  }, [movieId]);
  return (
    <ul className={styles['cast-container']}>
      {cast && cast.length > 0 ? (
        cast.map(({ name, profile_path }) => (
          <li key={name} className={styles['cast-list-item']}>
            <img
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w500${profile_path}`
                  : defaultMovieImg
              }
              alt={name}
              className={styles['cast-image']}
            />
            <h3 className={styles['cast-name']}>{name}</h3>
          </li>
        ))
      ) : (
        <li>Not found</li>
      )}
    </ul>
  );
};

export default Cast;
