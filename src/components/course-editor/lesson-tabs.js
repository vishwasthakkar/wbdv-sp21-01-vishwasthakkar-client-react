import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {useParams} from 'react-router-dom'
import EditableItem from "../editable-item";
import lessonService from "../../services/lesson-service";

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
        createLesson: (moduleId) => {
            lessonService.createLesson(moduleId, {title: 'New Lesson'})
                .then(lesson => dispatch(
                    {
                        type: "CREATE_LESSON",
                        lesson: lesson
                    }));
        },
        updateLesson: (lesson) => {
            lessonService.updateLesson(lesson._id, lesson)
                .then(status => dispatch({
                                             type: "UPDATE_LESSON",
                                             lesson: lesson
                                        }))
        },
        deleteLesson: (lesson) => {
            lessonService.deleteLesson(lesson._id)
                .then(status => dispatch({
                                             type: "DELETE_LESSON",
                                             lesson: lesson
                                        }))
        },
        findLessonsForModule: (moduleId) => {
            lessonService.findLessonsForModule(moduleId)
                .then(theLessons => dispatch({
                                                 type: "FIND_LESSONS_FOR_MODULE",
                                                 lessons: theLessons
                                             }))
        },

        clearLesson: () => dispatch({type: "CLEAR_LESSON"})


    }
};


export default connect(stateToPropertyMapper,
                       dispatchToPropertyMapper)(LessonTabs);