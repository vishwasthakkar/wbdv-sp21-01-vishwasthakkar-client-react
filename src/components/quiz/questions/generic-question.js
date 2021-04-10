import React, {useState} from 'react';
import TrueFalse from "./true-false";
import MultipleChoice from "./multiple-choice";


const GenericQuestion = ({
    question
}) => {
    const [answer, setAnswer] = useState('');
    const [isCorrect, setIsCorrect] = useState(0);

    const handleAnswerChange = (e) => {
        setIsCorrect(0);
        setAnswer(e.target.value);
    };

    const checkAnswer = () => {
        answer.localeCompare(question.correct) === 0 ? setIsCorrect(1) : setIsCorrect(-1);
    };

    const handleActive = val => {
        if(isCorrect === 1){
            return val.localeCompare(question.correct) === 0 ?
                   'list-group-item-success' : '';
        }
        else if(isCorrect === -1){
            if(val.localeCompare(answer) === 0){
                return 'list-group-item-danger';
            } else if(val.localeCompare(question.correct) === 0) {
                return 'list-group-item-success'
            }
        }
    };

    const handleQuestionType = () => {
        switch (question.type) {
            case 'TRUE_FALSE':
                return (
                    <TrueFalse
                        id={question._id}
                        answer={answer}
                        handleAnswerChange={handleAnswerChange}
                        handleActive={handleActive}
                    />
                );
            case 'MULTIPLE_CHOICE':
                return(
                    <MultipleChoice
                        id={question._id}
                        answer={answer}
                        handleAnswerChange={handleAnswerChange}
                        handleActive={handleActive}
                        choices={question.choices}
                    />
                );
        }
    };

    return(
        <div>
            <h5>
                {question.question}
            </h5>

            { handleQuestionType() }

            Your Answer: {answer}
            <button type="button"
                    className="btn btn-success d-block"
                    onClick={checkAnswer}
            >
                Grade
            </button>
        </div>
    );
};

export default GenericQuestion;