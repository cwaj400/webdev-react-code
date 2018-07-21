import React from 'react';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import {BrowserRouter as Router, Link, Route}
    from 'react-router-dom';
import ModuleEditor from "../containers/ModuleEditor";


export default class ModuleListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            module: {
                title: '',
            }
        };

    }

    render() {
        return (
            <div>
                <table className="table" id="moduleTab">
                    <tr>
                        <td>
                            <Link to={`/course/${this.props.courseId}/edit/${this.props.module.id}`}>
                                <h7>{this.props.module.title}</h7>
                            </Link>
                            <Route path='/course/:courseId/edit/0' component={ModuleEditor}/>
                        </td>

                        {/*<Route{"/course/" + this.props.courseId + "/edit/" + this.state.moduleId}>*/}
                        <td>
                <span className="float-right">
                <button onClick={() => {
                    this.props.parent.deleteModule(this.props.module.id)
                }} className="btn btn-danger btn btn-sm">
                    Delete
                </button>
                </span>
                        </td>
                    </tr>
                </table>
            </div>
        )
    }
}
