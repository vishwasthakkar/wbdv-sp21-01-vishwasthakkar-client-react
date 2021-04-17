import React from 'react';
import Choice from './choice/choice';

const MultipleChoice = ({
    id, answer, handleAnswerChange, handleActive, choices, disabled
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
                        disabled={disabled}
                    />
                )
            }
        </div>
    );
};

export default MultipleChoice;