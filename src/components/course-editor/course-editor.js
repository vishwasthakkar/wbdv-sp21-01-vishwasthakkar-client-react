import React from 'react'
import {Link, useParams} from "react-router-dom";
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {combineReducers} from 'redux';

import ModuleList from "./module-list";
import LessonTabs from "./lesson-tabs";
import TopicPills from "./topic-pills";

import ModuleReducer from '../../reducers/module-reducer';
import LessonReducer from '../../reducers/lesson-reducer';
import TopicReducer from '../../reducers/topic-reducer';

const reducer = combineReducers({
    ModuleReducer: ModuleReducer,
    LessonReducer: LessonReducer,
    TopicReducer: TopicReducer
});

const store = createStore(reducer);

const CourseEditor = (props) => {
    const {courseId, moduleId, lessonId, topicId, layout} = useParams();
    return (<Provider store={store}>
        <div className="container">
            <div className="m-3">
                <h2>
                    <a href="#">
                        <i className="fa fa-arrow-left fa-lg nav-icon-margins"
                           onClick={() => props.history.goBack()}>
                            &nbsp;
                        </i>
                    </a>
                    Course Editor {courseId} {layout}
                </h2>
            </div>

            <div className="row">
                <div className="col-4">
                    <ModuleList/>
                </div>
                <div className="col-8" style={{backgroundColor: "white"}}>
                    <LessonTabs/>
                    <br/>
                    <TopicPills/>
                    <br/>
                    <h5>
                        <ul>
                            <li>
                                Course ID: {courseId}
                            </li>
                            <li>
                                Module ID: {moduleId}
                            </li>
                            <li>
                                Lesson ID: {lessonId}
                            </li>
                            <li>
                                Topic ID: {topicId}
                            </li>
                        </ul>
                    </h5>
                </div>
            </div>
        </div>
    </Provider>)
};

export default CourseEditor;