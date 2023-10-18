import React from 'react';
import './App.css';
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import {BrowserRouter , Route , Routes} from 'react-router-dom'
import Home from './Pages/Home';


function App() {
  return (
      <BrowserRouter>
       <Routes>
        <Route  path='/' exact element={<Home/>}/>
          <Route  path='/signup' element={<Signup/>}/>
          <Route  path='/login' element={<Login/>}/>
       </Routes>
      </BrowserRouter>
  );
}


export default App;
