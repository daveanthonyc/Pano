import { Box, Typography, TextField, Button, Link } from '@mui/material';
import logo from '../../assets/logo.png';
import { useNavigate } from 'react-router-dom';

function SignIn() {
    const navigate = useNavigate();

  return (
  <>
    <Box position='relative' width='100%' height='100vh' display='flex' justifyContent='center' alignItems='center'>
        <Box display='flex' flexDirection='column' gap='40px' justifyContent='center' alignItems='center'>
            <img src={logo} alt="" className='image-logo'/>
            <Typography variant='h1' fontWeight='600' fontSize='35px'>Sign up to Pano</Typography>
            <Box display='grid' width='360px' gap='20px' justifyContent='center'>
                <TextField type='email' placeholder='Enter your email address...' sx={{borderWidth: '10px'}} variant='outlined'  label='Email'></TextField>
                <TextField type='password' placeholder='Enter your password' sx={{paddingBlock: '-10px'}} variant='outlined'  label='Password'></TextField>
                <Button variant='contained' 
                    sx={{
                    backgroundColor: 'secondary.main', 
                    textTransform: 'none', 
                    height: '50px', 
                    color: 'rgb(255,255,255)',
                    ":hover": {backgroundColor: 'secondary.main'}}}>Sign up</Button>
                <Typography sx={{color: 'rgba(0,0,0,0.7)', marginTop: '20px'}}>Already have an account? <Link sx={{color: 'secondary.main', ":hover": {cursor: 'pointer'}}} onClick={() => navigate('/login')}>Login</Link></Typography>
            </Box>
        </Box>
    </Box>
    <div className='decorativeDiv'>
    <svg id="aboveWave" className='above' style={{
        transformOrigin: 'top',
        transform:"rotate(180deg) translateY(-50%) scaleY(0.5)",
        transition: "0.3s"}}
        viewBox="0 0 1440 310" 
        version="1.1" 
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio='xMinYMin meet'
        >
            <defs>
                <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
                    <stop stopColor="rgba(20, 87.252, 150.804, 1)" 
                        offset="0%">
                    </stop>
                    <stop stopColor="rgba(5.669, 13.948, 70.516, 1)" 
                        offset="100%">
                    </stop>
                </linearGradient>
            </defs>
            <path style={{
                transform:"translate(0, 0px)", 

                opacity:"1"}}
                fill="url(#sw-gradient-0)"
                d="M0,62L60,77.5C120,93,240,124,360,155C480,186,600,217,720,196.3C840,176,960,103,1080,72.3C1200,41,1320,52,1440,87.8C1560,124,1680,186,1800,180.8C1920,176,2040,103,2160,67.2C2280,31,2400,31,2520,41.3C2640,52,2760,72,2880,103.3C3000,134,3120,176,3240,165.3C3360,155,3480,93,3600,62C3720,31,3840,31,3960,41.3C4080,52,4200,72,4320,77.5C4440,83,4560,72,4680,77.5C4800,83,4920,103,5040,139.5C5160,176,5280,227,5400,206.7C5520,186,5640,93,5760,87.8C5880,83,6000,165,6120,165.3C6240,165,6360,83,6480,72.3C6600,62,6720,124,6840,139.5C6960,155,7080,124,7200,103.3C7320,83,7440,72,7560,56.8C7680,41,7800,21,7920,10.3C8040,0,8160,0,8280,15.5C8400,31,8520,62,8580,77.5L8640,93L8640,310L8580,310C8520,310,8400,310,8280,310C8160,310,8040,310,7920,310C7800,310,7680,310,7560,310C7440,310,7320,310,7200,310C7080,310,6960,310,6840,310C6720,310,6600,310,6480,310C6360,310,6240,310,6120,310C6000,310,5880,310,5760,310C5640,310,5520,310,5400,310C5280,310,5160,310,5040,310C4920,310,4800,310,4680,310C4560,310,4440,310,4320,310C4200,310,4080,310,3960,310C3840,310,3720,310,3600,310C3480,310,3360,310,3240,310C3120,310,3000,310,2880,310C2760,310,2640,310,2520,310C2400,310,2280,310,2160,310C2040,310,1920,310,1800,310C1680,310,1560,310,1440,310C1320,310,1200,310,1080,310C960,310,840,310,720,310C600,310,480,310,360,310C240,310,120,310,60,310L0,310Z">
            </path>
        </svg>
    <svg id="wave" className='wave' style={{
        transform:"rotate(0deg) translateY(35%) scaleY(0.5)",
        transition: "0.3s"}}
        viewBox="0 0 1440 310" 
        version="1.1" 
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio='xMinYMin meet'
        >
            <defs>
                <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
                    <stop stopColor="rgba(20, 87.252, 150.804, 1)" 
                        offset="0%">
                    </stop>
                    <stop stopColor="rgba(5.669, 13.948, 70.516, 1)" 
                        offset="100%">
                    </stop>
                </linearGradient>
            </defs>
            <path style={{transform:"translate(0, 0px)", 
                opacity:"1"}}
                fill="url(#sw-gradient-0)"
                d="M0,62L60,77.5C120,93,240,124,360,155C480,186,600,217,720,196.3C840,176,960,103,1080,72.3C1200,41,1320,52,1440,87.8C1560,124,1680,186,1800,180.8C1920,176,2040,103,2160,67.2C2280,31,2400,31,2520,41.3C2640,52,2760,72,2880,103.3C3000,134,3120,176,3240,165.3C3360,155,3480,93,3600,62C3720,31,3840,31,3960,41.3C4080,52,4200,72,4320,77.5C4440,83,4560,72,4680,77.5C4800,83,4920,103,5040,139.5C5160,176,5280,227,5400,206.7C5520,186,5640,93,5760,87.8C5880,83,6000,165,6120,165.3C6240,165,6360,83,6480,72.3C6600,62,6720,124,6840,139.5C6960,155,7080,124,7200,103.3C7320,83,7440,72,7560,56.8C7680,41,7800,21,7920,10.3C8040,0,8160,0,8280,15.5C8400,31,8520,62,8580,77.5L8640,93L8640,310L8580,310C8520,310,8400,310,8280,310C8160,310,8040,310,7920,310C7800,310,7680,310,7560,310C7440,310,7320,310,7200,310C7080,310,6960,310,6840,310C6720,310,6600,310,6480,310C6360,310,6240,310,6120,310C6000,310,5880,310,5760,310C5640,310,5520,310,5400,310C5280,310,5160,310,5040,310C4920,310,4800,310,4680,310C4560,310,4440,310,4320,310C4200,310,4080,310,3960,310C3840,310,3720,310,3600,310C3480,310,3360,310,3240,310C3120,310,3000,310,2880,310C2760,310,2640,310,2520,310C2400,310,2280,310,2160,310C2040,310,1920,310,1800,310C1680,310,1560,310,1440,310C1320,310,1200,310,1080,310C960,310,840,310,720,310C600,310,480,310,360,310C240,310,120,310,60,310L0,310Z">
            </path>
        </svg>
    </div>
  </>
  )
}

export default SignIn
