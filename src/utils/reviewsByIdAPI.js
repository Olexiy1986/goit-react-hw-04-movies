import axios from "axios";

const getReviewsById = (id) => {
  return axios
    .get(
      `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=75b36e21bda62e9980bde1918a0b174f&language=en-US&page=1`
    )
    .then((response) => response.data.results);
};

export default { getReviewsById };
