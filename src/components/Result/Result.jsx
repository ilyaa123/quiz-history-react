import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { removeStap } from '../../redux/questSlice';
import style from './Result.module.css';

export const Result = () => {
    const { answersTrue, quest, user } = useSelector(store => store.quest)
    console.log('answersTrue: ', answersTrue);

    const dispatch = useDispatch();

    const handleOnClick = () => {
        dispatch(removeStap());
    }

    return(
        <div className={style.ResultContainer}>
            <div className={style.Result}>
                <p className={style.ResultUser}>{user}</p>
                <p className={style.ResultValue}>Ваш результат: <br />
                    <p className={style.ResultRound}>
                        <span className={style.ResultTrue}>{answersTrue }</span>/
                        <span className={style.ResultLen}>{ quest.length}</span>
                    </p>
                </p>
                <Link className={style.ResultBtn} to="/result">Поделиться</Link>
                <button className={style.Button} onClick={handleOnClick}>Начать снова</button>
            </div>
        </div>
    )
}