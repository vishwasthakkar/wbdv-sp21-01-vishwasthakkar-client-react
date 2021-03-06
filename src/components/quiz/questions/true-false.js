import React from 'react';
import Choice from './choice/choice';

const TrueFalse = ({
    id, answer, handleAnswerChange, handleActive, disabled
}) => {
    return(
        <div className='list-group'>
            <Choice
                id={id}
                choice={'true'}
                handleAnswerChange={handleAnswerChange}
                answer={answer}
                type={handleActive('true')}
            />
            <Choice
                id={id}
                choice={'false'}
                handleAnswerChange={handleAnswerChange}
                answer={answer}
                type={handleActive('false')}
                disabled={disabled}
            />
        </div>
    );
};

export default TrueFalse;