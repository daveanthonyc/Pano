import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Layout from './views/layout';
import Dashboard from './views/dashboard';
import { CssBaseline } from '@mui/material';
import Analytics from './views/analytics';
import Projects from './views/projects';
import AllIssues from './views/allissues';


function App() {

  return (
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
  )
}

export default App
