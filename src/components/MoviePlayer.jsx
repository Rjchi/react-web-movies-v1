import { useEffect, useState } from "react";
// import ReactPlayer from "react-player";

import { get } from "../utils/httpClient";
import styles from './MoviePlayer.module.css'

const MoviePlayer = ({ id }) => {
  const [movie, setMovie] = useState(null);
  const token = process.env.REACT_APP_API_TOKEN;

  useEffect(() => {
    get(`/movie/${id}/videos?api_key=${token}&language=en-US`)
      .then((movie) => {
        setMovie(movie);
      })
      .catch((error) => {
        alert("Error: " + error.message);
      });
  }, [id, token]);

  return (
    <div>
      {movie ? (
        <a
          href={
            movie.results.length !== 0
              ? `https://www.youtube.com/watch?v=${movie.results[0].key}`
              : `https://www.youtube.com/watch?v=dQw4w9WgXcQ`
          }
          target="_blank"
          rel="noreferrer"
          className={styles.Trailer}
        >
          Trailer
          {/* <ReactPlayer
            controls={true}
            url=
            {
              movie.results.length !== 0 ?
              `https://www.youtube.com/watch?v=${movie.results[0].key}`
              :
              `https://www.youtube.com/watch?v=dQw4w9WgXcQ`
            }
            height="500px"
            width="100%"
          /> */}
        </a>
      ) : (
        <a
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          target="_blank"
          rel="noreferrer"
          className={styles.Trailer}
        >
          Trailer
        </a>
      )}
    </div>
  );
};

export default MoviePlayer;
