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



          </Route>
        </Routes>
     
    </div>
  );
   <div className='App'>
    <Routes>
      <Route path='/' element={<Layout/>} 
      <Route  main element={<HomePage/>}  />
      <Route  main element={<HomePage/>}  />
      <Route path="/" element={<Odalar/>}/>
        <Route path="/" element={<Information/>}
      </Route>
    </Routes>
   </div>
  )

}
