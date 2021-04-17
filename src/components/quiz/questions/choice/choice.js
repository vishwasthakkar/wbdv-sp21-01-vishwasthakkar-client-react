import React from 'react';
import './choice..style.client.css';

const Choice = ({
    choice, type, answer, handleAnswerChange, id, disabled
}) => {
    return(
        <div className={`list-group-item
                        ${type === 'correct' ? 'list-group-item-success': ''}
                        ${type === 'wrong' ? 'list-group-item-danger': ''}
                        `}>
            <input type='radio' name={id} value={choice}
                   checked={answer === choice}
                   onChange={handleAnswerChange}
                   disabled={disabled}
            />
            &nbsp;
            {choice}

            {type === 'correct' ? <i className='fas fa-check green-tick float-right'>&nbsp;</i> : ''}
            {type === 'wrong' ? <i className='fas fa-times red-cross float-right'>&nbsp;</i> : ''}

        </div>
    );
};

export default Choice