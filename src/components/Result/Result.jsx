
import { useDispatch } from 'react-redux';
import { removeStap } from '../../redux/questSlice';
import style from './Result.module.css';

export const Result = () => {
    const dispatch = useDispatch();

    const handleOnClick = () => {
        dispatch(removeStap());
    }

    return(
        <div className={style.ResultContainer}>
            <div className={style.Result}>
                <p className={style.ResultTitle}>Спасибо за прохождение теста!</p>
                <button className={style.Button} onClick={handleOnClick}>Начать снова</button>
            </div>
        </div>
    )
}