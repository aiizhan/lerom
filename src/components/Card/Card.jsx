import cardImgOne from '../../assets/image/cardImgOne.svg'
import colorOne from '../../assets/image/colorOne.svg'
import colorThree from '../../assets/image/colorThree.svg'
import colorImgFour from '../../assets/image/colorImgFour.svg'
import colorImgFive from '../../assets/image/colorImgFive.svg'
import colorSix from '../../assets/image/colorSix.svg'
import colorSeven from '../../assets/image/colorSeven.svg'
import colorEight from '../../assets/image/colorEight.svg'
import colorNein from '../../assets/image/colorNein.svg'
import { RxCross1 } from "react-icons/rx";
import { IoMdArrowDropup } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";



const Card = () => {
    return (
        <div>
            <div className={'pl-10 pr-10 pt-8 pb-8'}>
                <h2 className={'text-black font-extrabold pl-12'}>КОРЗИНА</h2>
                <div className={'flex justify-around items-start pt-10 '}>
                    <div className={'flex justify-between items-center'}>
                        <div className={'flex gap-3.5'}>
                            <img src={cardImgOne} alt="img"/>
                            <div>
                                <h4 className={'text-sm pt-2 pb-2 text-[#071828] font-bold'}>Модуль ZXC346-3</h4>
                                <h5 className={'text-[#071828]'}>Pазмер: <span
                                    className={'font-bold'}>в 1462 ш 360 г 352</span></h5>
                                <button className={'bg-slate-300  py-[7px] px-[31px] mt-8 flex text-center justify-center gap-1 text-[#656D75]'} > <RxCross1  className={'text-xs mt-1.5'}/>Удалить</button>
                            </div>
                        </div>
                    </div>
                    <div className={''}>
                        <p className={'text-[#071828] '} >Цвет: <span className={'font-bold'}>дуб</span></p>
                        <div className={'flex gap-1 pt-2'}>
                            <img src={colorOne} alt="img"/>
                            <img src={colorThree} alt="img"/>
                            <img src={colorThree} alt="img"/>
                            <img src={colorImgFour} alt="img"/>
                            <img src={colorImgFive} alt="img"/>
                            <img src={colorSix} alt="img"/>
                            <img src={colorSeven} alt="img"/>
                            <img src={colorEight} alt="img"/>
                            <img src={colorNein} alt="img"/>
                        </div>
                    </div>
                    <div>
                        <div className={'flex gap-5'}>
                            <div>
                                <h3 className={'text-[#656D75] font-medium '}>59 658 ₽ </h3>
                                <p className={'font-light text-[#656D75]'}>цена за 1 шт</p>
                            </div>
                            <div className={'flex-col-reverse'}>
                                <button className={'px-10 py-3 text-[#071828] border-2 border-gray-700 rounded-sm'}> <IoMdArrowDropdown className={''} />   2  <IoMdArrowDropup /> </button>
                            </div>
                            <p className={'text-[#071828] text-xl font-bold pt-3'}>120 658 ₽ </p>
                        </div>
                    </div>
                </div>
                <div className={'flex justify-around items-start pt-10 '}>
                    <div className={'flex justify-between items-center'}>
                        <div className={'flex gap-3.5'}>
                            <img src={cardImgOne} alt="img"/>
                            <div>
                                <h4 className={'text-sm pt-2 pb-2 text-[#071828] font-bold'}>Модуль ZXC346-3</h4>
                                <h5 className={'text-[#071828]'}>Pазмер: <span
                                    className={'font-bold'}>в 1462 ш 360 г 352</span></h5>
                                <button className={'bg-slate-300  py-[7px] px-[31px] mt-8 flex text-center justify-center gap-1 text-[#656D75]'} > <RxCross1  className={'text-xs mt-1.5'}/>Удалить</button>
                            </div>
                        </div>
                    </div>
                    <div className={''}>
                        <p className={'text-[#071828] '} >Цвет: <span className={'font-bold'}>дуб</span></p>
                        <div className={'flex gap-1 pt-2'}>
                            <img src={colorOne} alt="img"/>
                            <img src={colorThree} alt="img"/>
                            <img src={colorThree} alt="img"/>
                            <img src={colorImgFour} alt="img"/>
                            <img src={colorImgFive} alt="img"/>
                            <img src={colorSix} alt="img"/>
                            <img src={colorSeven} alt="img"/>
                            <img src={colorEight} alt="img"/>
                            <img src={colorNein} alt="img"/>
                        </div>
                    </div>
                    <div>
                        <div className={'flex gap-5'}>
                            <div>
                                <h3 className={'text-[#656D75] font-medium '}>59 658 ₽ </h3>
                                <p className={'font-light text-[#656D75]'}>цена за 1 шт</p>
                            </div>
                            <div className={'flex-col-reverse'}>
                                <button className={'px-10 py-3 text-[#071828] border-2 border-gray-700 rounded-sm'}> <IoMdArrowDropdown className={''} />   2  <IoMdArrowDropup /> </button>
                            </div>
                            <p className={'text-[#071828] text-xl font-bold pt-3'}>120 658 ₽ </p>
                        </div>
                    </div>
                </div>
                <div className={'flex justify-around items-start pt-10 '}>
                    <div className={'flex justify-between items-center'}>
                        <div className={'flex gap-3.5'}>
                            <img src={cardImgOne} alt="img"/>
                            <div>
                                <h4 className={'text-sm pt-2 pb-2 text-[#071828] font-bold'}>Модуль ZXC346-3</h4>
                                <h5 className={'text-[#071828]'}>Pазмер: <span
                                    className={'font-bold'}>в 1462 ш 360 г 352</span></h5>
                                <button className={'bg-slate-300  py-[7px] px-[31px] mt-8 flex text-center justify-center gap-1 text-[#656D75]'} > <RxCross1  className={'text-xs mt-1.5'}/>Удалить</button>
                            </div>
                        </div>
                    </div>
                    <div className={''}>
                        <p className={'text-[#071828] '} >Цвет: <span className={'font-bold'}>дуб</span></p>
                        <div className={'flex gap-1 pt-2'}>
                            <img src={colorOne} alt="img"/>
                            <img src={colorThree} alt="img"/>
                            <img src={colorThree} alt="img"/>
                            <img src={colorImgFour} alt="img"/>
                            <img src={colorImgFive} alt="img"/>
                            <img src={colorSix} alt="img"/>
                            <img src={colorSeven} alt="img"/>
                            <img src={colorEight} alt="img"/>
                            <img src={colorNein} alt="img"/>
                        </div>
                    </div>
                    <div>
                        <div className={'flex gap-5'}>
                            <div>
                                <h3 className={'text-[#656D75] font-medium '}>59 658 ₽ </h3>
                                <p className={'font-light text-[#656D75]'}>цена за 1 шт</p>
                            </div>
                            <div className={'flex-col-reverse'}>
                                <button className={'px-10 py-3 text-[#071828] border-2 border-gray-700 rounded-sm'}> <IoMdArrowDropdown className={''} />   2  <IoMdArrowDropup /> </button>
                            </div>
                            <p className={'text-[#071828] text-xl font-bold pt-3'}>120 658 ₽ </p>
                        </div>
                    </div>
                </div>



                <div className={'text-end pt-10'}>
                    <p className={'pb-2 text-[#656D75] font-bold'}>Итого: <span className={'text-black font-bold'}>434 658 ₽ </span></p>
                    <button className={'bg-[#004583] py-[15px] px-[71px] rounded-b-sm text-[white]'}>Оформить заказ</button>
                </div>
            </div>


        </div>
    );
};

export default Card;