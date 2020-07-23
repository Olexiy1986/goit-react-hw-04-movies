import axios from "axios";

const getMovieById = (id) => {
  return axios
    .get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=75b36e21bda62e9980bde1918a0b174f&language=en-US`
    )
    .then((response) => response.data);
};

export default { getMovieById };
