import { Box, Typography } from "@mui/material";
import { useEffect } from 'react';
import Topbar from "../../components/Topbar";
import { useSelector } from "react-redux";
import ProjectCard from "src/components/ProjectCard";

function Projects() {
    const projects = useSelector((state) => state.project.project);

  return (
    <Box width='100%' >
        <Topbar title='Projects'/>

        <Box padding='25px' sx={{
            display: 'grid',
            gap: '25px',
            gridTemplateColumns: 'repeat(3,1fr)'
        }}>
            {(Array.isArray(projects)) && projects.map((project, index) => (
                <ProjectCard title={project.projectTitle} description={project.description} id={project._id} key={index}/>
            ))}
        </Box>
    </Box>
  )
}

export default Projects;
