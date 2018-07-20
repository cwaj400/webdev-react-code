import React from 'react'
import LessonTabs from '../lessons/LessonTabs';
import ModuleService from '../../services/ModuleSevice';
import ModuleListItem from './ModuleListItem';
import './ModuleStyle.css';
import '../../../node_modules/font-awesome/css/font-awesome.min.css';

export default class ModuleList extends React.Component {

    constructor(props) {
        super(props);

        this.state =
            {
                courseId: this.props.match.params.courseId, module: {title: ''},
                modules: []
            };


        this.moduleService = ModuleService.instance;
        this.setModuleTitle = this.setModuleTitle.bind(this);
        this.createModule = this.createModule.bind(this);
    }


    setModuleTitle(event) {
        this.setState({
            module: {
                title: event.target.value
            }
        })
    }


    //TODO: state modules not a function.
    componentDidMount() {
        // console.log(this.props.match.params.courseId);
        //this.setCourseId(this.props.match.params.courseId);
        this.findAllModulesForCourse(this.state.courseId);
    }

    componentWillReceiveProps(newProps) {
        // console.log("will receive");
        // this.setCourseId(newProps.courseId);
        // this.findAllModulesForCourse(newProps.courseId);
    }

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
        let modules = this.state.modules.map((module) => {
            console.log(module.title);
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
            <div>
                <h4>Module List for Course ID:
                    {this.state.courseId}</h4>
                <input placeholder="New Module" value={this.state.module.title} onChange={this.setModuleTitle} className="form-control"/>
                <button onClick={this.createModule} className="btn btn-primary">Create</button>
                {this.renderListOfModules()}
            </div>
        )
    }
}