import type { movieData } from "../../../data";
import Image from "next/image";
import styles from "./Movie.module.css";
import { imageUrl } from "../../../constants";

const Movie = ({ movie }: { movie: typeof movieData[number] }) => {
  return (
    <div key={movie.id}>
      <div className={styles.card}>
        <div className={styles.cardImageWrapper}>
          <Image
            className={styles.cardImage}
            src={`${imageUrl}${movie.poster_path}`}
            alt="Movie poster"
            height="375"
            width="250"
          ></Image>
        </div>
        <h2>{movie.title}</h2>
        <p>{movie.release_date}</p>
      </div>
    </div>
  );
};

export default Movie;
