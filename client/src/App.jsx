import React,{lazy} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

const Home = lazy(()=>import('./pages/Home'));
const Login = lazy(()=>import('./pages/Login'));
const Groups = lazy(()=>import('./pages/Groups'));
const Chat = lazy(()=>import('./pages/Chat'));

const App = () => {
  return<BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/groups" element={<Groups/>} />
      <Route path="/chat/:chatId" element={<Chat/>} />
    </Routes>
  </BrowserRouter>
}

export default App