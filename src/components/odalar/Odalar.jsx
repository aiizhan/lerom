import w from '../../assets/image/img.png';
import e from "../../assets/image/img_4.png";
import r from "../../assets/image/img_1.png";
import t from "../../assets/image/img_3.png"
import y from "../../assets/image/img_2.png"
import u from "../../assets/image/img_6.png"
import  p from "../../assets/image/Rectangle 10.png"
import Information from "../information/Information.jsx";


export default function Odalar(){
    return(
        <>
            <div className='m-auto flex'>
                <div className="flex">
                    <div>
                        <img className="w-[360px] h-[321px]" src={w} alt="img"/>
                    </div>
                    <div className="pl-[30px] pr-[42px]">
                        <h3 className="text-[24px] pt-[7px] uppercase">Гостиные</h3>
                        <p className="text-[16px] pt-[18px]">Мини текст описания и преимущества <br/>
                            покупки данного направления.</p>
                        <p className="text-[16px] pt-[18px] text-[#4A8CF7]">Товары под заказ в наличии: 2030шт</p>
                        <p className="pt-[18px]">Цены от: 42.000р</p>
                        <div className='w-[50px] h-[50px] border border-blue-500 border-solid rounded-full flex justify-center items-center'>
                            <img className="w-[16px] h-[16px]" src={e} alt="img"/>
                        </div>
                    </div>
                </div>
                <div className="flex">
                    <div>
                        <img className="w-[360px] h-[321px]" src={r} alt="img"/>
                    </div>
                    <div className="pl-[30px] pr-[42px]">
                        <h3 className="text-[24px] pt-[7px] uppercase">Спальни</h3>
                        <p className="text-[16px] pt-[18px]">Мини текст описания и преимущества <br/>
                            покупки данного направления.</p>
                        <p className="text-[16px] pt-[18px] text-[#4A8CF7]">Товары под заказ в наличии: 2030шт</p>
                        <p className="pt-[18px]">Цены от: 42.000р</p>
                        <div className='w-[50px] h-[50px] border border-blue-500 border-solid rounded-full flex justify-center items-center'>
                            <img className="w-[16px] h-[16px]" src={e} alt="img"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="m-auto flex">
                <div className="flex">
                    <div className="pl-[30px] pr-[42px]">
                        <h3 className="text-[24px] pt-[7px] uppercase">Детские</h3>
                        <p className="text-[16px] pt-[18px]">Мини текст описания и преимущества <br/>
                            покупки данного направления.</p>
                        <p className="text-[16px] pt-[18px] text-[#4A8CF7]">Товары под заказ в наличии: 2030шт</p>
                        <p className="pt-[18px]">Цены от: 42.000р</p>
                        <div className='w-[50px] h-[50px] border border-blue-500 border-solid rounded-full flex justify-center items-center'>
                            <img className="w-[16px] h-[16px]" src={u} alt="img"/>
                        </div>
                    </div>
                    <div>
                        <img className="w-[360px] h-[321px]" src={t} alt="img"/>
                    </div>
                </div>
                <div className="flex">
                    <div className="pl-[30px] pr-[42px]">
                        <h3 className="text-[24px] pt-[7px] uppercase">Прихожие</h3>
                        <p className="text-[16px] pt-[18px]">Мини текст описания и преимущества <br/>
                            покупки данного направления.</p>
                        <p className="text-[16px] pt-[18px] text-[#4A8CF7]">Товары под заказ в наличии: 2030шт</p>
                        <p className="pt-[18px]">Цены от: 42.000р</p>
                        <div className='w-[50px] h-[50px] border border-blue-500 border-solid rounded-full flex justify-center items-center'>
                            <img className="w-[16px] h-[16px]" src={u} alt="img"/>
                        </div>

                    </div>
                    <div>
                        <img className="w-[360px] h-[321px]" src={y} alt="img"/>
                    </div>
                </div>
            </div>
            <div className="flex m-auto">
                <div>
                    <img className="w-[900px] h-[321px]" src={p} alt=""/>
                </div>
                <div className="pl-[30px] pr-[42px]">
                    <h3 className="text-[24px] pt-[7px] uppercase">Прихожие</h3>
                    <p className="text-[16px] pt-[18px]">Мини текст описания и преимущества <br/>
                        покупки данного направления.</p>
                    <p className="text-[16px] pt-[18px] text-[#4A8CF7]">Товары под заказ в наличии: 2030шт</p>
                    <p className="pt-[18px]">Цены от: 42.000р</p>
                    <div className='w-[50px] h-[50px] border border-blue-500 border-solid rounded-full flex justify-center items-center'>
                        <img className="w-[16px] h-[16px]" src={u} alt="img"/>
                    </div>
                </div>
            </div>
    
        </>
    )
}