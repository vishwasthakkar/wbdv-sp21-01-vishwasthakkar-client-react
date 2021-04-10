import React from 'react';

const MultipleChoice = ({
    id, answer, handleAnswerChange, handleActive, choices
}) => {
    return(
        <div className='list-group'>
            {
                choices.map(choice =>
                    <div className={`list-group-item ${handleActive(choice)}`}>
                        <input type='radio' name={id} value={choice}
                               checked={answer === choice}
                               onChange={handleAnswerChange}/>
                        &nbsp;
                        {choice}
                    </div>
                )
            }
        </div>
    );
};

export default MultipleChoice;