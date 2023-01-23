import React, { useEffect, useState } from "react";
import axios from "axios";
import CardMovie from "../../common/cardMovie/CardMovie";
import styles from "./Home.module.css";
import Header from "../../common/header/header";
import confetti from "canvas-confetti";
import { Button } from "@mui/material";
import CreateMovieModal from "../../common/createMovieModal/CreateMovieModal";

const Home = () => {

    const [movies, setMovies] = useState([]);
    const[dispatchLike,setDispatchLike]=useState([false]);
    const[favorite,setFavorite]=useState([false]);
    const [open, setOpen] = useState(false);
    const [isMovieCreated,setIsMovieCreated]=useState(false)
    const [isDeleted,setIsDeleted]=useState(false)
  
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);



  useEffect(() => {
    axios
      .get("http://localhost:5000/movies")
      .then((response) => setMovies(response.data))
      .catch((err) => console.log(err));
      setDispatchLike(false);
      setIsMovieCreated(false)
      setIsDeleted(false)
  }, [dispatchLike,isMovieCreated,isDeleted]);
  console.log("movies", movies);

  const handleLike = (movie) => {
    if(!movie.isLiked)
    {confetti({
        zIndex: 999,
        particleCount: 130,
        spread: 160,
        angle: -100,
        origin: {
          x: 0.5,
          y: 0,
        }})}
    
    axios
      .patch(`http://localhost:5000/movies/${movie.id}`, {
        isLiked: !movie.isLiked,
      })
      .then((res) => setDispatchLike(true))
      .catch((err) => console.log(err));
  };
  const moviesFiltered = movies.filter(movie=>movie.isLiked)

  const deleteMovieById=(id)=>{
    axios
   .delete(`http://localhost:5000/movies/${id}`)
   .then(res=>setIsDeleted(true)) 
  }
  return (
    <>
    <Header setFavorite={setFavorite} />
    <Button onClick={handleOpen}>agregar pelicula</Button>
    <CreateMovieModal  open={open} handleClose={handleClose} setIsMovieCreated={setIsMovieCreated} />
      <div className={styles.containerCards}>
        {
            <div className={styles.containerCards}>
        {!favorite
          ? movies.map((movie) => {
              return (
                <CardMovie
                  movie={movie}
                  key={movie.id}
                  handleLike={handleLike}
                  deleteMovieById={deleteMovieById} 
                />
              );
            })
          : moviesFiltered.map((movie) => {
              return (
                <CardMovie
                  movie={movie}
                  key={movie.id}
                  handleLike={handleLike}      
                  deleteMovieById={deleteMovieById} 
                />
              );
            })}
      </div>

        }
      </div>
    </>
  );
};

export default Home;
