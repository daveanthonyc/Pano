import { Box, Typography } from '@mui/material';

function ProjectCard({title, id, description }: {title: string, id: string, description: string }) {
  return (
    <Box sx={{
                border: '1px solid',
                borderColor: 'border.main',
                borderRadius: '5px',
                padding: '15px'
            }}>
        <Box>
            <Box display={'flex'} justifyContent={'space-between'} >
               <Box></Box> 
               <Box>
                <Typography>{title}</Typography>
                <Typography>{id}</Typography>
               </Box>
            </Box>
        </Box>
        <Box>
            <Typography>{description}</Typography>
        </Box>
    </Box>
  )
}

export default ProjectCard
