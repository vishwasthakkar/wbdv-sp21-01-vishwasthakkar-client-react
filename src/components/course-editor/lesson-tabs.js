import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {useParams} from 'react-router-dom'
import EditableItem from "../editable-item";
import LessonActions from "../../actions/lesson-actions";

const LessonTabs = ({
    lessons = [],
    createLesson,
    updateLesson,
    deleteLesson,
    findLessonsForModule,
                        clearLesson
}) => {
    const {courseId, moduleId, lessonId, layout} = useParams();

    useEffect(() => {
        if (moduleId !== "undefined" && typeof moduleId !== "undefined") {
            findLessonsForModule(moduleId)
        }
        return () => {
            clearLesson()
        }
    }, [moduleId]);

    return (<div>
        <ul className="nav nav-tabs">
            {
                lessons.map(lesson =>
                                <li className="nav-item" key={lesson._id}>
                                    <a className="nav-link" aria-current="page" href="#">
                                        <EditableItem
                                            active={lesson._id === lessonId}
                                            to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lesson._id}`}
                                            updateItem={updateLesson}
                                            deleteItem={deleteLesson}
                                            item={lesson}
                                            ifTextWhite={false}
                                        />
                                    </a>
                                </li>
                )
            }
            <li className="nav-item">
                <a className="nav-link" href="#" tabIndex="-1" aria-disabled="true">
                    <i onClick={() => {moduleId !== undefined ? createLesson(moduleId) : ''}} className="fas fa-lg fa-plus">
                        &nbsp;
                    </i>
                </a>
            </li>
        </ul>
    </div>);
};

const stateToPropertyMapper = (state) => {
    return{
        lessons: state.LessonReducer.lessons
    };
};

const dispatchToPropertyMapper = (dispatch) => {
    return {
        createLesson: (moduleId) => LessonActions.createLesson(dispatch, moduleId),
        updateLesson: (lesson) => LessonActions.updateLesson(dispatch, lesson),
        deleteLesson: (lesson) => LessonActions.deleteLesson(dispatch, lesson),
        findLessonsForModule: (moduleId) => LessonActions.findLessonsForModule(dispatch, moduleId),
        clearLesson: () => LessonActions.clearLesson(dispatch)
    }
};


export default connect(stateToPropertyMapper,
                       dispatchToPropertyMapper)(LessonTabs);