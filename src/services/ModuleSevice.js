let _singleton = Symbol();

class ModuleService {

    MODULE_API_URL =
        'http://localhost:8080/api/module/MODULE_ID';


    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Singleton!!!');
    }

    static get instance() {
        if (!this[_singleton])
            this[_singleton] = new ModuleService(_singleton);
        return this[_singleton]
    }

    createModule(courseId, module) {
        return fetch(this.MODULE_API_URL.replace('CID', courseId),
            {
                body: JSON.stringify(module),
                headers: {'Content-Type': 'application/json'},
                method: 'POST'
            }).then(function (response) {
            return response.json();
        })
    }

    deleteModule(moduleId) {
        return fetch(this.MODULE_API_URL.replace
        ('MODULE_ID', moduleId), {
            method: 'delete'
        })
    }


    findAllModulesForCourse(courseId) {
        return fetch(
            this.MODULE_API_URL
                .replace('COURSE_ID', courseId))
            .then(function (response) {
                return response.json();
            })
    }


}

export default ModuleService;