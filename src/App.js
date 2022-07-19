import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Login from './pages/Login';
import Main from './pages/Main';
import Regist from './pages/Regist';

function App() {
  let user = useState({
    name : ''
  })

  return (
    <div>
      <Nav/>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/regist' element={<Regist/>}/>
      </Routes>
    </div>
  )
}


export default App;
