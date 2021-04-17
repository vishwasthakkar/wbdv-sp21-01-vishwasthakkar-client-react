import React, {useState} from 'react';
import TrueFalse from "./true-false";
import MultipleChoice from "./multiple-choice";
import './choice/choice..style.client.css';

const GenericQuestion = ({
    question, setQuestions, questions
}) => {
    const [answer, setAnswer] = useState('');
    const [isCorrect, setIsCorrect] = useState(0);

    const handleAnswerChange = (e) => {
        setIsCorrect(0);
        setAnswer(e.target.value);

        const index = questions.findIndex((q => q._id === question._id));
        questions[index].answer = e.target.value;

        setQuestions([...questions]);
    };

    const checkAnswer = () => {
        answer.localeCompare(question.correct) === 0 ? setIsCorrect(1) : setIsCorrect(-1);
    };

    const handleActive = val => {
        if(isCorrect === 1){
            return val.localeCompare(question.correct) === 0 ?
                   'correct' : '';
        }
        else if(isCorrect === -1){
            if(val.localeCompare(answer) === 0){
                return 'wrong';
            } else if(val.localeCompare(question.correct) === 0) {
                return 'correct'
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
                        disabled={isCorrect !== 0}
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
                        disabled={isCorrect !== 0}
                    />
                );
        }
    };

    return(
        <div>
            <h5>
                {question.question}
                &nbsp;
                {isCorrect === 1 ? <i className='fas fa-check green-tick'>&nbsp;</i> : ''}
                {isCorrect === -1 ? <i className='fas fa-times red-cross'>&nbsp;</i> : ''}
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