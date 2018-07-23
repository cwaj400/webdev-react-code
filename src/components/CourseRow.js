import React from 'react';
import {Link} from 'react-router-dom';


class CourseRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newCourse: '',
        }
    }


    titleChanged = (event) => {
        console.log("s")
        this.setState({
            newCourse: event.target.value
        })
    };


//TODO: update course name
    //TODO: get lessons to appear
    render() {
        return (
            <tr>
                <td>
                    <Link to={`/course/${this.props.course.id}/edit`}>
                        {this.props.course.title}
                    </Link>
                </td>
                <td>
                    {this.props.created}
                </td>
                <td>
                    {this.props.course.modified}
                    </td>
                <td>
                    <button className="btn btn-danger"
                            onClick={() =>
                                this.props.deleteCourse(this.props.course.id)
                            }>
                        Delete
                    </button>
                </td>
                <td>
                    <form className="form-inline">
                        <div className="input-group">
                            <input placeholder={`Edit Name: ${this.props.course.title}`}
                                   onChange={this.titleChanged}
                                   className="form-control"/>
                            <button id="moduleBtn"
                                    onClick={() => this.props.updateCourse(this.props.course.id,
                                        {title: this.state.newCourse})}
                                    className="btn btn-primary">Update Course Name
                            </button>
                        </div>
                    </form>
                </td>
            </tr>
        )
    }
}

export default CourseRow;
