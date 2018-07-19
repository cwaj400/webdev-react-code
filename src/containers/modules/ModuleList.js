import React from 'react';
import ModuleService from '../../services/ModuleSevice.js';
import ModuleListItem from
        './ModuleListItem';
import ModuleEditor from './ModuleEditor';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import {BrowserRouter as Router} from 'react-router-dom';


export default class ModuleList extends React.Component {
    constructor(props) {
        super(props);


        this.moduleService = ModuleService.instance;

        this.deleteModule = this.deleteModule.bind(this);

        this.state =
            {
                courseId: '', module: {title: ''},
                modules: []
            };

        this.setModuleTitle = this.setModuleTitle.bind(this);

        this.setCourseId = this.setCourseId.bind(this);


        this.createModule = this.createModule.bind(this);
    }

    createModule() {
        console.log(this.state);
        this.moduleService.createModule(this.state.courseId, this.state.module).then(() => {
            this.findAllModulesForCourse(this.state.courseId);
        });
    }


    renderModules() {
        let modules =
            this.state.modules.map((module) => {
                return (<ModuleListItem key={module.id}
                                        module={module}/>)
            });
    }


    setModuleTitle(event) {
        this.setState({
            module: {
                title: event.target.value
            }
        })
    }


    setCourseId(courseId) {
        this.setState({courseId: courseId});
    }

    componentDidMount() {
        this.setCourseId(this.props.courseId);
    }

    componentWillReceiveProps(newProps) {
        this.setCourseId(newProps.courseId);
        this.findAllModulesForCourse(newProps.courseId)
    }

    findAllModulesForCourse(courseId) {
        this.moduleService
            .findAllModulesForCourse(courseId)
            .then((modules) => {
                this.setModules(modules)
            });
    }

    setModules(modules) {
        this.setState({modules: modules})
    }

    deleteModule(moduleId) {
        console.log(moduleId);
        this.moduleService
            .deleteModule(moduleId)
            .then(() => {
                this.findAllModulesForCourse
                (this.state.courseId)
            });
    }

    renderModules() {
        let modules = this.state.modules.map((module) => {
            return (
                <ModuleListItem module={module} key={module.id}
                                delete={this.deleteModule}/>
            )
        });
        return (<ul>{modules}</ul>)
    }


    render() {
        return (
            <Router>
                <div className="row">
                    <div className="col-4">
                        <h4>Module List for courseId:
                            {this.state.courseId}
                            {this.renderModules()}</h4>
                        <input placeholder="New Module" value={this.state.module.title} onChange={this.setModuleTitle}/>
                        <button onClick={this.createModule} className="btn btn-outline-primary">Create Module</button>
                    </div>
                    <div className="col-8">
                        <ModuleEditor/></div>
                </div>
            </Router>
        )
    }
}

//TODO: Do not do topics