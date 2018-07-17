import React from 'react';


class CourseEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {courseId: ''};
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

