import React from 'react';
import Course from './Course.js';
import CourseEditor from './CourseEditor';
import '../../../node_modules/font-awesome/css/font-awesome.min.css';
import CourseService from '../../services/CourseService';
import CourseRow from './CourseRow';
import ModuleList from '../modules/ModuleList';


class CourseListItem extends React.Component {

    render() {
        return (
            <div className="container-fluid">
                <li className="list-group-item">{this.props.title}</li>
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
        // this.state = {
        //     title: 'courir',
        //     courses: [
        //         {title: 'Course 1 - whatever', id: 1},
        //         {title: 'Course 2 - MySQL', id: 2},
        //         {title: 'Course 3 - MongoDB', id: 3},
        //         {title: 'Course 4 - React', id: 4},
        //         {title: 'Course 5 - JavaScript', id: 5},
        //     ]
        // };

        this.titleChanged = this.titleChanged.bind(this);

        //Added by me
        this.componentDidMount = this.componentDidMount.bind(this);

        this.courseRows = this.courseRows.bind(this);

        this.createCourse = this.createCourse.bind(this);

        this.deleteCourse = this.deleteCourse.bind(this);


    }

    componentDidMount() {
        this.courseService.findAllCourses()
            .then(courses => {
                this.setState({courses: courses});
            });
    }


    deleteCourse(courseId) {
        console.log('delete ' + courseId);
        this.courseService.deleteCourse(courseId);
    }



    courseRows() {
        var rows = this.state.courses.map((course) => {
            return <CourseRow course={course} key={course.id} delete={this.deleteCourse}/>
        });
    }


    findAllCourses() {
        this.courseService.findAllCourses()
            .then((courses) => {
                this.setState({courses: courses});
                console.log(courses);
            });
    }


    createCourse = () => {
        this.courseService
            .createCourse(this.state.course)
            .then(() => {
                this.findAllCourses();
            });

        console.log(this.state.courses);
        var course = {title: this.state.title};
        this.state.courses.push(course);
        this.setState({"courses": this.state.courses});
    };


    titleChanged(event) {
        console.log(event.target.value);
        this.setState({title: event.target.value});
    }

    renderListOfCourses() {
        return this.state.courses
            .map((tempcourse, i) =>  //argument. function mapped to something =>. Second argument is index.
                <CourseListItem title={tempcourse.title} key={i}/>
            );
    }


    render() {
        return (
            <div>
                <h2>Course List</h2>
                <table className="table">
                    <thead>
                    <tr>
                        <th>Title</th>
                    </tr>
                    <tr>
                        <th><input onChange={this.titleChanged} className="form-control" /> </th>
                        <th><button onClick={this.createCourse} className="btn btn-primary">Add</button> </th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.courses.map((course, index) =>
                        <CourseRow key={index}
                                   deleteCourse={this.deleteCourse}
                                   course={course}/>)}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default CourseList;