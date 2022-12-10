import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';

import style from './Progres.module.css';

import './ProgresSwiper.css';
import { setStap } from "../../redux/questSlice";
import { useEffect, useState } from "react";

export const Progres = () => {
    const { step, quest, answers } = useSelector(store => store.quest);

    const dispatch = useDispatch();

    const [swiper, setSwiper] = useState(null);

    const handleOnClick = (event) => {
        dispatch(setStap(event.target.innerText - 1))
    }

    useEffect(() => {
        if (swiper){
            swiper.slideTo(step)
        }
    }, [step])

    return(
        <div className={style.Slider}>
            <Swiper
            modules={[Navigation, A11y]}
            navigation
            spaceBetween={35}
            slidesPerView={6}
            onSwiper={setSwiper}
            className='swiperProgress'
            breakpoints={{
                300: {
                    slidesPerView: 3
                },
                610: {
                    slidesPerView: 6
                },
            }}
            >  
                {
                    quest.map((item, index) => {
                        if (index === step) {
                            return (
                                <SwiperSlide key={index}>
                                    <div onClick={handleOnClick} className={classNames(style.ProgresItem, style.ProgresItemActive, style.ProgresChecked)}>{index + 1}</div>
                                </SwiperSlide>
                            )
                        } else if (index < answers.length){
                            return (
                                <SwiperSlide key={index}>
                                    <div onClick={handleOnClick} className={classNames(style.ProgresItem, style.ProgresItemActive)}>{index + 1}</div>
                                </SwiperSlide>
                            )
                        } else {
                            return (
                                <SwiperSlide key={index}>
                                    <div className={style.ProgresItem}>{index + 1}</div>
                                </SwiperSlide>
                            )
                        }
                    })
                }
               
            </Swiper>
        </div>
    )
}