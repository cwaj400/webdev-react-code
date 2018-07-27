import React from 'react';
import CourseList from "./containers/CourseList";
import CourseEditor from "./containers/CourseEditor";
import {BrowserRouter as Router, Link, Route}
    from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import ModuleListItem from "./components/ModuleListItem";
import ModuleEditor from "./containers/ModuleEditor";
import WidgetListComponent from './containers/widgets/WidgetListComponent'
import {WidgetReducer} from "./reducers/WidgetReducer.js";
import WidgetListContainer from "./containers/widgets/WidgetListContainer";
import {createStore} from 'redux';
import {Provider} from 'react-redux'

class CourseManager extends React.Component {
    render() {
        return (
            <Provider store={store}>
            <Router>
                <div className="container-fluid">
                    <h1 className="display">Welcome to Whiteboard!</h1>
                    <Link to="/whiteboard">
                        Click To Load Courses|</Link>
                    <Link to="/widgets">|Click to Load WidgetsWidgets</Link>
                    <Route path='/widgets' component={WidgetListContainer}/>
                    <Route path="/course/:courseId/edit" component={CourseEditor}/>
                    <Route path="/course/:courseId/edit/:moduleId" component={ModuleListItem}/>
                    <Route path='/whiteboard' component={CourseList}/>
                </div>
            </Router>
            </Provider>
        )
    }
}

let store = createStore(WidgetReducer);

export default CourseManager;