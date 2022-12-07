import { useDispatch } from 'react-redux'
import { setAnswersTrue, updateStep } from '../../redux/questSlice';

import { Counter } from '../Counter/Countet';


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
            let rightAnswers = 0;
            answers.forEach(ans => {
                quest.right.forEach((rig) => {
                    if (quest.answers[rig] === ans){
                        ++rightAnswers
                    }
                })
            });     
            if (rightAnswers === quest.right.length && rightAnswers === checked.length){
                dispatch(setAnswersTrue())
            }
            dispatch(updateStep())
            event.target.reset()
        }
    }

    return (
        <div className={style.QuestContainer} >
            <div className={style.Quest} >
                <Counter />
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
