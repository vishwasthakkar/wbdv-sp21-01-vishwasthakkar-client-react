import React, {useState} from 'react';

const ParagraphWidget = ({
     widget,
     updateWidget,
     deleteWidget
}) => {
    const [editing, setEditing] = useState(false);
    const [cache, setCache] = useState(widget);
    return (
        <div>
            {
                editing &&
                <>
                    <select
                        onChange={
                            (e) => setCache({...cache, type: e.target.value})
                        }
                        value={cache.type}
                        className="form-control"
                    >
                        <option value={"HEADING"}>Heading</option>
                        <option value={"PARAGRAPH"}>Paragraph</option>
                    </select>

                    <textarea
                        onChange={(e) => setCache({...cache, text: e.target.value})}
                        value={cache.text}
                        className="form-control">
                    </textarea>
                    <i onClick={() => {
                        setEditing(false);
                        updateWidget(cache)}
                    }
                       className="fas fa-check float-right"
                    >
                        &nbsp;
                    </i>
                    <i onClick={() => {
                        setEditing(false);
                        deleteWidget(widget)}
                    }
                       className="fas fa-times float-right">
                        &nbsp;
                    </i>
                </>
            }

            {
                !editing &&
                <>
                    <p>
                        {cache.text}
                    </p>
                    <i onClick={() => setEditing(true)}
                       className="fas fa-cog float-right">
                        &nbsp;
                    </i>
                </>
            }
        </div>
    )
}

export default ParagraphWidget