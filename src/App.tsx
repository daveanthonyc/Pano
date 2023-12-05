import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Layout from './views/layout';
import Dashboard from './views/dashboard';
import { CssBaseline } from '@mui/material';


function App() {

  return (
    <BrowserRouter>
        <Routes>
            <Route element={<Layout />}>
                <Route path='/' element={<Navigate to='/dashboard' replace/>} />
                <Route path='/dashboard' element={<Dashboard />}/>
                <Route path='/analytics' element={<Dashboard />}/>
                <Route path='/projects' element={<Dashboard />}/>
                <Route path='/all-issues' element={<Dashboard />}/>
            </Route>
        </Routes>
        <CssBaseline />
    </BrowserRouter>
  )
}

export default App
