import React from 'react'
import { Button, Typography } from '@mui/material'

const Header = ({ setShowFavorites }) => (
  <div class="bg-black flex justify-between w-full p-4 items-center">
    <Typography variant="h4" color="primary">Peliculas</Typography>
    <div class="flex justify-center gap-4">
      <Button variant="contained" color="primary" onClick={() => { setShowFavorites(false) }}>Todos</Button>
      <Button variant="contained" color="primary" onClick={() => { setShowFavorites(true) }}>Favoritos</Button>
    </div>
  </div>
)


export default Header;
