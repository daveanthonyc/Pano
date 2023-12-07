import { Box, Button, Typography } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../state/themeSlice';

function Topbar({ title } : { title: string }) {
    const dispatch = useDispatch();
    const theme = useSelector((state: any) => state.theme);

  return (
    <Box height='60px' borderBottom='1px solid' borderColor='border.main' display='flex' alignItems='center' justifyContent='space-between' paddingInline='30px'>
        <Box>
            <Typography variant='h6' component='h1' color='primary.dark'>{title}</Typography>
        </Box>
        <Box>
            <Button variant='contained' onClick={() => {dispatch(toggleTheme())}}>{theme}</Button>
        </Box>
    </Box>
  )
}

export default Topbar;
