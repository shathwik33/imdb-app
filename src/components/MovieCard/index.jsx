import styles from "./styles.module.css";

function MovieCard({ imgUrl, title, releaseDate }) {
  return (
    <div className={styles.card}>
      <img
        src={`https://image.tmdb.org/t/p/w500${imgUrl}`}
        alt={`${title}-img`}
        className={styles.image}
      />
      <p className={styles.title}>{title}</p>
      <p className={styles.releaseDate}>{releaseDate}</p>
    </div>
  );
}

export default MovieCard;
