import { Link } from "react-router-dom";
import styled from "styled-components";

const Movies = styled.div`
  background-color: white;
  margin-bottom: 70px;
  font-weight: 300;
  padding: 50px;
  border-radius: 5px;
  color: #adaeb9;
  display: grid;
  grid-template-columns: minmax(150px, 1fr) 2fr;
  grid-gap: 50px;
  text-decoration: none;
  color: inherit;
  box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
    0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
`;

const MovieImg = styled.img`
  position: relative;
  top: -100px;
  max-width: 150px;
  width: 100%;
  margin-right: 30px;
  box-shadow: 0 30px 60px -12px rgba(50, 50, 93, 0.25),
    0 18px 36px -18px rgba(0, 0, 0, 0.3), 0 -12px 36px -8px rgba(0, 0, 0, 0.025);
`;

const MovieTitle = styled.h2`
  margin: 0;
  font-weight: 300;
  text-decoration: none;
`;

const MovieGenres = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  margin: 5px 0px;
  font-weight: bold;
`;

const MovieList = styled.li`
  margin-right: 10px;
  font-size: 14px;
`;

export function Movie({ movies }) {
  return (
    <Movies>
      <Link to={`/movie/${movies.id}`}>
        <MovieImg src={movies.medium_cover_image} alt={movies.title} />
      </Link>
      <div>
        <MovieTitle>{movies.title}</MovieTitle>
        <p>
          {movies.description_full.length > 233
            ? `${movies.description_full.slice(0, 233)}` + "..."
            : movies.summary}
        </p>
        <MovieGenres>
          {movies.genres.map((g, i) => (
            <MovieList key={g}>{g}</MovieList>
          ))}
        </MovieGenres>
      </div>
    </Movies>
  );
}
