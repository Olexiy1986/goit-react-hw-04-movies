import axios from "axios";

const getTrendingMovies = () => {
  return axios
    .get(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=75b36e21bda62e9980bde1918a0b174f`
    )
    .then((response) => response.data.results);
};

export default { getTrendingMovies };
