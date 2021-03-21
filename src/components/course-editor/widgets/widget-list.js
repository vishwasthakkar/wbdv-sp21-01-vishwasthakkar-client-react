import React, {useEffect} from 'react'
import {useParams} from "react-router-dom"
import {connect} from "react-redux";
import HeadingWidget from "./heading-widget";
import ParagraphWidget from "./paragraph-widget";
import WidgetActions from "../../../actions/widget-actions";


const WidgetList = (
    {
        widgets=[],
        findWidgetsForTopic,
        createWidget,
        updateWidget,
        deleteWidget,
    }
) => {
    const {topicId} = useParams();

    useEffect(() => {
        findWidgetsForTopic(topicId)
    }, [topicId]);

    return(
        <div>
            <i onClick={createWidget} className="fas fa-plus float-right fa-2x">
                &nbsp;
            </i>
            <h1>Widget List</h1>
            <ul className="list-group">
                {
                    widgets.map(widget =>
                        <li key={widget.id} className="list-group-item">
                            {
                                widget.type === "HEADING" &&
                                <HeadingWidget
                                    widget={widget}
                                    updateWidget={updateWidget}
                                    deleteWidget={deleteWidget}
                                />
                            }
                            {
                                widget.type === "PARAGRAPH" &&
                                <ParagraphWidget
                                    widget={widget}
                                    updateWidget={updateWidget}
                                    deleteWidget={deleteWidget}
                                />
                            }
                        </li>
                    )
                }
            </ul>
        </div>
    )
};

const stateToPropertyMapper = (state) => ({
    widgets: state.WidgetReducer.widgets
});

const dispatchToPropertyMapper = (dispatch) => ({
    createWidget: (topicId) => WidgetActions.createWidget(dispatch, topicId),
    updateWidget: (newItem) => WidgetActions.updateWidget(dispatch, newItem),
    deleteWidget: (widgetToDelete) => WidgetActions.deleteWidget(dispatch, widgetToDelete),
    findWidgetsForTopic: (topicId) => WidgetActions.findWidgetsForTopic(dispatch, topicId),
});

export default connect(stateToPropertyMapper, dispatchToPropertyMapper)(WidgetList)
