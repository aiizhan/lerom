import React from 'react';
import uplogo from '../../assets/image/logo.png';
import logo from '../../assets/svg/footerLogo.svg';
import digital from '../../assets/image/Demos.png';
import image from '../../assets/image/image 1.png'
import image2 from '../../assets/image/image 2.png'

function Footer() {
  return (
    <div className='container mx-auto'>
      <div className='bg-gray-100 border border-black mt-12 py-6'>
        <div className='flex justify-between'>
          <div className='w-1/4'>
            <h6 className='text-gray-500'>© ООО "Мебельная компания "Лером" 2021</h6>
          </div>
          <div className='w-1/4'>
            <img src={uplogo} alt='UpLogo' />
          </div>
          <div className='w-1/4 flex items-center'>
            <h6 className='text-gray-500 mr-2'>Сайт разработан -</h6>
            <div className='flex items-center'>
              <img src={digital} alt='Digital' />
              <div className='ml-2'>
                <img src={logo} alt='Logo' />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-gray-200 border border-black mt-4 py-6'>
        <div className='flex justify-between'>
          <div className='w-3/4'>
            <div className='flex gap-4'>
              <div>
                <h5 className='font-bold '>О компании</h5>
                <h6>Производство</h6>
                <h6>Награды</h6>
                <h6>Сертификаты</h6>
              </div>
              <div>
                <h5 className='font-bold'>Покупателю</h5>
                   <h6>Как сделать заказ</h6>
                    <h6>Рекомендации по сборке</h6>
                    <h6>Договор публичной оферты </h6> 
              </div>
              <div>
                <h5 className='font-bold'>Полезная информация </h5>
                     <h6> Всё о фасадах</h6>
                      <h6>Всё о фурнитуре</h6>
                      <h6>Всё о ЛДСП</h6>
              </div>
              <div>
                <h5 className='font-bold'>3D-моделирование</h5>
                <h6>Запустить онлайн,
                   от 2 Мбит/с</h6>
                <h6>Скачать на компьютер,
                   606 Мб</h6>
              </div>
              <div className='font-bold'>
              <h4 className='text-blue-500'>Рассрочка</h4>
                <h4 className='text-blue-500'>Гарантия</h4>
                <h4 className='text-blue-500'>Контакты</h4>
              </div>
            </div>
          </div>
          <div className='w-1/4 flex items-center justify-end border border-black'>
            <img src={image}/>
            <img src={image2}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
