import { useParams } from "react-router-dom";
import { useEffect, useState, useCallback } from "react";
import { Movie } from "./../component/Movie";

function Detail() {
  const { id } = useParams();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const getMovies = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovies([json.data.movie]);
    setLoading(false);
  };

  useEffect(() => getMovies(), []);

  return <div>{loading ? <h1>Loading...</h1> : <Movie movies={movies} />}</div>;
}

export default Detail;
