import React from 'react';
import CourseService from '../services/CourseService';
import ModuleList from './ModuleList';
import {Route} from 'react-router-dom'
import '../../node_modules/font-awesome/css/font-awesome.min.css';

class CourseEditor extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            courseId: '',
            course: {
                    title: '',
                    lessons: [{
                        title: ''
                    }]
            }
        };

        this.courseService = CourseService.instance;
        this.selectCourse = this.selectCourse.bind(this);
    }

    componentDidMount() {
        this.selectCourse(this.props.match.params.courseId);
    }

    componentWillReceiveProps(newProps) {
        this.selectCourse(newProps.match.params.courseId);
    }

    selectCourse(courseId) {
        this.setState({
            courseId: courseId
        }, this.findCourseById(courseId));
    }

    findCourseById(courseId) {
        this.courseService.findCourseById(courseId).then((course) => {
            this.setState({course: course});
        });
    }

    render() {
        return (
            <div className="ml-4">
                <h2>
                    Editing Course:
                    <small className="text-muted">{this.state.course.title}</small>
                </h2>
                <Route path="/course/:courseId/edit" component={ModuleList}/>
            </div>
        );
    }
}

export default CourseEditor;