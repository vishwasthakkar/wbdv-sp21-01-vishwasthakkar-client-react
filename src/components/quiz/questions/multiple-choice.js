import React from 'react';
import Choice from './choice/choice';

const MultipleChoice = ({
    id, answer, handleAnswerChange, handleActive, choices
}) => {
    return(
        <div className='list-group'>
            {
                choices.map(choice =>
                    <Choice
                        id={id}
                        choice={choice}
                        handleAnswerChange={handleAnswerChange}
                        answer={answer}
                        type={handleActive(choice)}
                    />
                )
            }
        </div>
    );
};

export default MultipleChoice;