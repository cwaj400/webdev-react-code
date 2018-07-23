import React from 'react';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import CourseService from '../services/CourseService';
import CourseRow from '../components/CourseRow';


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
        this.state = {
            newCourse: {},
            alert: null,
            courses: [],
        };

        this.updateCourse = this.updateCourse.bind(this);
        this.titleChanged = this.titleChanged.bind(this);


    }


    componentDidMount() {
        this.courseService.findAllCourses()
            .then((courses) => {
                this.setState({courses: courses})
            });
    }

    hideAlert() {
        this.setState({
            'alert': null
        });
    }


    alerting = () => {
        alert("Course added success");

    };

    createCourse = () => {

        this.courseService.createCourse(this.state.newCourse).then(() =>
            this.findAllCourses()).then(this.alerting);

        var course = {title: this.state.title};
        this.state.courses.push(course);
        this.setState({"courses": this.state.courses})
    };

    deleteCourse = (courseId) => {
        this.courseService.deleteCourse(courseId)
            .then(() => this.courseService.findAllCourses())
            .then(courses => this.setState({courses: courses}))
    };


    findAllCourses() {
        this.courseService.findAllCourses()
            .then((courses) => {
                this.setState({courses: courses});
            });
    }


    titleChanged = (event) => {
        this.setState({
            newCourse: {
                title: event.target.value
            }
        })
    };

    updateCourse(courseId, course) {
        if (courseId && course) {
            this.courseService.updateCourse(courseId, course);
        }
    }

    render() {
        return (
            <div>
                <h2>Course List</h2>
                <table className="table">
                    <thead>
                    <tr>
                        <th><input onChange={this.titleChanged} className="form-control" placeholder="Course Title"/>
                        </th>
                        <th>
                            <button type="button" onClick={this.createCourse} className="btn btn-primary">Add</button>
                        </th>
                    </tr>
                    <tr>
                        <th>Title</th>
                        <th>Created</th>
                        <th>Last Modified</th>
                        <th>Delete Course</th>
                        <th>&nbsp;</th>
                    </tr>

                    </thead>
                    <tbody>
                    {this.state.courses.map((course, index) =>
                        <CourseRow key={index} deleteCourse={this.deleteCourse} course={course}
                                   updateCourse={this.updateCourse}/>)}
                    </tbody>
                    <td>Click Course to Edit</td>
                </table>
            </div>
        );
    }
}

export default CourseList;
