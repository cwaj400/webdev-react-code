import React from 'react';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';


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
                            <Link to={`/course/${this.props.courseId}/module/${this.props.module.id}`}>
                                {this.props.module.title}
                            </Link>
                        </td>
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
