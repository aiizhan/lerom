import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout/Layout';
import HomePage from './Pages/HomePage';
import Catalog from './components/Catalog/Catalog';
import About from './components/About/About';
import Modeling from './components/3Dmodeling/Modeling';
import Payment from './components/Payment/Payment';
import Buyer from './components/Buyer/Buyer';
import News from './components/news/News';
import BedroomPage from './Pages/BedroomPage'
import Melissa2021 from './components/ModKom/Melissa2021';
import Modular from './components/ModKom/Modular'
import Melissa from './components/Melissa/Melissa';

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
            <Route path='/bedroom' element={<BedroomPage/>}/>
            <Route path='/melissa2021' element={<Melissa2021/>}/>
            <Route path='/modular' element={<Modular/>}/>
            <Route path='/melissa' element={<Melissa/>}/>
          </Route>
        </Routes>
     
    </div>
  );
}
