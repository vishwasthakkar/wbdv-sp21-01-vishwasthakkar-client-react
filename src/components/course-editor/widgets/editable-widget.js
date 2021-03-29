import React, {useState} from 'react';
import HeadingWidget from "./heading-widget";
import ParagraphWidget from "./paragraph-widget";
import ListWidget from './list-widget'

const EditableWidget = ({
     widget,
     updateWidget,
     deleteWidget
}) => {
    const [editing, setEditing] = useState(false);
    const [cache, setCache] = useState(widget);

    const renderWidget = widget => {
        switch (widget.type) {
            case "HEADING":
                return(
                    <HeadingWidget
                        updateCachedWidget={setCache}
                        widget={cache}
                        editing={editing}
                    />
                );
            case "PARAGRAPH":
                return(
                    <ParagraphWidget
                        updateCachedWidget={setCache}
                        widget={cache}
                        editing={editing}
                    />
                );
            case "LIST":
                return(
                    <ListWidget
                        updateCachedWidget={setCache}
                        widget={cache}
                        editing={editing}
                    />
                );
            case "IMAGE":
                return(1);
        }
    };

    return(
        <div>
            {
                editing &&
                <div className="row">
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
                            <option value={"LIST"}>List</option>
                            <option value={"IMAGE"}>Image</option>
                        </select>

                        {renderWidget(widget)}

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
                <div className="row">
                    <div className="col-10">
                        {renderWidget(widget)}
                    </div>
                    <div className="col-2">
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

export default EditableWidget;