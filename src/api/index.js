import axios from "axios";

export const fetchMovies = async () => {
  const response = await axios.get("http://localhost:5000/movies");

  return response.data;
}

export const setLike = async (movieId, isLiked) => {
  await axios.patch(`http://localhost:5000/movies/${movieId}`, {
    isLiked,
  })
}

export const deleteMovieById = async (id) => {
  await axios.delete(`http://localhost:5000/movies/${id}`);
}

export const createMovie = async (input) => {
  await axios.post("http://localhost:5000/movies", input);
}
