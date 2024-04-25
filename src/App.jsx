import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout/Layout';
import HomePage from './Pages/HomePage';
import Catalog from './components/Catalog/Catalog';
import About from './components/About/About';
import Modeling from './components/3Dmodeling/Modeling';
import Payment from './components/Payment/Payment';
import Buyer from './components/Buyer/Buyer';
import News from './components/news/News';


export default function App() {
  return (
    <div className='App'>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<HomePage/>} />
            <Route path='/catalog'  element={<Catalog/>}/>
            <Route path='/about'  element={<About/>}/>
            <Route  path='/modeling' element={<Modeling/>}/>
            <Route  path='/payment' element={<Payment/>}/>
            <Route  path='/buyer' element={<Buyer/>}/>
            <Route  path='/news' element={<News/>}/>



          </Route>
        </Routes>
     
    </div>
  );
}
