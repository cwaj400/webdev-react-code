import React from 'react'
import {BrowserRouter as Link} from 'react-router-dom';

export default class Lessons extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            lesson: {
                title: ''
            }
        };
        this.editLesson = this.editLesson.bind(this);
    }



    editLesson(event) {
        this.setState({
            lesson: {
                title: event.target.value
            }
        });
    }

    //TODO: lesson moves to another page
    //TODO: click twice
    render() {
        return (
            <div>
                <ul>
                    <li><Link className="text-light"
                              to={`/course/${this.props.courseId}/module/${this.props.moduleId}/lesson/${this.props.lesson.id}`}>
                        <h5>{this.props.lesson.title} </h5>
                    </Link>
                        <form className="form-inline">
                            <div className="input-group">
                                <button  type="button" id="editLsnNameBtn" onClick={() => this.props.deleteLesson(this.props.lesson.id)}
                                        className="btn btn-danger"> Delete Lesson
                                </button>
                            </div>
                        </form>
                    </li>
                </ul>
            </div>
        )
    }
}