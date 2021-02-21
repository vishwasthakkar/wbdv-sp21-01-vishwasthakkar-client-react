function CourseService() {
    this.createCourse = createCourse;
    this.findAllCourses = findAllCourses;
    this.deleteCourse = deleteCourse;
    this.updateCourse = updateCourse;
    // this.findUserById = findUserById;

    this.url = 'https://wbdv-generic-server.herokuapp.com/api/001380619/courses';
    var self = this;

    function createCourse(course) {
        return fetch(self.url, {
            method: 'POST',
            body: JSON.stringify(course),
            headers: {
                'content-type': 'application/json'
            }
        }).then(function(response){
            return response.json()
        })
    }

    function findAllCourses() {
        return fetch(self.url)
            .then(function (response) {
                return response.json();
            })
    }

    function deleteCourse(courseId, course) {
        return fetch(`${self.url}/${courseId}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(course)
        }).then(response => response.json())
    }

    function updateCourse(courseId) {
        return fetch(`${self.url}/${courseId}`,
                     {method: 'DELETE'})
    }

    //     function findUserById(userId) { … }
}
