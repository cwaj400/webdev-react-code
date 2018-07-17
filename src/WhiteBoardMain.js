import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './hello.js'
import CourseManager from './containers/CourseManager.js';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './containers/CourseList';
import CourseList from './containers/CourseList';
import Course from "./containers/Course";
import TopForm from "./containers/TopForm";
import CourseTabs from "./containers/CourseTabs";

import {BrowserRouter as Router}
    from 'react-router-dom';
export default class WhiteBoard extends React.Component {
    render() {
        return (
            <Router>
                <div className="container-fluid">
                    <CourseTabs/>
                    <h1>Welcome to Whiteboard!</h1>
                        <Route path="/course"
                               component={CourseList}>
                        </Route>
                    <Route path="/course/:courseId/edit"
                           component={CourseEditor}>
                    </Route>
                    <CourseList/>
                </div>
            </Router>
        )
    }
}