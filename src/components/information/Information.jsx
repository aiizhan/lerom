import s from "../../assets/image/img_8.png";
import s2 from '../../assets/image/s2.png';
import aerrow1 from '../../assets/svg/aerrow1.svg';
import s3 from '../../assets/image/s3.png';
import s4 from '../../assets/image/s4.png'
import aerrow2 from '../../assets/svg/aerrow2.svg'

export default function Information() {
    return (
        <>
            <div className="flex justify-center space-x-60 mt-10">
                <h2 className="text-2xl">Информация</h2>
                <h2 className="text-2xl">Интересное</h2>
            </div>

            <div className="grid grid-cols-4 border border-white w-1440 h-500">
                <img src={s} alt="Изображение 1" />
                <div className="w-360 h-329 bg-white text-center mt-4 gap-7 grid">
                    <h1 className="text-2xl">Доставка по всей России</h1>
                    <h6>Мини текст описания новости и ее актуальности</h6>
                    <img src={aerrow1}  />
                </div>

                <img src={s2} alt="Изображение 2" />
                <div className="w-360 h-329 bg-white text-center mt-4 gap-7 grid">
                    <h1 className="text-2xl">Как выбрать матрас</h1>
                    <h6>Мини текст описания новости и ее актуальности</h6>
                    <img src={aerrow1} />
                </div>
            </div>

            <div className="grid grid-cols-4 border border-white w-1440 h-500">
                <div className="w-360 h-329 bg-white text-center mt-4 grid">
                    <h1 className="text-2xl text-red">Бесплатная</h1>
                    <h1 className="text-2xl text-black">сборка</h1>
                    <h6>Мини текст описания новости и ее актуальности</h6>
                    <img src={aerrow2} />
                </div>
                <img src={s3} alt="Изображение 3" />
                <div className="w-360 h-329 bg-white text-center mt-4 grid">
                    <h1 className="text-2xl">Какой шкаф выбрать в 2022 году</h1>
                    <h6>Мини текст описания новости и ее актуальности</h6>
                    <img src={aerrow2}  />
                </div>
                <img src={s4}/>
            </div>

            <div className="flex justify-center space-x-60 mt-10 ">
                <h1 className="text-2xl">показать еще новости</h1>
                <h1 className="text-2xl text-red-500">открыть раздел новости</h1>
            </div>
        </>
    );
}