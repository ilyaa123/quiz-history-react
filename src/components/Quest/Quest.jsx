import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux/es/exports';
import { setAnswers } from '../../hooks/setAnswers';
import { setErrors } from '../../hooks/setErrors';
import { updateStep } from '../../redux/questSlice';
import { Counter } from '../Counter/Countet';

import style from './Quest.module.css';

export const Quest = ({ quest }) => {
    const answerRef = useRef();
    const modalRef = useRef();

    const [answerTrue, setAnswer] = useState(false);

    const dispatch = useDispatch();


    const handleOnSubmit = (event) => {
        event.preventDefault();


        const answers = []; 
        
        event.target.querySelectorAll('input:checked').forEach(element => {
            answers.push(element.value)
        });

        if (answers.length !== 0){
            let rightAnswers = 0;

            answers.forEach(ans => {
                quest.right.forEach((rig) => {
                    if (quest.answers[rig] === ans){
                        rightAnswers++
                    }
                })
            })
            setAnswers(rightAnswers, quest, answerRef, modalRef, setAnswer, style, event)
        } else {
            setErrors(answerRef, modalRef, style)
        }
    }

    const handleOnClick = (event) => {
        dispatch(updateStep());
        setAnswer(!answerTrue)
        event.target.parentElement.reset();
        document.querySelectorAll('input').forEach(ans => {
            ans.disabled = ''
        })
    }

    const closeOnClick = (event) => {
        if (event.target === modalRef.current){
            modalRef.current.classList.remove(style.QuestOverlayActive);
            answerRef.current.classList.remove(style.QuestDescFalse);
            answerRef.current.classList.remove(style.QuestDescTrue);
            setTimeout(() => {
                answerRef.current.textContent = '';
            }, 370)
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
                        ))}
                    {
                        answerTrue ? 
                        <button className={style.QuestButton} key={'but'} onClick={handleOnClick} type='button'>Продолжить</button> :
                        <button className={style.QuestButton} key={'sub'} type='submit'>Подтвердить</button>
                    }
                </form>
            </div>
            <div className={style.QuestOverlay} ref={modalRef} onClick={closeOnClick}>
                <div className={style.QuestAnswer}>
                    <p className={style.QuestDesc} ref={answerRef}></p>
                </div>
            </div>
        </div>
    )
}