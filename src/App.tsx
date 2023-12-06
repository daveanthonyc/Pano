import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Layout from './views/layout';
import Dashboard from './views/dashboard';
import { CssBaseline, ThemeProvider } from '@mui/material';
import Analytics from './views/analytics';
import Projects from './views/projects';
import AllIssues from './views/allissues';
import { Provider, useSelector } from 'react-redux';
import { useMemo } from 'react';
import { createTheme } from '@mui/material';
import { muiFormatColorPalette } from './theme';

function App() {
    const theme = useSelector((state: any) => state.theme);
    const muiTheme = useMemo(() => {
        return createTheme(muiFormatColorPalette(theme)
    )}, [theme])
  return (
    <ThemeProvider theme={muiTheme}>
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path='/' element={<Navigate to='/dashboard' replace/>} />
                    <Route path='/dashboard' element={<Dashboard />}/>
                    <Route path='/analytics' element={<Analytics />}/>
                    <Route path='/projects' element={<Projects />}/>
                    <Route path='/all-issues' element={<AllIssues />}/>
                </Route>
            </Routes>
            <CssBaseline />
        </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
