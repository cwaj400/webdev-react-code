let _singleton = Symbol();


class CourseService {
    COURSE_API_URL = "https://course-manager-backend18.herokuapp.com/api/course";

    // COURSE_API_URL = "http://localhost:3000/api/course";



    findCourseById(courseId) {
        return fetch(this.COURSE_API_URL + '/' + courseId)
            .then(function (response) {
                return response.json();
            });
    }

    deleteCourse(courseId) {
        return fetch(this.COURSE_API_URL + '/' + courseId, {
            method: 'delete'
        })
            .then(function (response) {
                return response;
            });
    }

    createCourse(course) {
        return fetch(this.COURSE_API_URL, {
            method: 'post',
            body: JSON.stringify(course),
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(function (response) {
                return response.json();
            });
    }


    updateCourse(courseId, course) {
        return fetch(this.COURSE_API_URL + '/' + courseId, {
            method: 'put',
            body: JSON.stringify(course),
            headers: {
                'content-type': 'application/json'
            }
        });
    }

    findAllCourses() {
        return fetch(this.COURSE_API_URL, {method: 'get'})
            .then(function (response) {
                return response.json();
            });
    }

    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Cannot instantiate directly.');
    }


    static get instance() {
        if (!this[_singleton])
            this[_singleton] = new CourseService(_singleton);
        return this[_singleton]
    }
}

export default CourseService;