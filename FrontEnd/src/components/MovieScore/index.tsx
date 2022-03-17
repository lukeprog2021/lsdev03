import MovieStars from "components/MovieStars";
import "./style.css"

function MovieScore() {
    const count = 12;
    const score = 8.7;
  return (
    <div className="dsmovie-score-container">
      <p className="dsmovie-score-value">
        {score > 0 ? score.toFixed(1) : "-"}
      </p>
      <MovieStars />
      <p className="dsmovie-score-count">{count} avaliações</p>
    </div>
  );
}

export default MovieScore
