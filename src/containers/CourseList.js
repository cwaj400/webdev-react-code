import React from 'react';
import Course from './Course.js';
import CourseEditor from './CourseEditor';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import CourseService from '../services/CourseService';
import CourseRow from './CourseRow';

// import {BrowserRouter as Router}
//     from 'react-router-dom';


const ModuleListItemStateless =
    ({title}) =>
        <div>
            <li className="list-group-item">
                {title} (Stateless)
            </li>
        </div>;


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

        this.courseService = CourseService.instance;
        this.state = {courses: []};


        //state stays with instance of component whole time.
        //we may want to change the state, add module, remove module, so we change state.
        //state changes change the DOM. It will do a DOM. Look at difference.
        //Keeps track of virtual DOM (Document Object Model). No need to render entire page.
        // Single page applications = only need to manipulate single snippets of the DOM. Optimize.
        this.state = {
            title: 'courir',
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

    componentDidMount() {
        this.courseService.findAllCourses()
            .then(courses => {
                this.setState({courses: courses});
            });
    }


    createModule = () => {
        console.log(this.state.courses);
        var course = {title: this.state.title};
        this.state.courses.push(course);
        //this.setState({})
        this.setState({"courses": this.state.courses});
    };


    titleChanged(event) {
        console.log(event.target.value);
        this.setState({title: event.target.value});
    }

    renderListOfCourses() {
        return this.state.courses
            .map((tempcourse, i) =>  //argument. function mapped to something =>. Second argument is index.
                <CourseListItem
                    title={tempcourse.title}
                    key={i}/>
            );
    }


//     <tbody>
// {
//
// }
// </tbody>

    render() {
        return (
            <div>
                <h1>Course list</h1>
                <h2>{this.state.title}</h2>
                <form className="form-check" role="form">
                    <input className="form-control"
                           placeholder="Course Title" onChange={this.titleChanged}/>
                    <button className="btn btn-primary btn-block" onClick={this.createModule}>
                        <i className="fa fa-plus"></i></button>
                </form>

                <div>
                    <h2>Course List</h2>
                    <table>
                        <thead>
                        <tr>
                            <th>Title</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td><CourseRow/></td>
                            <td><CourseRow/></td>
                            <td><CourseRow/></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default CourseList;