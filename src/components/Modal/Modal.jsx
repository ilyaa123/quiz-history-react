import style from './Modal.module.css';
import cn from 'classnames';
import { useEffect, useRef, useState } from 'react';

export const Modal = ({ modalActive, setModalActive, text, color }) => {
    const modalOverlay = useRef()

    const [timeId, setTimeId] = useState(0)

    useEffect(() => {
        if (modalActive){
            const time = setTimeout(() => {
                setModalActive(false)
            }, 3000)
            setTimeId(time)
            console.log(timeId)
        } else {
            setTimeId((id) => id)
            clearTimeout(timeId)
        }

    }, [modalActive])

    const handleOnClick = (event) => {
        setModalActive(false)
    }
    
    return (
        <div 
        className={cn(style.QuestOverlay, {[style.QuestOverlayActive]: modalActive})}
        onClick={handleOnClick}
        >
            <div ref={modalOverlay} className={style.QuestAnswer}>
                <p className={cn(style.QuestDesc, {[style.QuestDescTrue]: color})}>{text}</p>
            </div>
        </div>
    )
}