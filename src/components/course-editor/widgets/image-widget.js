import React from 'react';

const ImageWidget = ({
   widget,
   editing,
   updateCachedWidget
}) => {
    return (

        <>
            <img src={widget.url}
                 alt='Preview will be available here!'
                 height={widget.height}
                 width={widget.width ? widget.width : '100%'}
            />
            {
                editing &&
                <>
                    <div className="form-group">
                        <label>
                            Image URL
                        </label>
                        <input className='form-control'
                               onChange={(e) => updateCachedWidget({...widget, url: e.target.value})}
                               value={widget.url}
                        />
                    </div>
                    <div className="form-group">
                        <label>
                            Image width (capped at 600px)
                        </label>
                        <input className='form-control'
                               onChange={e => e.target.value <= 600 ?
                                              updateCachedWidget({...widget, width: e.target.value}):
                                              updateCachedWidget({...widget, width: 600})}
                               value={widget.width}
                        />
                    </div>
                    <div className="form-group">
                        <label>
                            Image height (capped at 600px)
                        </label>
                        <input className='form-control'
                               onChange={(e) => e.target.value <= 600 ?
                                                updateCachedWidget({...widget, height: e.target.value}):
                                                updateCachedWidget({...widget, height: 600})}
                               value={widget.height}/>
                    </div>
                 </>
            }

        </>
    )
};


export default ImageWidget;