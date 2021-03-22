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
                <div className='row'>
                    <div className='col-10'>
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
                        {
                            cache.type === "HEADING" && <select
                                onChange={
                                    (e) => setCache({...cache, size: parseInt(e.target.value)})
                                }
                                value={cache.size}
                                className="form-control"
                            >
                                <option value={1}>Heading 1</option>
                                <option value={2}>Heading 2</option>
                                <option value={3}>Heading 3</option>
                                <option value={4}>Heading 4</option>
                                <option value={5}>Heading 5</option>
                                <option value={6}>Heading 6</option>
                            </select>
                        }
                    </div>

                    <div className='col-2'>
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
                    </div>
                </div>
            }

            {
                !editing &&
                <div className='row'>
                    <div className='col-10'>
                        <p>
                            {cache.text}
                        </p>
                    </div>
                    <div className='col-2'>
                        <i onClick={() => setEditing(true)}
                           className="fas fa-cog float-right">
                            &nbsp;
                        </i>
                    </div>
                </div>
            }
        </div>
    )
};

export default ParagraphWidget