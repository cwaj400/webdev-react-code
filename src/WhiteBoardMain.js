import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import CourseTabs from "./containers/courses/CourseTabs";
import CourseList from './containers/courses/CourseList';
import CourseEditor from './containers/courses/CourseEditor';
import {BrowserRouter as Router, Link, Route}
    from 'react-router-dom';

export default class WhiteBoardMain extends React.Component {
    render() {
        return (
            <Router>
                <div className="container-fluid">
                    <h1>Welcome to Whiteboard!</h1>
                    <CourseTabs/>
                    <Route path="/course/:courseId/edit" component={CourseEditor}/>
                    <CourseList/>
                </div>
            </Router>
        )
    }
}


