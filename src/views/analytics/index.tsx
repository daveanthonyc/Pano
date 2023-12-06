import { Box, Typography } from "@mui/material";
import Topbar from "../../components/Topbar";

function Analytics() {
  return (
    <Box width='100%'>
        <Topbar title='Analytics'/>
        <Box padding='25px'>
            <Typography fontWeight='600' fontSize='26px' color='primary.dark'>Analytics</Typography>
        </Box>
    </Box>
  )
}

export default Analytics;
