import logo from './logo.svg';
import './App.css';
import Search from './components/Search';
import Add from './components/Add';
import View from './components/View';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Add/>} />  
    <Route path='/search' element={<Search/>} />  
    <Route path='/View' element={<View/>} />  
    </Routes></BrowserRouter>
  );
}

export default App;
