import { Box, Button, Typography } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../state/themeSlice';
import logo from '../assets/logo.png'

function Topbar({ title } : { title: string }) {
    const dispatch = useDispatch();
    const theme = useSelector((state: any) => state.theme.theme);

  return (
    <Box height='60px' borderBottom='1px solid' borderColor='border.main' display='flex' alignItems='center' justifyContent='space-between' paddingInline='30px'>
        <Box>
            <Typography variant='h6' component='h1' color='primary.dark'>{title}</Typography>
        </Box>
        <Box display='flex' alignItems='center'>
            <img src={logo} alt="logo" style={{height: '40px', filter: 'invert(22%) sepia(10%) saturate(1372%) hue-rotate(178deg) brightness(93%) contrast(86%)'}}/>
        </Box>
    </Box>
  )
}

export default Topbar;
