import React from 'react';

const TrueFalse = ({
    id, answer, handleAnswerChange, handleActive
}) => {
    return(
        <div className='list-group'>
            <div className={`list-group-item ${handleActive('true')}`}>
                <input type='radio' name={id} value='true'
                       checked={answer === 'true'}
                       onChange={handleAnswerChange}/>
                &nbsp;
                True
            </div>
            <div className={`list-group-item ${handleActive('false')}`}>
                <input type='radio' name={id} value='false'
                       checked={answer === 'false'}
                       onChange={handleAnswerChange}/>
                &nbsp;
                False
            </div>
        </div>
    );
};

export default TrueFalse;