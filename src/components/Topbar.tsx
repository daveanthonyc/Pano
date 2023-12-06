import { Box, Typography } from '@mui/material'

function Topbar({ title } : { title: string }) {
  return (
    <Box height='60px' borderBottom='1px solid rgba(0,0,0,0.1)' display='flex' alignItems='center' justifyContent='space-between' paddingInline='30px'>
        <Box>
            <Typography variant='h6' component='h1'>{title}</Typography>
        </Box>
        <Box>

        </Box>

    </Box>
  )
}

export default Topbar;
