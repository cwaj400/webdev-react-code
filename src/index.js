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




class WhiteBoard extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <CourseTabs/>
                <h1>Welcome to Whiteboard!</h1>
                <CourseList/>
            </div>
        )
    }
}


ReactDOM.render(
    <WhiteBoard/>,
    document.getElementById('root')
);

