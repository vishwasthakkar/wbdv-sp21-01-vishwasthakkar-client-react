import React from 'react';

const ListWidget = ({
    widget,
    editing,
    updateCachedWidget
}) => {
    const ListType = widget.listType === 'ul' ? 'ul' : 'ol';
    const handleCheckBoxChange = () => {
        const type = widget.listType === 'ul' ? 'ol' : 'ul';
        updateCachedWidget({...widget, listType: type});
    };
    return(
        <>
            {
                editing &&
                <form>
                    <input
                        type="checkbox"
                        onChange={handleCheckBoxChange}
                        checked={widget.listType === 'ol'}
                    />
                    <label>
                        &nbsp;&nbsp;Ordered
                    </label>
                    <label style={{display: 'flex'}}>
                        List items
                    </label>
                    <textarea
                        value={widget.text}
                        onChange={e => updateCachedWidget({...widget, text: e.target.value})}
                        style={{display: 'block', maxWidth: '100%'}}
                        placeholder="Enter one list item per line"
                        cols={100}
                        rows={5}
                    >
                    </textarea>
                </form>
            }

            {
                !editing &&
                <>
                    <ListType>
                        {
                            widget.text.split('\n').map(line =>
                                <li>
                                    {line}
                                </li>
                            )
                        }
                    </ListType>
                </>
            }
        </>
    );
};

export default ListWidget;