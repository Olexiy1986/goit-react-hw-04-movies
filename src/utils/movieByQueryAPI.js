import axios from "axios";

const getMovieByQuery = (query) => {
  return axios
    .get(
      `https://api.themoviedb.org/3/search/movie?api_key=75b36e21bda62e9980bde1918a0b174f&language=en-US&query=${query}&page=1&include_adult=true`
    )
    .then((response) => response.data.results);
};

export default { getMovieByQuery };
