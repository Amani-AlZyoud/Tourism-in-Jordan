import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home/Home'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route element={<Home/>} path="/"></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
