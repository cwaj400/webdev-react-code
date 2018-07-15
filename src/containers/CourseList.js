import React from 'react';
import Course from './Course.js';
import CourseEditor from './CourseEditor';
import '../../node_modules/font-awesome/css/font-awesome.min.css';

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

        this.titleChanged = this.titleChanged.bind(this);

        this.createModule = this.createModule.bind(this);

    }

    createModule() {
        console.log(this.state.courses);
    }


    titleChanged(event) {
        this.setState({courses: {title: event.target.value}});
        console.log(event.target.value);
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
            <div>
                <form className="form-check" role="form">
                    <input className="form-control"
                           placeholder="Course Title"/>
                    <button className="btn btn-primary btn-block" onClick={this.createModule}>
                        <i className="fa fa-plus"></i></button>
                </form>
                <ul className="list-group">
                    {this.renderListOfCourses()}
                </ul>


            </div>);
    }

}

export default CourseList;