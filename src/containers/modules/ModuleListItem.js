import React from 'react';
import '../../../node_modules/font-awesome/css/font-awesome.min.css';
import {BrowserRouter as Router, Link, Route}
    from 'react-router-dom';

export default class ModuleListItem extends React.Component {
    constructor(props) {
        super(props);

        this.state =
            {
                moduleId: this.props.match.params.moduleId,
                lessons: []
            };
    }

    //TODO: heroku repo server side.
//TODO: get module title
    //TODO: Do we need to edit module?
    //TODO: component will mount and other one? What do they do?
    render() {
        return (
            <li>
                <Link to={"/course/" + this.props.match.params.courseId + "/edit/" + this.state.moduleId}>
                    <h7>{this.props.module.title}</h7></Link>


                {/*<Route{"/course/" + this.props.courseId + "/edit/" + this.state.moduleId}>*/}

                <button onClick={() => {
                    this.props.parent.deleteModule(this.state.moduleId)
                }} className="btn btn-danger btn btn-sm">
                    Delete
                </button>
            </li>
        )
    }
}