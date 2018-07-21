let _singleton = Symbol();

class ModuleService {

    MODULE_API_URL = 'http://localhost:8080/api/course/CID/module';
    MODULE_API_URL_ID = 'http://localhost:8080/api/module/MID';


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
            return response;
        })
    }

    deleteModule(moduleId) {
        return fetch(this.MODULE_API_URL_ID.replace('MID', moduleId), {
            method: 'delete'
        })
    }


    findAllModulesForCourse(courseId) {
        return fetch(
            this.MODULE_API_URL.replace('CID', courseId))
            .then(function (response) {
                return response.json();
            })
    }

    updateModule(moduleId, module) {
        return fetch(this.MODULE_API_URL_ID.replace('MID', moduleId), {
            method: 'PUT',
            body: JSON.stringify(module),
            headers: {
                'content-type': 'application/json'
            }
        });
    }


}

export default ModuleService;