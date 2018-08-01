let _singleton = Symbol();

// const WIDGET_ID_API_URL = 'http://localhost:8080/api/widget/WID';

const WIDGET_ID_API_URL = 'https://course-manager-backend18.herokuapp.com/api/widget/WID';



export default class WidgetService {
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Singleton!!!');
    }
    static get instance() {
        if (!this[_singleton])
            this[_singleton] = new WidgetService(_singleton);
        return this[_singleton];
    }
}