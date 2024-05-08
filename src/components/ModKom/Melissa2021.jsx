import React, { useState } from 'react';
import melissa1 from '../../assets/image/melissa1.png';
import melissa2 from '../../assets/image/melissa2.png';
import color1 from '../../assets/image/color1.png';
import color2 from '../../assets/image/color2.png';
import color3 from '../../assets/image/color3.png';
import color4 from '../../assets/image/color4.png';
import color5 from '../../assets/image/color5.png';
import color6 from '../../assets/image/color6.png';
import color7 from '../../assets/image/color7.png';
import color8 from '../../assets/image/color8.png';
import { Link } from 'react-router-dom';

function Melissa2021() {
  const [selectedPage, setSelectedPage] = useState('compositions');

  const handleCompositionClick = () => {
    setSelectedPage('compositions');
  };

  const handleModularClick = () => {
    setSelectedPage('modular');
  };

  return (
    <>
    <Link to='/melissa'>
      <div className='mr-4 ml-64'>
        <button
          className={`border border-black ${selectedPage === 'compositions' ? 'bg-blue-500' : ''} w-73 h-352 text-2xl text-white-500`}
          onClick={handleCompositionClick}
        >
          Композиции
        </button>
        <Link to='/modular'> 
          <button
            className={`border border-black ${selectedPage === 'modular' ? 'bg-blue-500' : ''} w-73 h-352 text-2xl text-white-500`}
            onClick={handleModularClick}
          >
            Модульный ряд
          </button>
        </Link>
      </div>

      <div className='grid grid-cols-3 w-1440 mt-4 h-500 ml-60'>
      <div className='w-330 h-487 border border-black-500 shadow-2xl bg-white text-center mt-4 gap-6 grid'>
        <img src={melissa1}/>
        <h1 className='text-2xl text-blue-500'>Мелисса композиция 1</h1>
        <p>в 1462    ш 360     г 352</p>
        <p>Объем: 12м3</p>
        <p>Цвет: дуб</p>
        <div className='flex gap-1'>
        <img src={color1}/>
        <img src={color2}/>
        <img src={color3}/>
        <img src={color4}/>
        <img src={color5}/>
        <img src={color6}/>
        <img src={color7}/>
        <img src={color8}/>
        </div>
        <h2 className='text-2xl'>59 658 ₽</h2>
        <button className='w-120 h-50 bg-blue-500 text-2xl'>Купить</button>
       </div>

       <div className='w-330 h-487 border border-black-500 shadow-2xl bg-white text-center mt-4 gap-6 grid'>
        <img src={melissa2}/>
        <h1 className='text-2xl text-blue-500'>Мелисса композиция 1</h1>
        <p>в 1462    ш 360     г 352</p>
        <p>Объем: 12м3</p>
        <p>Цвет: дуб</p>
        <div className='flex gap-1'>
        <img src={color1}/>
        <img src={color2}/>
        <img src={color3}/>
        <img src={color4}/>
        <img src={color5}/>
        <img src={color6}/>
        <img src={color7}/>
        <img src={color8}/>
        </div>
        <h2 className='text-2xl'>59 658 ₽</h2>
        <button className='w-120 h-50 bg-blue-500 text-2xl'>Купить</button>
       </div>

       <div className='w-330 h-487 border border-black-500 shadow-2xl bg-white text-center mt-4 gap-6 grid'>
        <img src={melissa2}/>
        <h1 className='text-2xl text-blue-500'>Мелисса композиция 1</h1>
        <p>в 1462    ш 360     г 352</p>
        <p>Объем: 12м3</p>
        <p>Цвет: дуб</p>
        <div className='flex gap-1'>
        <img src={color1}/>
        <img src={color2}/>
        <img src={color3}/>
        <img src={color4}/>
        <img src={color5}/>
        <img src={color6}/>
        <img src={color7}/>
        <img src={color8}/>
        </div>
        <h2 className='text-2xl'>59 658 ₽</h2>
        <button className='w-120 h-50 bg-blue-500 text-2xl'>Купить</button>
       </div>
      </div>


      <div className='grid grid-cols-3 w-1440 mt-4 h-500 ml-60'>
      <div className='w-330 h-487 border border-black-500 shadow-2xl bg-white text-center mt-4 gap-6 grid'>
        <img src={melissa1}/>
        <h1 className='text-2xl text-blue-500'>Мелисса композиция 1</h1>
        <p>в 1462    ш 360     г 352</p>
        <p>Объем: 12м3</p>
        <p>Цвет: дуб</p>
        <div className='flex gap-1'>
        <img src={color1}/>
        <img src={color2}/>
        <img src={color3}/>
        <img src={color4}/>
        <img src={color5}/>
        <img src={color6}/>
        <img src={color7}/>
        <img src={color8}/>
        </div>
        <h2 className='text-2xl'>59 658 ₽</h2>
        <button className='w-120 h-50 bg-blue-500 text-2xl'>Купить</button>
       </div>

       <div className='w-330 h-487 border border-black-500 shadow-2xl bg-white text-center mt-4 gap-6 grid'>
        <img src={melissa2}/>
        <h1 className='text-2xl text-blue-500'>Мелисса композиция 1</h1>
        <p>в 1462    ш 360     г 352</p>
        <p>Объем: 12м3</p>
        <p>Цвет: дуб</p>
        <div className='flex gap-1'>
        <img src={color1}/>
        <img src={color2}/>
        <img src={color3}/>
        <img src={color4}/>
        <img src={color5}/>
        <img src={color6}/>
        <img src={color7}/>
        <img src={color8}/>
        </div>
        <h2 className='text-2xl'>59 658 ₽</h2>
        <button className='w-120 h-50 bg-blue-500 text-2xl'>Купить</button>
       </div>

       <div className='w-330 h-487 border border-black-500 shadow-2xl bg-white text-center mt-4 gap-6 grid'>
        <img src={melissa2}/>
        <h1 className='text-2xl text-blue-500'>Мелисса композиция 1</h1>
        <p>в 1462    ш 360     г 352</p>
        <p>Объем: 12м3</p>
        <p>Цвет: дуб</p>
        <div className='flex gap-1'>
        <img src={color1}/>
        <img src={color2}/>
        <img src={color3}/>
        <img src={color4}/>
        <img src={color5}/>
        <img src={color6}/>
        <img src={color7}/>
        <img src={color8}/>
        </div>
        <h2 className='text-2xl'>59 658 ₽</h2>
        <button className='w-120 h-50 bg-blue-500 text-2xl'>Купить</button>
       </div>
      </div>
    </Link>


    </>
  );
}

export default Melissa2021;