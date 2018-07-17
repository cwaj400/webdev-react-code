let _singleton = Symbol();
const COURSE_API_URL =
    'https://young-stream-19352.herokuapp.com/';
//Change this url;

class CourseService {
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Cannot instantiate directly.');
    }

    static get instance() {
        if (!this[_singleton])
            this[_singleton] = new CourseService(_singleton);
        return this[_singleton]
    }


    //TODO: change
    findAllCourses() {
        return fetch(COURSE_API_URL)
            .then(function(response){
                return response.json();
            });
    }

}

export default CourseService;
