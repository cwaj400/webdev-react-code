import React from 'react'
import ModuleService from '../services/ModuleSevice';
import ModuleListItem from '../components/ModuleListItem';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import '../stylesheet.css';
import ModuleEditor from "../containers/ModuleEditor";
import {BrowserRouter as Router, Route}
    from 'react-router-dom';

export default class ModuleList extends React.Component {

    constructor(props) {
        super(props);

        this.state =
            {
                courseId: '',
                module: {title: ''},
                modules: []
            };


        this.moduleService = ModuleService.instance;
        this.setModuleTitle = this.setModuleTitle.bind(this);
        this.createModule = this.createModule.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.renderListOfModules = this.renderListOfModules.bind(this);

    }


    setModuleTitle(event) {
        this.setState({
            module: {
                title: event.target.value
            }
        })
    }


    //TODO: post error, when making module, but still works?

    componentDidMount() {
        this.setCourseId(this.props.match.params.courseId);
        this.findAllModulesForCourse(this.props.match.params.courseId);
    }


    //
    // componentWillReceiveProps(newProps) {
    //     // this.setCourseId(newProps.match.courseId);
    //     this.findAllModulesForCourse(newProps.match.courseId);
    // }

    setCourseId(courseId) {
        this.setState({courseId: courseId});
    }


    createModule() {
        this.moduleService.createModule(this.state.courseId, this.state.module).then(() => {
            this.findAllModulesForCourse(this.state.courseId);
        });
    }

    deleteModule = (moduleId) => {
        this.moduleService.deleteModule(moduleId).then(() => {
            this.findAllModulesForCourse(this.state.courseId);
        });
    };

    findAllModulesForCourse(courseId) {
        if (courseId == null || 0) {
            return
        }
        this.moduleService.findAllModulesForCourse(courseId).then((modules) => {
            this.setModules(modules);
        });
    }

    setModules(modules) {
        this.setState({modules: modules});
    }


    editClickHandler(moduleId) {
        this.setState({editModuleId: moduleId});
    }

    isEditModule(moduleId) {
        return this.state.editModuleId === moduleId;
    }

    updateModule(moduleId, module) {
        this.moduleService.updateModule(moduleId, module)
            .then(this.setState({editModuleId: ''}))
            .then(() => {
                this.findAllModulesForCourse(this.state.courseId);
            });
    }


    renderListOfModules() {

        if (this.state.modules.length === 0) {
            return
        }
        let modules = this.state.modules.map((module, i) => {
            return (
                <ModuleListItem
                    parent={this}
                    key={module.id}
                    module={module}
                    courseId={this.state.courseId}
                    delete={this.deleteModule}
                    selectModule={this.selectModule}/>
            )
        });

        return (
            modules
        )
    }


    selectModule = (index) => {
        this.setState({
            selectedModuleIndex: index
        });
    };


    render() {
        return (
            <Router>
                <div>
                    <form className="form-inline">
                        <div className="input-group">
                            <input placeholder="New Module" value={this.state.module.title}
                                   onChange={this.setModuleTitle}
                                   className="form-control"/>
                            <button type="button" id="moduleBtn" onClick={this.createModule}
                                    className="btn btn-primary">Create
                            </button>
                        </div>
                    </form>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-4">
                                <h2>Module List for Course ID:{this.state.courseId}</h2>
                                {this.renderListOfModules()}
                            </div>
                            <div className="col-8">
                                <Route path="/course/:courseId/module/:moduleId" component={ModuleEditor}
                                       title={this.state.module.title}/>
                            </div>
                        </div>
                    </div>
                    <div>___________________________________</div>
                    <div aria-checked="true">Click Title to Access Lessons and Edit Module</div>
                </div>
            </Router>
        )
    }
}