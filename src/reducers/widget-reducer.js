const initialState = {
    widgets: []
};

const WidgetReducer = (state=initialState, action) => {
    switch (action.type) {

        case "CREATE_WIDGET":
            return {
                widgets: [
                    ...state.widgets,
                    action.widget
                ]
            };

        case "DELETE_WIDGET":
            return {
                widgets: state.widgets.filter(widget => {
                    if(widget.id === action.widget.id) {
                        return false
                    } else {
                        return true
                    }
                })
            };

        case "UPDATE_WIDGET":
            return {
                widgets: state.widgets.map(widget => {
                    if(widget.id === action.widget.id) {
                        return action.widget
                    } else {
                        return widget
                    }
                })
            };

        case "FIND_WIDGETS_FOR_TOPIC":
            return {
                ...state,
                widgets: action.widgets
            };

        default:
            return state
    }
};

export default WidgetReducer;