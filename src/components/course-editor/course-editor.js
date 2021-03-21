import React, {useEffect, useState} from 'react'
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
import WidgetReducer from '../../reducers/widget-reducer';

const reducer = combineReducers({
    ModuleReducer: ModuleReducer,
    LessonReducer: LessonReducer,
    TopicReducer: TopicReducer,
    WidgetReducer: WidgetReducer
});

import courseService from '../../services/course-service';
import WidgetList from "./widgets/widget-list";

const store = createStore(reducer);

const CourseEditor = (props) => {
    const {courseId, moduleId, lessonId, topicId, layout} = useParams();

    const [currentCourse, setCurrentCourse] = useState("")

    useEffect(() => {
        courseService.findCourseById(courseId).then(data => setCurrentCourse(data.title))
    }, []);

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
                    {currentCourse}
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
                    <WidgetList/>
                </div>
            </div>
        </div>
    </Provider>)
};

export default CourseEditor;