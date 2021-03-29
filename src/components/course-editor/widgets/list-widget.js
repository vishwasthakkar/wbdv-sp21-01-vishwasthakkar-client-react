import React from 'react';

const ListWidget = ({
    widget,
    editing,
    updateCachedWidget
}) => {
    const ListType = widget.isOrdered ? 'ol' : 'ul';
    return(
        <>
            {
                editing &&
                <form>
                    <input
                        type="checkbox"
                        onChange={e => updateCachedWidget({...widget, isOrdered: e.target.checked})}
                        checked={widget.isOrdered}
                    />
                    <label>
                        &nbsp;&nbsp;Ordered
                    </label>
                    <textarea
                        value={widget.text}
                        onChange={e => updateCachedWidget({...widget, text: e.target.value})}
                        style={{display: 'block', maxWidth: '100%'}}
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