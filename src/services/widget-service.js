 const TOPICS_URL = "https://cs5610-sp21-vishwasthakkar.herokuapp.com/api/topics";
 const WIDGETS_URL = "https://cs5610-sp21-vishwasthakkar.herokuapp.com/api/widgets";

export const createWidgetForTopic = (topicId, widget) =>
    fetch(`${TOPICS_URL}/${topicId}/widgets`, {
        method: "POST",
        body: JSON.stringify({type: "HEADING", size: 1, text: "New Widget"}),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json());

export const deleteWidget = (widgetId) =>
    fetch(`${WIDGETS_URL}/${widgetId}`, {
        method: "DELETE"
    })
        .then(response => response.json());

export const updateWidget = (widgetId, widget) =>
    fetch(`${WIDGETS_URL}/${widgetId}`, {
        method: "PUT",
        body: JSON.stringify(widget),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json());

export const findWidgetsForTopic = (topicId) =>
    fetch(`${TOPICS_URL}/${topicId}/widgets`)
        .then(response => response.json());


export default {
    findWidgetsForTopic,
    createWidgetForTopic,
    updateWidget,
    deleteWidget,
}