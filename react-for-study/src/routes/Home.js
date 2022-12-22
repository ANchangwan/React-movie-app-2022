import { useState, useEffect } from "react";
import { Movie } from "./../component/Movie";
import styled from "styled-components";

const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
`;

const Moives = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(400px, 1fr));
  grid-gap: 100px;
  padding: 50px;
  width: 80%;
  padding-top: 70px;

  @media screen and (max-width: 1090px) {
    grid-template-columns: 1fr;
    width: 100%;
  }
`;

const Loader = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 300;
`;

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const response = await fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
    );
    const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <Container>
      {loading ? (
        <Loader>
          <h1>Loading...</h1>
        </Loader>
      ) : (
        <Moives>
          {movies.map((movie) => (
            <Movie movies={movie} />
          ))}
        </Moives>
      )}
    </Container>
  );
}

export default Home;
