import React from 'react';
import {connect} from "react-redux";
import EditableItem from "../editable-item";

const LessonTabs = ({lessons=[]}) =>
    <div>
        <h2>
            Lessons {lessons.length}
        </h2>
        <ul className="nav nav-tabs">
            {
                lessons.map(lesson =>
                    <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="#">
                            <EditableItem item={lesson}/>
                        </a>
                    </li>
                )
            }
            {/*<li className="nav-item">*/}
                {/*<a className="nav-link" aria-current="page" href="#">Build</a>*/}
            {/*</li>*/}
            {/*<li className="nav-item">*/}
                {/*<a className="nav-link active" href="#">Pages</a>*/}
            {/*</li>*/}
            {/*<li className="nav-item">*/}
                {/*<a className="nav-link" href="#">Theme</a>*/}
            {/*</li>*/}
            {/*<li className="nav-item">*/}
                {/*<a className="nav-link" href="#">Apps</a>*/}
            {/*</li>*/}
            {/*<li className="nav-item">*/}
                {/*<a className="nav-link" href="#">Settings</a>*/}
            {/*</li>*/}
            <li className="nav-item">
                <a className="nav-link" href="#" tabIndex="-1" aria-disabled="true">
                    <i className="fas fa-lg fa-plus">
                        &nbsp;
                    </i>
                </a>
            </li>
        </ul>
    </div>;


const stateToPropertyMapper = (state) => {
    return{
        lessons: state.LessonReducer.lessons
    };
};

const dispatchToPropertyMapper = (dispatch) => {

};


export default connect(stateToPropertyMapper,
                       dispatchToPropertyMapper)(LessonTabs);