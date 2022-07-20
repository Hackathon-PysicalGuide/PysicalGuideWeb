import { Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Main from './pages/Main';
import Regist from './pages/Regist';
import InNav from './components/InNav';
import { useEffect, useState } from 'react';
import Show from './pages/Show';
import axios from 'axios';
import Ip from './CommonIp';
import Write from './pages/Write';


function App() {

  const Loginchk = () => {
    return !!localStorage.getItem('username')
  };

  let [arr, setArr] = useState([]);


  useEffect(() => {
      const fetchData = () => {
          const get = axios.get(
              Ip+'/manual/'
          ).then((response) => {
              setArr([])
              setArr(response.data.list)
          });
      }
      Loginchk()
      fetchData();
  },[]);

  return (
    <div>
      {Loginchk() ? <InNav/> : <Nav/>}
      <Routes>
        <Route exact path='/' element={<Main/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/regist' element={<Regist/>}/>
        <Route path='/logout' element={<Logout/>}/>
        <Route path='/category/:idx' element={<Show title={arr.title} content={arr.content} category={arr.category}/>}/>
      </Routes>

    </div>
  )
}



export default App;
