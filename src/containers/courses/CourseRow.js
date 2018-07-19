import React from 'react';
import {Link} from 'react-router-dom'


const CourseRow = ({course, deleteCourse}) => {
    let to = "/course/" + course.id;
    return (
        <tr>
            <td>
                <Link to={to}>
                    {course.title}
                </Link>
            </td>
            <td>
                <button className="btn btn-danger" onClick={() => this.props.deleteCourse(this.props.course.id)}>
                    Delete Course
                </button>
            </td>
        </tr>
    )
};

export default CourseRow;

