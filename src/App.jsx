
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout/Layout'
import HomePage from './Pages/HomePage'
import Odalar from "./components/odalar/Odalar.jsx";


export default function App() {
  return (
   <div className='App'>
    <Routes>
      <Route path='/' element={<Layout/>} >
      <Route  main element={<HomePage/>}  />
      <Route path="/" element={<Odalar/>}/>

      </Route>
    </Routes>
   </div>
  )
}
