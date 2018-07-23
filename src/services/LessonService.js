let _singleton = Symbol();

export default class LessonService {

    LESSON_MODULE_COURSE_API_URL = 'http://localhost:8080/api/course/CID/module/MID';
    LESSON_MODULE_COURSE_API_URL_f = 'http://localhost:8080/api/course/CID/module/MID/lesson';
    LESSON_MODULE_COURSE_API_URL_Lesson_make = 'http://localhost:8080/api/lesson';

    LESSON_ID_API_URL = 'http://localhost:8080/api/lesson/LID';

    static get instance() {
        if (!this[_singleton])
            this[_singleton] = new LessonService(_singleton);
        return this[_singleton];
    }

    findAllLessonsForModule(courseId, moduleId) {
        return fetch(this.LESSON_MODULE_COURSE_API_URL_f
            .replace('CID', courseId).replace('MID', moduleId))
            .then(function (response) {
                return response.json();
            });
    }




    // findAllLessonsForModule(courseId, moduleId) {
    //     return fetch(
    //         LESSON_MODULE_COURSE_API_URL
    //             .replace('CID', courseId).replace('MID', moduleId))
    //         .then(function(response) {
    //             return response.json();
    //         });
    // }


    createLesson(courseId, moduleId, lesson) {
        return fetch(this.LESSON_MODULE_COURSE_API_URL_f.replace('CID', courseId)
            .replace('MID', moduleId), {
            body: JSON.stringify(lesson),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'post'
        }).then(function (response) {
            return response.json();
        });
    }

    deleteLesson(lessonId) {
        return fetch(this.LESSON_ID_API_URL.replace('LID', lessonId), {
            method: 'delete'
        });
    }

    updateLesson(lessonId, lesson) {
        return fetch(this.LESSON_ID_API_URL.replace('LID', lessonId), {
            method: 'PUT',
            body: JSON.stringify(lesson),
            headers: {
                'content-type': 'application/json'
            }
        });
    }
}