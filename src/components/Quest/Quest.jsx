import { useState } from 'react';
import { useDispatch } from 'react-redux/es/exports';

import { updateStep } from '../../redux/questSlice';
import { Counter } from '../Counter/Countet';
import { Modal } from '../Modal/Modal';

import style from './Quest.module.css';

export const Quest = ({ quest }) => {

    const [answerTrue, setAnswer] = useState(false);
    const [modalActive, setModalActive] = useState(false);
    const [text, setText] = useState('');
    const [color, setColor] = useState(false);

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
            if (rightAnswers === quest.right.length){
                setText('Правильный ответ!');
                document.querySelectorAll('input').forEach((elem) => {
                    elem.disabled = true;
                });
                setColor(true);
                setAnswer(true);
            } else {
                setColor(false);
                setText('Неправильный ответ!');
                checked.forEach(check => {
                    if (check.type === 'radio') check.disabled = true;
                })
            }
        } else {
            setText('Выберите вариант ответа');
        }
        setModalActive(true);
    }

    const handleOnClick = (event) => {
        dispatch(updateStep());
        setAnswer(!answerTrue)
        event.target.parentElement.reset();
        document.querySelectorAll('input').forEach(ans => {
            ans.disabled = ''
        })
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
                        ))}
                    {
                        answerTrue ? 
                        <button className={style.QuestButton} key={'but'} onClick={handleOnClick} type='button'>Продолжить</button> :
                        <button className={style.QuestButton} key={'sub'} type='submit'>Подтвердить</button>
                    }
                </form>
            </div>
            {<Modal modalActive={modalActive} setModalActive={setModalActive} text={text} color={color} /> }
        </div>
    )
}