let _singleton = Symbol();


//Change this url;


class CourseService {

    COURSE_API_URL = 'https://whiteboard-server-java.herokuapp.com/';

    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Cannot instantiate directly.');
    }

    createCourse(course) {
        return fetch(this.COURSE_API_URL, {
            body: JSON.stringify(course),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        }).then(function (response) {
            return response.json();
        })
    }


    static get instance() {
        if (!this[_singleton])
            this[_singleton] = new CourseService(_singleton);
        return this[_singleton]
    }

    findAllCourses() {
        return fetch(this.COURSE_API_URL)
            .then(function (response) {
                return response.json();
            });
    }

    deleteCourse(courseId) {
        return fetch(this.COURSE_API_URL + '/' + courseId,
            {
                method: 'DELETE'
            }).then(function (response) {
            return response;
        })
    }


}

export default CourseService;
