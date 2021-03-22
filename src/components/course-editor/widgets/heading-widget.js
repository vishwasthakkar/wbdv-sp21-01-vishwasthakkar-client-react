import React, {useState} from 'react'

const HeadingWidget = ({
   widget,
   updateWidget,
   deleteWidget
}) => {

    const [editing, setEditing] = useState(false);
    const [cache, setCache] = useState(widget);

    return (
        <div>
            { !editing &&
                <div className='row'>
                    <div className="col">
                        {widget.size === 1 && <h1>{widget.text}</h1>}
                        {widget.size === 2 && <h2>{widget.text}</h2>}
                        {widget.size === 3 && <h3>{widget.text}</h3>}
                        {widget.size === 4 && <h4>{widget.text}</h4>}
                        {widget.size === 5 && <h5>{widget.text}</h5>}
                        {widget.size === 6 && <h6>{widget.text}</h6>}
                    </div>
                    <div className="col-2">
                        <span><i onClick={() => setEditing(true)} className="fas fa-cog float-right">
                        &nbsp;
                    </i></span>
                    </div>
                </div>
            }

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

                        <input
                            onChange={
                                (e) => setCache({...cache, text: e.target.value})
                            }
                            value={cache.text}
                            className="form-control"
                        />
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
                            updateWidget(cache);
                        }
                        }
                           className="fas fa-check float-right">
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
        </div>
    )
};
export default HeadingWidget