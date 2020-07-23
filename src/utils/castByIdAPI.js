import axios from "axios";

const getCastById = (id) => {
  return axios
    .get(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=75b36e21bda62e9980bde1918a0b174f`
    )
    .then((response) => response.data.cast);
};

export default { getCastById };
