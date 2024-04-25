import React from 'react';
import newsImgOne from '../../assets/image/newsImgOne.png'
import newsImgThree from './../../assets/image/newsImgThree.png'
import newsImgTwo from './../../assets/image/newsImgTwo.png/'

const News = () => {
    return (
        <div>
            <h3 className={' sm:text-yellow-500 md:text-blue-800 lg:text-red-700 lg:text-black-500  lg:pl-11 lg: pt-10'}> Главная >> <span className={'font-bold'}>Новости</span></h3>
            <img className={'sm:w-[90%] sm:pl-10 sm:pt-5  lg:w-full md:w-10/12 '} src={newsImgOne} alt="img"/>
            <div className={'text-black font-bold pl-11 pt-3.5  pb-5'}>ЗАГОЛОВОК НОВОСТИ</div>
            <p className={'md:w-[90%] w-full pl-11 text-slate-950 sm:text-center'}>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam
                rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
                explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
                dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora
                incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
                exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem
                vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum
                qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>
            <p className={'text-gray-600 pl-11 pt-3.5'}>Дата публикации: 23.11.21</p>
            <img className={'w-full pt-3.5 pb-3.5 pl-11 pr-11'} src={newsImgThree} alt="img"/>
            <div className={'text-black-900 pl-11 pt-3.5  pb-5 font-bold'}>ЗАГОЛОВОК НОВОСТИ</div>
            <p className={'w-full pl-11 text-slate-950'}>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam
                rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
                explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
                dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora
                incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
                exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem
                vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum
                qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>
            <p className={'text-gray-600 pl-11 pt-3.5'}>Дата публикации: 23.11.21</p>
            <img className={'w-full pt-3.5 pb-3.5 pl-11 pr-11'} src={newsImgTwo} alt="img"/>
            <div className={'text-black-900 pl-11 pt-3.5  pb-5 font-bold'}>ЗАГОЛОВОК НОВОСТИ</div>
            <p className={'w-full pl-11 text-slate-950'}>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam
                rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
                explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
                dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora
                incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
                exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem
                vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum
                qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>
            <p className={'text-gray-600 pl-11 pt-3.5 pb-10'}>Дата публикации: 23.11.21</p>
            <div className={'border border-gray-400 border-solid border-1 rounded-lg'}></div>
            <p className={'font-bold text-center pt-16 '}>ПОКАЗАТЬ ЕЩЕ НОВОСТИ</p>
            <div className={'border border-gray-400 border-solid border-1 rounded-lg mt-10'}></div>

        </div>
    );
};

export default News;