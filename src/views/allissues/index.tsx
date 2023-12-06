import { Box, Typography } from "@mui/material";
import Topbar from "../../components/Topbar";

function AllIssues() {
  return (
    <Box width='100%'>
        <Topbar title='AllIssues'/>
        <Box padding='25px'>
           <Typography fontWeight='600' fontSize='26px'>All Issues</Typography>
        </Box>
    </Box>
  )
}

export default AllIssues;
