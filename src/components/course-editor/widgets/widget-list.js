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
            <div className="row justify-content-end mb-3">
                <a href="#">
                    <i onClick={()=>createWidget(topicId)}
                       className="fas fa-plus float-right fa-2x"
                    >
                        &nbsp;
                    </i>
                </a>
            </div>


            <ul className="list-group">
                {
                    widgets.map(widget =>
                        <li key={widget.id} className="list-group-item mb-3">
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
