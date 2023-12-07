import { Outlet } from "react-router-dom"
import Sidebar from "../../components/Sidebar"
import { Box } from '@mui/material'
import { ReactNode } from "react"

function Layout({ children } : { children: ReactNode}) {
  return (
    <Box display={'flex'} bgcolor='primary.light'>
        <Sidebar />
        {children}
        <Outlet />
    </Box>
  )
}

export default Layout
