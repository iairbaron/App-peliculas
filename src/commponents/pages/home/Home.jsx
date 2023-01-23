import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import confetti from "canvas-confetti";
import styles from "./Home.module.css";
import Header from "../../common/header/header";
import CreateMovieModal from "../../common/createMovieModal/CreateMovieModal";
import CardMovie from "../../common/cardMovie/CardMovie";
import { fetchMovies, setLike, deleteMovieById } from "../../../api";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [showFavorites, setShowFavorites] = useState(false);
  const [open, setOpen] = useState(false);
  const [moviesChanged, setMoviesChanges] = useState(false)

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const fetchMoviesFromAPI = async () => {
    const movies = await fetchMovies();
    setMovies(movies);
    setMoviesChanges(false);
  }

  useEffect(() => {
    fetchMoviesFromAPI();
  }, [moviesChanged]);

  const handleLike = (movie) => {
    const newLikeValue = !movie.isLiked;
    if (newLikeValue) {
      confetti({
        zIndex: 999,
        particleCount: 130,
        spread: 160,
        angle: -100,
        origin: {
          x: 0.5,
          y: 0,
        }
      })
    }

    setLike(movie.id, newLikeValue);
    setMoviesChanges(true);
  };

  const deleteMovie = (id) => {
    deleteMovieById(id);
    setMoviesChanges(true);
  }

  const moviesToDisplay = showFavorites ? movies.filter(movie => movie.isLiked) : movies;

  return (
    <>
      <Header setShowFavorites={setShowFavorites} />
      <Button onClick={handleOpen}>agregar pelicula</Button>
      <CreateMovieModal open={open} handleClose={handleClose} setIsMovieCreated={setMoviesChanges} />
      <div className={styles.containerCards}>
        {
          <div className={styles.containerCards}>
            {moviesToDisplay.map((movie) => (
              <CardMovie
                key={movie.id}
                movie={movie}
                handleLike={handleLike}
                deleteMovieById={deleteMovie}
              />
            )
            )}
          </div>

        }
      </div>
    </>
  );
};

export default Home;
