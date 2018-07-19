import React from 'react';
import CourseService from "../../services/CourseService";


class CourseEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {courseId: ''};
        this.service = CourseService.instance;
        this.selectCourse = this.selectCourse.bind(this);
    }

    render() {
        return (
            (<h3>Course {this.state.courseId}</h3>)
        )
    }

    selectCourse(courseId) {
        this.setState({courseId: courseId});
    }

    componentDidMount() {
        this.selectCourse
        (this.props.match.params.courseId);
    }

    componentWillReceiveProps(newProps) {
        this.selectCourse
        (newProps.match.params.courseId);
    }
}

export default CourseEditor;

