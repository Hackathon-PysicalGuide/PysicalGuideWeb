import { Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Main from './pages/Main';
import Regist from './pages/Regist';
import InNav from './components/InNav';
import { useEffect } from 'react';

function App() {

  const Loginchk = () => {
    return !!localStorage.getItem('username')
  };


  useEffect(() => {Loginchk()},[]);

  return (
    <div>
      {Loginchk() ? <InNav/> : <Nav/>}
      <Routes>
        <Route exact path='/' element={<Main/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/regist' element={<Regist/>}/>
        <Route path='/logout' element={<Logout/>}/>
      </Routes>
    </div>
  )
}



export default App;
