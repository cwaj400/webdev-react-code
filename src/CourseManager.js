import React from 'react';
import CourseList from "./containers/CourseList";
import CourseEditor from "./containers/CourseEditor";
import {BrowserRouter as Router, Link, Route}
    from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import ModuleListItem from "./components/ModuleListItem";

class CourseManager extends React.Component {
    render() {
        return (
            <Router>
                <div className="container-fluid ml-3 mt-2">
                    <h1 className="display-3 ml-3">Welcome to Whiteboard!</h1>
                    <Link to="/whiteboard">
                        <h4>Click To Load Courses</h4></Link>
                    <Route path="/course/:courseId/edit" component={CourseEditor}/>
                    <Route path="/course/:courseId/edit/:moduleId" component={ModuleListItem}/>
                    <Route path='/whiteboard' component={CourseList}/>
                </div>
            </Router>
        )
    }
}


export default CourseManager;