import { Box, TextField, Typography, Button, Link } from '@mui/material';
import './Login.css'
import logo from '../../assets/logo.png'
import { ChangeEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from 'src/state/userSlice';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState<string>('demoUser@gmail.com');
    const [password, setPassword] = useState<string>('password');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const changeEmail = (e: ChangeEvent<HTMLInputElement>): void => {
        setEmail(e.target.value);
    }

    const changePassword = (e: ChangeEvent<HTMLInputElement>): void => {
        setPassword(e.target.value);
    }
    
    const submitForm = async () => {
        const reqOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                targetEmail: email,
                targetPassword: password
            })
        }
        const res = await fetch(`${import.meta.env.VITE_REACT_BASE_URL}/general/user`, reqOptions);
        const data = await res.json() ;
        const uniqueUserName = data.user.uniqueUserName;
        dispatch(setUser(data.user))
        navigate(`/${uniqueUserName}/`);
    }


  return (
    <>
    <Box position='relative' width='100%' height='100vh' display='flex' justifyContent='center' alignItems='center'>
        <Box display='flex' flexDirection='column' gap='40px' justifyContent='center' alignItems='center'>
            <img src={logo} alt="" className='image-logo'/>
            <Typography variant='h1' fontWeight='500' fontSize='35px'>Sign in to Pano</Typography>
            <Box display='grid' width='360px' gap='20px' justifyContent='center'>
                <TextField type='email' placeholder='Enter your email address...' sx={{borderWidth: '10px'}} variant='outlined' onChange={changeEmail} defaultValue='demoUser@gmail.com' label='Email'></TextField>
                <TextField type='password' placeholder='Enter your password' sx={{paddingBlock: '-10px'}} variant='outlined' onChange={changePassword} defaultValue='password' label='Password'></TextField>
                <Button variant='contained' sx={{color: 'primary.main', backgroundColor: 'secondary.main', textTransform: 'none', height: '50px', ":hover": {backgroundColor: 'secondary.main'}}} onClick={submitForm}>Sign in</Button>
                <Typography sx={{color: 'rgba(0,0,0,0.7)', marginTop: '20px'}}>New to Pano? <Link sx={{color: 'secondary.main', ":hover": {cursor: 'pointer'}}} onClick={() => navigate('/sign-in')}>Create an account</Link></Typography>
            </Box>
        </Box>
    </Box>
    </>
  )
}

export default Login
