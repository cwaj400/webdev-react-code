import React from 'react';
import Course from './Course.js';
import CourseEditor from './CourseEditor';

class CourseListItem extends React.Component {

    render() {
        return (
            <div className="container-fluid">
                <li className="list-group-item">
                    {this.props.title}
                </li>
            </div>
        );
    }
}

class CourseList extends React.Component {
    constructor() {
        super();

        this.state = {
            courses: [
                {title: 'Course 1 - whatever', id: 1},
                {title: 'Course 2 - MySQL', id: 2},
                {title: 'Course 3 - MongoDB', id: 3},
                {title: 'Course 4 - React', id: 4},
                {title: 'Course 5 - JavaScript', id: 5},

            ]
        };
    }

    renderListOfCourses() {
        let listOfCourses = this.state.courses
            .map(function (tempcourse) {
                return <CourseListItem
                    title={tempcourse.title} key={tempcourse.id}/>
            });

        return listOfCourses;
    }

    render() {
        return (
            <ul className="list-group">
                {this.renderListOfCourses()}
            </ul>
        );
    }
}

export default CourseList;