import React from 'react'

import logo from '../../assets/image/logo (2).png'
import time from '../../assets/svg/Vector (8).svg'
import compas from '../../assets/svg/Vector (9).svg'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className=' '>
      <div className='flex  justify-center  items-center  border-b border-gray-100 pb-5  '>


        <div className=''>
          <div className=''>
            <div className='flex'>

              <img src={time} alt="" />
              <h4> Пн-Пт с 10:00 до 20:00
              </h4>

            </div>
            <h4 className='text-end'>
              Сб-Вс с 10:00 до 19:00
            </h4>
          </div>
          <div className='flex  '>
            <img src={compas} alt="" />
            <h4 >Наши салоны</h4>
          </div>
        </div>
        <div className='logo1'>
          <img src={logo} alt="" />
        </div>
        <div className='contact'>
          <div >
            <h2>Отдел продаж:8 (495) 664-54-57</h2>
            <h2 className='text-end'>8 (929) 928-86-35</h2>

          </div>
          <div>
            <h2>Звонки по Росии:8-800-000-00-00</h2>
            <h2 className='text-red-500 text-end' >Бесплатно</h2>
          </div>
        </div>
      </div>
      <div className= ' flex mt-4  '>
        <Link>Каталог</Link>
        <Link>О нас</Link>
        <Link>3D-моделирование</Link>
        <Link>Покупателю</Link>
        <Link>Доставка и оплата</Link>
        <input class="w-330 h-9  box-border border border-blue-700 rounded-full" type="text" placeholder="Поиск по сайту..." />


      </div>
    </div>
  )
}

export default Header