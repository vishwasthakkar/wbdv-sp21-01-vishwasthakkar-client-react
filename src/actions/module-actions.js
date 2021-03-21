import moduleService from "../services/module-service";

export const CREATE_MODULE = "CREATE_MODULE";
export const UPDATE_MODULE = "UPDATE_MODULE";
export const DELETE_MODULE = "DELETE_MODULE";
export const FIND_MODULES_FOR_COURSE = "FIND_MODULES_FOR_COURSE";

export const createModule = (dispatch, courseId) => {
    moduleService.createModule(courseId, {title: 'New Module'})
        .then(moduleToCreate => dispatch(
            {
                type: "CREATE_MODULE",
                moduleToCreate: moduleToCreate
            }));
};

export const updateModule = (dispatch, newModule) => {
    moduleService.updateModule(newModule._id, newModule)
        .then(status => dispatch({type: "UPDATE_MODULE", updateModule: newModule}))
};

export const deleteModule = (dispatch, moduleToDelete) => {
    moduleService.deleteModule(moduleToDelete._id)
        .then(status => dispatch({type: "DELETE_MODULE", moduleToDelete: moduleToDelete}))
};

export const findModulesForCourse = (dispatch, courseId) => {
    moduleService.findModulesForCourse(courseId)
        .then(modules => dispatch({
                                      type: "FIND_MODULES_FOR_COURSE",
                                      modules: modules
                                  }))
};

const ModuleActions = {
    createModule,
    updateModule,
    deleteModule,
    findModulesForCourse,
};

export default ModuleActions;
