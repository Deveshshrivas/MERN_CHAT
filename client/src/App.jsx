import React,{lazy} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

const Home = lazy(()=>import('./pages/Home'));
const Login = lazy(()=>import('./pages/Login'));

const App = () => {
  return<BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login/>} />
    </Routes>
  </BrowserRouter>
}

export default App