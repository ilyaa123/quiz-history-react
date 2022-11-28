

export const setErrors = (answerRef, modalRef, style) => {
    
    answerRef.current.textContent = 'Выберите вариант ответа';
    answerRef.current.classList.add(style.QuestDescFalse);
    modalRef.current.classList.add(style.QuestOverlayActive);
        

    if (modalRef.current.classList.contains(style.QuestOverlayActive)){
        setTimeout(() => {
            modalRef.current.classList.remove(style.QuestOverlayActive);
            answerRef.current.classList.remove(style.QuestDescFalse);
            answerRef.current.classList.remove(style.QuestDescTrue);
            setTimeout(() => {
                answerRef.current.textContent = '';
            }, 370)
        }, 1000);
    }
}