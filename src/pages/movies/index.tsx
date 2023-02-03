import type { NextPage } from "next";

import Movie from "../../components/detail/Movie";
import { api } from "../../utils/api";

const MoviePage: NextPage = () => {

  const movies = api.movies.getPopular.useQuery();

  if (movies.isLoading) {
    return <div>Loading...</div>;
  }

  if (movies.error) {
    return <div>{movies.error.message}</div>;
  }
  
  return (
    <>
      {movies.data.map((movie) => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </>
  );
};

export default MoviePage;
