import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movies({ id, medium_cover_image, title, genres, summary }) {
  return (
    <div>
      <img src={medium_cover_image} alt={title} />
      <h2>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
      <p>{summary}</p>
    </div>
  );
}

Movies.propTypes = {
  id: PropTypes.number.isRequired,
  medium_cover_image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movies;
