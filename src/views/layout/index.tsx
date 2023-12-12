import { Outlet } from "react-router-dom"
import Sidebar from "../../components/Sidebar"
import { Box } from '@mui/material'
import { ReactNode, useEffect } from "react"
import { useGetUserByNameQuery } from "src/services/issue"
import { useParams } from "react-router-dom"
import { useDispatch } from "react-redux"
import { setUser } from "src/state/userSlice"

function Layout({ children } : { children?: ReactNode}) {
    const params = useParams();
    const { data, isLoading } = useGetUserByNameQuery(params.id);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!isLoading) {
            dispatch(setUser(data.user))
        }
    }, [data, isLoading, dispatch])

  return (
    <Box display={'flex'} bgcolor='primary.light' height={'100%'}>
        <Sidebar />
        {children}
        <Outlet />
    </Box>
  )
}

export default Layout
