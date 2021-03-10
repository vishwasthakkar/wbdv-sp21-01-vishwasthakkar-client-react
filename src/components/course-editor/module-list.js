import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {connect} from "react-redux";
import EditableItem from "../editable-item";
import moduleService from "../../services/module-service"

const ModuleList = ({
    modules = [],
    createModule,
    deleteModule,
    updateModule,
    findModulesForCourse
}) =>{
    const {layout, moduleId, courseId} = useParams();
    useEffect(() => {
        findModulesForCourse(courseId)
    }, []);
    return (<div>
        <h2>Module List {modules.length}</h2>
        <ul className="list-group">
            {
                modules.map(module => {
                    return (
                        <li className={`list-group-item ${module._id === moduleId ? 'active' : ''}`}>
                            <EditableItem item = {module}
                                          deleteItem={deleteModule}
                                          updateItem={updateModule}
                                          to={`/courses/${layout}/edit/${courseId}/modules/${module._id}`}
                                          active={module._id === moduleId}
                                          ifTextWhite={true}
                            />
                        </li>
                    )
                })
            }
            <li  onClick={()=>createModule(courseId)} className="list-group-item text-center">
                <i className="fas fa-plus fa-lg">
                    &nbsp;
                </i>
            </li>
        </ul>
    </div>);
};


const stateToPropertyMapper = (state) => {
    return{
        modules: state.ModuleReducer.modules
    };
};

const dispatchToPropertyMapper = (dispatch) => {
    return {
        createModule: (courseId) => {
            moduleService.createModule(courseId, {title: 'New Module'})
                .then(moduleToCreate => dispatch(
                    {
                        type: "CREATE_MODULE",
                        moduleToCreate: moduleToCreate
                    }));
        },
        updateModule: (newModule) => {
                moduleService.updateModule(newModule._id, newModule)
                    .then(status => dispatch({type: "UPDATE_MODULE", updateModule: newModule}))
            },
        deleteModule: (moduleToDelete) => {
            moduleService.deleteModule(moduleToDelete._id)
                .then(status => dispatch({type: "DELETE_MODULE", moduleToDelete: moduleToDelete}))
        },
        findModulesForCourse: (courseId) => {
            moduleService.findModulesForCourse(courseId)
                .then(modules => dispatch({
                                              type: "FIND_MODULES_FOR_COURSE",
                                              modules: modules
                                          }))
        }

    }
};


export default connect(stateToPropertyMapper,
                       dispatchToPropertyMapper)(ModuleList);