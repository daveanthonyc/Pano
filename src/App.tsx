import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './views/layout';


function App() {

  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Layout />}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
