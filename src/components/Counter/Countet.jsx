import { useSelector } from 'react-redux';
import style from './Counter.module.css';

export const Counter = () => {
    const { step, quest } = useSelector(store => store.quest);


    return(
        <div className={style.Counter}>
            <p className={style.CounterTitle}>
                <span>{step + 1}</span>
                /
                <span>{quest.length}</span>
            </p>
        </div>
    )
}