import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { removeStap } from '../../redux/questSlice';
import style from './Result.module.css';
import { useAnswers } from '../../hooks/useAnswers';

export const Result = () => {
    const { answers, quest, user } = useSelector(store => store.quest)

    const dispatch = useDispatch();

    const trueAnswers = useAnswers(answers, quest)

    const handleOnClick = () => {
        dispatch(removeStap());
    }

    return(
        <div className={style.ResultContainer}>
            <div className={style.Result}>
                <p className={style.ResultUser}>{user}</p>
                <p className={style.ResultValue}>Ваш результат: <br />
                    <p className={style.ResultRound}>
                        <span className={style.ResultTrue}>{trueAnswers}</span>/
                        <span className={style.ResultLen}>{ quest.length}</span>
                    </p>
                </p>
                <Link className={style.ResultBtn} to="/result">Поделиться</Link>
                <button className={style.Button} onClick={handleOnClick}>Начать снова</button>
            </div>
        </div>
    )
}