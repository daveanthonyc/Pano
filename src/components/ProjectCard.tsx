import { Avatar, Box } from '@mui/material';
import { Typography } from '@mui/material';

function ProjectCard({title, id, description }: {title: string, id: string, description: string }) {
  return (
    <Box sx={{
        border: '1px solid',
        borderColor: 'rgba(0,0,0,0.1)',
        borderRadius: '5px',
        overflow: 'hidden'
        }}>
        <Box sx={{
            backgroundImage: 'url(https://t3.ftcdn.net/jpg/03/59/53/22/240_F_359532281_5DPuLHUb52fLBihI5u1ioVnVSSuL4dA0.jpg)',
            padding: '10px',
            backgroundSize: 'fit',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'end',
            height: '100px'
            }}>
            <Box display='flex' alignItems='center' gap='5px'>
                <Avatar variant='square' sx={{borderRadius: '5px', height: '35px', width: '35px', backgroundColor: 'secondary.dark'}}>D</Avatar>
                <Box>
                    <Typography sx={{color: 'primary.main', fontWeight: '600', fontSize: '14px'}}>{title}</Typography>
                    <Typography sx={{color: 'primary.main', fontSize: '10px'}}>{id}</Typography>
                </Box>
            </Box>
        </Box>
        <Box padding={'10px'}>
            <Typography sx={{color: 'primary.dark', fontSize: '11px'}}>{description}</Typography>
            <Box sx={{display: 'flex', justifyContent: 'space-between', paddingBlock: '10px'}}>
                <Avatar sx={{height: '20px', width: '20px', backgroundColor: 'secondary.dark'}}>
                    <Typography fontSize='10px'>D</Typography>
                </Avatar>
            </Box>
        </Box>
    </Box>
  )
}

export default ProjectCard
