import s from "../../assets/image/img_8.png"
import f from "../../assets/image/img_12.png"
import News from "../news/News.jsx";
import Card from "../Card/Card.jsx";
export  default  function Information(){
    return(
        <>
        <div className='m-auto'>
            <div className="flex uppercase text-[18px]">
                <h3>Информация</h3>
                <h3>Интересное</h3>
            </div>
            <div className="flex">
                <div>
                    <img className="w-[360px] h-[229px]" src={s} alt=""/>
                </div>
                <div>
                    <h3 className="text-[18px] uppercase">Доставка по всей России</h3>
                    <p className="text-[16px]">Мини текст описания новости
                        и ее актуальности</p>
                    <div className='w-[50px] h-[50px] border border-red-400 border-solid rounded-full flex justify-center items-center'>
                        <img className="col-[#EE574D] w-[16px] h-[16px]" src={f} alt=""/>
                    </div>
                </div>
            </div>
        </div>
       <News/>
        <Card/>
        </>
    )
}