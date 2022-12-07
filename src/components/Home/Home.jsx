import { useSelector, useDispatch } from 'react-redux';
import { Quest } from '../Quest/Quest';
import style  from './Home.module.css';
import { setUser, shaffleQuest, updateStep } from '../../redux/questSlice';
import { Result } from '../Result/Result';
import { useEffect, useState } from 'react';

export const Home = () => {
    const { step, quest, user } = useSelector(store => store.quest);
    const [text, setText] = useState(user)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(shaffleQuest())
    }, [dispatch])

    const handleOnClick = () => {
        dispatch(setUser(text))
        dispatch(updateStep())
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    return(
        step === -1 ?
        <div className={style.HomeContainer} >
            <div className={style.Home}>
                <h2 className={style.HomeTitle}>Тест по Истории</h2>
                <input 
                className={style.HomeInput} 
                type="text" 
                placeholder='Введите имя и фамилию' 
                value={text} 
                onChange={handleOnChange}
                />
                <button className={style.HomeButton} onClick={handleOnClick}>Начать</button>
            </div>
        </div>
        : step < quest.length ?
            <Quest  quest={quest[step]} step={step}/>
        :
            <Result />
        
    )
}