import { Box, CircularProgress, Typography } from '@mui/material';
import React from 'react';

function LoadingScreen() {
  return (
    <Box width={'100%'} height='100%' sx={{ backgroundColor: 'primary.light', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'absolute', zIndex: '200'}} >
        <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '1rem' }}>
            <Typography variant='h4' component='h1' sx={{ color: 'primary.dark'}}>Loading your workspace</Typography>
            <CircularProgress size={80} sx={{ color: 'secondary.main'}}/>
        </Box>
    </Box>
  )
}

export default LoadingScreen
