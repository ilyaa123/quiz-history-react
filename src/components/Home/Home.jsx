import { useSelector, useDispatch } from 'react-redux';
import { Quest } from '../Quest/Quest';
import style  from './Home.module.css';
import { updateStep } from '../../redux/questSlice';
import { Result } from '../Result/Result';

export const Home = () => {
    const { step, quest } = useSelector(store => store.quest);

    const dispatch = useDispatch();

    
    return(
        step === -1 ?
        <div className={style.HomeContainer} >
            <div className={style.Home}>
                <h2 className={style.HomeTitle}>Тест по Истории</h2>
                <button className={style.HomeButton} onClick={() => dispatch(updateStep())}>Начать</button>
            </div>
        </div>
        : step < quest.length ?
            <Quest  quest={quest[step]} step={step}/>
        :
            <Result />
        
    )
}