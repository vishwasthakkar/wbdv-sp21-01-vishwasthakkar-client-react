import React, {useState} from 'react';

const CourseHeader = (
    {addCourse}
) => {
    const [title, setTitle] = useState('');
    return(
        <>
        <div className="wbdv-sticky-top"
             style={{ backgroundColor: "cornflowerblue", padding: "10px"}}>
            <div className="row">
                <div className="col-1 ml-4">
                    <i className="fa fa-bars fa-lg">&nbsp;</i>
                </div>
                <div className="col-2 d-none d-lg-block">
                    <h4>
                        Course Manager
                    </h4>
                </div>
                <div className="col col-lg-7">
                    <input className="form-control"
                           id="courseInput"
                           onChange={event => setTitle({title: event.target.value})}
                           placeholder="New Course Title"/>
                </div>
                <div className="col-1 mr-4 ml-lg-4">
                    <button type="button"
                            className="btn btn-danger skeleton-add-button"
                            onClick={()=>addCourse(
                                {
                                    title: title.title,
                                    owner: "me",
                                    lastModified: "2/10/2021"
                                }
                            )}>
                        <i className="fa fa-plus" aria-hidden="true">&nbsp;</i>
                    </button>
                </div>
            </div>
        </div>;
        <button type="button"
                className="btn btn-danger btn-circle-float wbdv-sticky-bottom"
                onClick={()=>addCourse(
                    {
                        title: title.title,
                        owner: "me",
                        lastModified: "2/10/2021"
                    }
                )}>
            <i className="fa fa-plus" aria-hidden="true">&nbsp;</i>
        </button>
    </>
    )
};

export default CourseHeader;