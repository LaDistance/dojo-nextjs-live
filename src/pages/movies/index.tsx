import type { NextPage } from "next";

import { movieData } from "../../../data";

import Movie from "../../components/detail/Movie";

const MoviePage: NextPage = () => {
  return (
    <>
      {movieData.map((movie) => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </>
  );
};

export default MoviePage;
