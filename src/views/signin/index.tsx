import { Box, Typography, TextField, Button, Link } from '@mui/material';
import logo from '../../assets/logo.png';
import { useNavigate } from 'react-router-dom';

function SignIn() {
    const navigate = useNavigate();

  return (
    <Box position='relative' width='100%' height='100vh' display='flex' justifyContent='center' alignItems='center'>
        <Box display='flex' flexDirection='column' gap='40px' justifyContent='center' alignItems='center'>
            <img src={logo} alt="" className='image-logo'/>
            <Typography variant='h1' fontWeight='500' fontSize='35px'>Sign up to Pano</Typography>
            <Box display='grid' width='360px' gap='20px' justifyContent='center'>
                <TextField type='email' placeholder='Enter your email address...' sx={{borderWidth: '10px'}} variant='outlined'  label='Email'></TextField>
                <TextField type='password' placeholder='Enter your password' sx={{paddingBlock: '-10px'}} variant='outlined'  label='Password'></TextField>
                <Button variant='contained' sx={{color: 'primary.main', backgroundColor: 'secondary.main', textTransform: 'none', height: '50px', ":hover": {backgroundColor: 'secondary.main'}}}>Sign up</Button>
                <Typography sx={{color: 'rgba(0,0,0,0.7)', marginTop: '20px'}}>Already have an account? <Link sx={{color: 'secondary.main', ":hover": {cursor: 'pointer'}}} onClick={() => navigate('/login')}>Login</Link></Typography>
            </Box>
        </Box>
    </Box>
  )
}

export default SignIn
