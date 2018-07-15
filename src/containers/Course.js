import React from "react";
import Symbol from '../../node_modules/font-awesome/css/font-awesome.min.css';

export default class Course extends React.Component {
    render() {
        return (
            <li className="list-group-item">
                <i className="fa fa-trash">
                </i>
                <i className="fa fa-pencil">
                </i>
            </li>
        );
    }
}

