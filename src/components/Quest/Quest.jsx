import { useDispatch } from 'react-redux'
import { setAnswers, updateStep } from '../../redux/questSlice';
import { Progres } from '../Progress/Progres';

import style from './Quest.module.css';

export const Quest = ({ quest }) => {
    const dispatch = useDispatch();

    const handleOnSubmit = (event) => {
        event.preventDefault();
        const answers = [];
        const checked = event.target.querySelectorAll('input:checked');
        checked.forEach(element => {
            answers.push(element.value)
        });
        if (answers.length !== 0){
            dispatch(setAnswers(answers));
            dispatch(updateStep());
            event.target.reset();
        }
    }

    return (
        <div className={style.QuestContainer} >
            <div className={style.Quest} >
                <Progres />
                <h3 className={style.QuestTitle}>{quest.question}</h3>
                <form className={style.QuestForm} onSubmit={handleOnSubmit}>

                    {quest.answers.map((answ, key) => (
                            <label className={style.QuestLabel} key={key}>
                            {
                                quest.type === 'radio' ? 
                                <input className={style.QuestRadio} type={quest.type} value={answ} name='1' /> :
                                <input className={style.QuestBox} type={quest.type} value={answ} name={key} />
                            }
                            <p className={style.QuestAnsw}>{answ}</p>
                        </label>
                    )) 
                    }
                    <button className={style.QuestButton} key={'sub'} type='submit'>Подтвердить</button>
                </form>
            </div>
        </div>
    )
}
