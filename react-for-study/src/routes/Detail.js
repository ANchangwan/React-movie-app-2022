import { useParams } from "react-router-dom";
import { useEffect, useState, useCallback } from "react";
import { Movie } from "./../component/Movie";
import styled from "styled-components";

const Loader = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 300;
`;

function Detail() {
  const { id } = useParams();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const getMovies = useCallback(async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovies(json.data.movie);
    setLoading(false);
  }, [id]);
  useEffect(() => getMovies(), [getMovies]);

  return (
    <div>
      {loading ? <Loader>Loading...</Loader> : <Movie movies={movies} />}
    </div>
  );
}

export default Detail;
