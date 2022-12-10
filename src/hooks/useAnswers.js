import { useEffect, useState } from "react"


export const useAnswers = (answers, quest) => {
    const [trueAnswers, setTrueAnswers] = useState(0);

    useEffect(() => {
        
        answers.forEach((answer, key) => {
            let right = 0
            answer.forEach(ans => {
                quest[key].right.forEach(r => {
                    if (ans === quest[key].answers[r]){
                        right++
                    } 
                })
            })
            if (right === quest[key].right.length){
                setTrueAnswers(prev => prev += 1)
            }
        });

    }, [])
    
    return trueAnswers
}