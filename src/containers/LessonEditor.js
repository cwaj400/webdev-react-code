import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import WidgetListContainer from './widgets/WidgetListContainer.js';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {WidgetReducer} from "../reducers/WidgetReducer";

let store = createStore(WidgetReducer);

class LessonEditor extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            courseId: '',
            moduleId: '',
            lessonId: '',
        };

        this.setCourseId = this.setCourseId.bind(this);
        this.setModuleId = this.setModuleId.bind(this);
        this.setLessonId = this.setLessonId.bind(this);
    }

    componentDidMount() {
        this.setCourseId(this.props.match.params.courseId);
        this.setModuleId(this.props.match.params.moduleId);
        this.setLessonId(this.props.match.params.lessonId);
    }

    componentWillReceiveProps(newProps) {
        this.setCourseId(newProps.match.params.courseId);
        this.setModuleId(newProps.match.params.moduleId);
        this.setLessonId(newProps.match.params.lessonId);

    }

    setCourseId(courseId) {
        this.setState({courseId: courseId});
    }

    setModuleId(moduleId) {
        this.setState({moduleId: moduleId});
    }

    setLessonId(lessonId) {
        this.setState({lessonId: lessonId});
    }

    render() {
        return (<div className="container-fluid">
            <div>{this.props.lesson.title}
                {this.state.lessonId}
            </div>
        </div>);
    }
}

export default LessonEditor;