import { Box, Paper, Typography } from '@mui/material';
import { useState } from 'react'
import { Outlet } from "react-router-dom";
// import { Box } from '@mui/system';

import Nav from './components/Nav'
function App() {


  return (
    <Paper sx={{
      background: 'url(/public/home/background-home-desktop.jpg) no-repeat center center fixed',
      backgroundSize: 'cover',
      height: '100%',
      overflow: 'hidden',
    }
    }>
      <header>
        <Nav />
      </header>
      <main>
        <Typography>
          So, you want to travel to
        </Typography >

        <Typography>
          Space
        </Typography>


        <Typography>
          Let’s face it; if you want to go to space, you might as well genuinely go to
          outer space and not hover kind of on the edge of it. Well sit back, and relax
          because we’ll give you a truly out of this world experience!
          Explore
        </Typography>
        <Outlet />

      </main>
    </Paper>
  )
}

export default App
