import React,{useEffect,useContext} from 'react';
import './App.css';
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import {BrowserRouter , Route , Routes} from 'react-router-dom'
import Home from './Pages/Home';
import Create from './Pages/Create'
import View from './Pages/ViewPost'
import Post from './context/postContext'
import { AuthContext, FirebaseContext } from './context/firebaseContext';


function App() {
  const {setUser} = useContext(AuthContext)
  const {firebase} = useContext(FirebaseContext)
  useEffect(()=>{
    firebase.auth().onAuthStateChanged((user)=>{
      console.log(user,'from app');
      setUser(user)
    })
  })
  return (
    <Post>
      <BrowserRouter>
       <Routes>
        <Route  path='/' exact element={<Home/>}/>
          <Route  path='/signup' element={<Signup/>}/>
          <Route  path='/login' element={<Login/>}/>
          <Route  path='/create' element={<Create/>}/>
          <Route  path='/view' element={<View/>}/>
       </Routes>
      </BrowserRouter>
    </Post>
      
  );
}


export default App;
