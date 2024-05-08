import React from "react"
import catalog1 from '../../assets/image/catalog1.png';
import catalog2 from '../../assets/image/catalog2.png';
import catalog3 from '../../assets/image/catalog3.png';
import { Link } from "react-router-dom";

function Bedroom() {
  return (
    <>
    <div className='grid grid-cols-2  border border-white w-1440 h-500 ml-60'>
      <img src={catalog1}/>
      <div className='w-360 h-329 bg-white text-start mt-4 gap-7 grid'>
        <h1 className='text-2xl text-black-500'>Мелисса 2021</h1>
        <h6 className='text-2xl text-black-500'>Мини текст описания и преимущества покупки данного направления.</h6>
      <p className='text-blue-500'>Смотреть варианты композиций</p>
      </div>
      



      <div className='w-360 h-329 bg-white text-end mt-4 gap-7 grid'>
        <h1 className='text-2xl text-black-500'>Мелисса 2021</h1>
        <h6 className='text-2xl text-black-500'>Мини текст описания и преимущества покупки данного направления.</h6>
        <p className='text-blue-500'>Смотреть варианты композиций</p>
      </div>
      <img src={catalog2}/>



      <img src={catalog3}/>
      <div className='w-360 h-329 bg-white text-start mt-4 gap-7 grid'>
        <h1 className='text-2xl text-black-500'>Мелисса 2021</h1>
        <h6 className='text-2xl text-black-500'>Мини текст описания и преимущества покупки данного направления.</h6>
        <p className='text-blue-500'>Смотреть варианты композиций</p>
      </div>    
    </div>
    </>
  )
}

export default Bedroom
