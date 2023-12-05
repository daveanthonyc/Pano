import { Outlet } from "react-router-dom"
import Sidebar from "../../components/Sidebar"
import { Box } from '@mui/material'

function Layout() {
  return (
    <Box>
        <Sidebar></Sidebar>
        <Outlet />
    </Box>
  )
}

export default Layout
