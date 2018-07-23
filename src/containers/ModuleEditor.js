import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import LessonService from '../services/LessonService';
import ModuleSevice from '../services/ModuleSevice';
import LessonTabs from '../components/LessonTabs';

class ModuleEditor extends React.Component {
    constructor(props) {
        super(props);

        this.moduleService = ModuleSevice.instance;
        this.lessonService = LessonService.instance;

        this.state = {
            courseId: '',
            moduleId: '',
            lesson: {
                title: ''
            },
            lessons: [],
            module: '',
        };


        this.createLesson = this.createLesson.bind(this);
        this.deleteLesson = this.deleteLesson.bind(this);
        this.updateLesson = this.updateLesson.bind(this);
        this.setCourseId = this.setCourseId.bind(this);
        this.setModuleId = this.setModuleId.bind(this);
        this.setNewLesson = this.setNewLesson.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount() {
        this.setState({moduleId: this.props.match.params.moduleId});
        this.setState({courseId: this.props.match.params.courseId});
        this.findModuleById(this.props.match.params.moduleId);
        this.findAllLessonsForModule(this.props.match.params.courseId, this.props.match.params.moduleId);
    }

    componentWillReceiveProps(newProps) {
        this.setCourseId(newProps.match.params.courseId);
        this.setModuleId(newProps.match.params.moduleId);
        // this.findModuleById(newProps.match.params.moduleId);
        // this.findAllLessonsForModule(newProps.match.params.courseId, newProps.match.params.moduleId);
    }

    setCourseId(courseId) {
        this.setState({courseId: courseId});
    }

    setModuleId(moduleId) {
        this.setState({moduleId: moduleId});
    }

    setLessons(lessons) {
        this.setState({lessons: lessons});
    }

    setNewLesson(event) {
        console.log(event.target.value);
        this.setState({
            lesson: {
                title: event.target.value
            }
        });
    }

    findAllLessonsForModule(courseId, moduleId) {
        console.log(this.state.lessons);
        this.lessonService.findAllLessonsForModule(courseId, moduleId).then((lessons) => {
            this.setLessons(lessons);
        });
    }

    findModuleById(moduleId) {
        this.moduleService.findModuleById(moduleId).then((module) => {
            this.setState({module: module});
        });
    }

    //lesson needs to be object?
    createLesson() {
        // console.log(this.state.lesson);
        // this.setState({lesson: {title: ''}});
        if (this.state.lesson !== null) {
            this.lessonService.createLesson(this.state.courseId, this.state.moduleId, this.state.lesson)
                .then(() => {this.findAllLessonsForModule(this.state.courseId, this.state.moduleId).then(this.setState({lesson: {title: ''}}));
                });
        }
    }

    deleteLesson(lessonId) {
        this.lessonService.deleteLesson(lessonId)
            .then(() => {
                this.findAllLessonsForModule(this.state.courseId, this.state.moduleId);
            });
    }

    updateLesson(lessonId, lesson) {
        this.lessonService.updateLesson(lessonId, lesson)
            .then(() => {
                this.findAllLessonsForModule(this.state.courseId, this.state.moduleId);
            });
    }

    renderListOfLessons() {
        const lessonss = this.state.lessons.map((lesson, i) => {
            return <LessonTabs key={lesson.id} courseId={this.state.courseId}
                               lesson={lesson} moduleId={this.state.moduleId}
                               delete={this.deleteLesson} updateLesson={this.updateLesson}/>;

        });
        return lessonss;
    }

    render() {
        return (<Router>
            <div className="container">
                <div className="row">
                    <div className="col-6 col-lg-4 col-md-6">
                    </div>


                    <div className="col-6 col-lg-8 col-md-6">
                        <h3>Lessons for: <small className="text-muted">{this.state.module.title}</small>
                        </h3>

                        <form className="form-inline">
                            <div className="input-group">
                                <input placeholder="New Lesson Title"
                                       value={this.state.lesson.title} onChange={this.setNewLesson}
                                       className="form-control"/>
                                <button id="lessonBtn" onClick={this.createLesson}
                                        className="btn btn-primary">Create Lesson For {this.state.module.title}
                                </button>
                            </div>
                        </form>
                    </div>
                    {this.renderListOfLessons()}

                </div>
            </div>
        </Router>);
    }
}

export default ModuleEditor;