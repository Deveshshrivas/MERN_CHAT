import React,{lazy} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

const Home = lazy(
  ()=>import('./pages/Home')
)

const App = () => {
  return<BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<h1>About</h1>} />
    </Routes>
  </BrowserRouter>
}

export default App