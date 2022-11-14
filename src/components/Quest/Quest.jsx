import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux/es/exports';
import { updateStep } from '../../redux/questSlice';
import { Counter } from '../Counter/Countet';

import style from './Quest.module.css';

export const Quest = ({ quest, step }) => {
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

        let rightAnswers = 0;

        answers.forEach(ans => {
            quest.right.forEach((rig) => {
                if (quest.answers[rig] === ans){
                    rightAnswers++
                }
            })
        })

        if (rightAnswers === quest.right.length){
            answerRef.current.textContent = 'Правильно!';
            answerRef.current.classList.add(style.QuestDescTrue);
            modalRef.current.classList.add(style.QuestOverlayActive);
            setAnswer(true);
            event.target.querySelectorAll('input').forEach(ans => {
                ans.disabled = 'true'
            })
        } else {
            answerRef.current.textContent = 'Неправильно!';
            answerRef.current.classList.add(style.QuestDescFalse);
            modalRef.current.classList.add(style.QuestOverlayActive);
        }
        setTimeout(() => {
            modalRef.current.classList.remove(style.QuestOverlayActive);
            answerRef.current.classList.remove(style.QuestDescFalse);
            answerRef.current.classList.remove(style.QuestDescTrue);
            answerRef.current.textContent = '';
        }, 2000)
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
            <div className={style.Quest}>
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
            <div className={style.QuestOverlay} ref={modalRef}>
                <div className={style.QuestAnswer}>
                    <p className={style.QuestDesc} ref={answerRef}></p>
                </div>
            </div>
        </div>
    )
}