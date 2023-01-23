import React from 'react'
import { Button, Typography } from '@mui/material'

const Header = ({ setShowFavorites }) => (
  <div style={{
    backgroundColor: "black",
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    padding: "10px",
    alignItems: "center"
  }}>
    <Typography variant="h4" color="primary">Peliculas</Typography>
    <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
      <Button variant="contained" color="primary" onClick={() => { setShowFavorites(false) }}>Todos</Button>
      <Button variant="contained" color="primary" onClick={() => { setShowFavorites(true) }}>Favoritos</Button>
    </div>
  </div>
)


export default Header;
