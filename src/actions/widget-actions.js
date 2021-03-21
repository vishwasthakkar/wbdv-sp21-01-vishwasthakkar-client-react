import widgetService from "../services/widget-service";

export const CREATE_WIDGET = "CREATE_WIDGET";
export const UPDATE_WIDGET = "UPDATE_WIDGET";
export const DELETE_WIDGET = "DELETE_WIDGET";
export const FIND_WIDGETS_FOR_TOPIC = "FIND_WIDGETS_FOR_TOPIC";

export const createWidget = (dispatch, topicId) => {
    widgetService.createWidgetForTopic(topicId,
                                       {
                                           name: 'New Widget',
                                           type:"HEADING",
                                           size:1,
                                           text:'New Widget'
                                       })
        .then(widget => dispatch({type: CREATE_WIDGET, widget: widget}))
};

export const updateWidget = (dispatch, widget) => {
    widgetService.updateWidget(widget.id, widget)
        .then(status => dispatch({type: UPDATE_WIDGET, widget: widget}))
};

export const deleteWidget = (dispatch, widget) => {
    widgetService.deleteWidget(widget.id)
        .then(status => dispatch({type: DELETE_WIDGET, widget: widget}))
};

export const findWidgetsForTopic = (dispatch, topicId) => {
    widgetService.findWidgetsForTopic(topicId)
        .then(widgets => dispatch({
                                      type: FIND_WIDGETS_FOR_TOPIC,
                                      widgets: widgets
                                  }))
};
const WidgetActions = {
    createWidget,
    updateWidget,
    deleteWidget,
    findWidgetsForTopic
};

export default WidgetActions
