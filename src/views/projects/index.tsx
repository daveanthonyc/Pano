import { Box, Typography } from "@mui/material";
import Topbar from "../../components/Topbar";

function Projects() {
  return (
    <Box width='100%'>
        <Topbar title='Projects'/>
        <Box padding='25px'>
            <Typography fontWeight='600' fontSize='26px' color='primary.dark'>Projects</Typography>
        </Box>
    </Box>
  )
}

export default Projects;
