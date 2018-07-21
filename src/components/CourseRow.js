import React from 'react';
import {Link} from 'react-router-dom'
import CourseEditor from "../containers/CourseEditor";
import {BrowserRouter as Router, Route}
    from 'react-router-dom';


class CourseRow extends React.Component {
    render() {
        return (
            <tr>
                <td>
                    <Link to={`/course/${this.props.course.id}/edit`}>
                        {this.props.course.title}
                    </Link>
                </td>
                <td>
                    {this.props.course.modified}
                </td>
                <td>{this.props.course.modified}</td>
                <td>
                    <button className="btn btn-danger"
                            onClick={() =>
                                this.props.deleteCourse(this.props.course.id)
                            }>
                        Delete
                    </button>
                </td>
            </tr>
        )
    }
}

export default CourseRow;
