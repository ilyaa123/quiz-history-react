

export const setAnswers = (rightAnswers, quest, answerRef, modalRef, setAnswer, style, event) => {
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
        if (event.target.querySelectorAll('input:checked')[0].type === 'radio'){
            event.target.querySelectorAll('input:checked').forEach(ans => {
                ans.disabled = 'true'
            })
        }
        event.target.reset();
    }
   
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