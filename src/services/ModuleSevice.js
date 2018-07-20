let _singleton = Symbol();

class ModuleService {

    MODULE_API_URL =
        'http://localhost:8080/api/course/CID/module';


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
        return fetch(this.MODULE_API_URL.replace('MID', moduleId), {
            method: 'delete'
        })
    }


    findAllModulesForCourse(courseId) {
        return fetch(
            this.MODULE_API_URL.replace('CID', courseId))
            .then(function (response) {
                //console.log(response.json());
                return response.json();
            })
    }


}

export default ModuleService;