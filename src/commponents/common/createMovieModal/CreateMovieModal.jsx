import React from "react";
import { Modal, Box, Button, TextField, Typography } from "@mui/material";
import { useFormik } from "formik"
import { createMovie } from "../../../api";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const CreateMovieModal = ({ open, handleClose, setIsMovieCreated }) => {
  const initialValues = {
    name: "",
    description: "",
    createdAt: "",
    img: ""
  }
  const onSubmit = (data) => {
    const input = {
      name: data.name,
      description: data.description,
      createdAt: data.createdAt,
      img: data.img,
      isLiked: false
    }

    createMovie(input);
    handleClose()
    setIsMovieCreated(true)
  }

  const { handleChange, handleSubmit } = useFormik({
    initialValues,
    onSubmit
  })

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box  sx={{ ...style, width: 400 }}>
          <form class="flex flex-col items-center justify-center h-400 gap-4"
            onSubmit={handleSubmit}
          >
            <Typography variant="h6" color="primary">Agregar Pelicula </Typography>
            <TextField id="outlined-basic"
              label="Nombre"
              variant="outlined"
              name="name"
              onChange={handleChange}
              fullWidth
            />
            <TextField id="outlined-basic"
              label="Description"
              name="description"
              variant="outlined"
              onChange={handleChange}
              fullWidth
            />
            <TextField id="outlined-basic"
              label="Url de la imagen"
              variant="outlined"
              name="img"
              onChange={handleChange}
              fullWidth
            />
            <TextField id="outlined-basic"
              label="created At"
              name="createdAt"
              onChange={handleChange}
              variant="outlined"
              fullWidth
            />
            <Button variant="contained" color="primary" type="submit">Agregar</Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default CreateMovieModal;
