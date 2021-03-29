import React from 'react';

const ParagraphWidget = ({
     updateCachedWidget,
     widget,
     editing
}) => {

    return (
        <>
            {
                editing &&
                    <textarea
                        onChange={(e) => updateCachedWidget({...widget, text: e.target.value})}
                        value={widget.text}
                        className="form-control">
                    </textarea>
            }

            {
                !editing &&
                    <p>
                        {widget.text}
                    </p>
            }
        </>
    )
};

export default ParagraphWidget