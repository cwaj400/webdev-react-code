import React from 'react'

export default class LessonTabs extends React.Component {
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

    render() {
        return (
            <div>
                <ul>
                    <li><h5>
                        {this.props.lesson.title}
                    </h5>
                        <form className="form-inline">
                            <div className="input-group">
                                <input placeholder={`Edit Name: ${this.props.lesson.title}`} onChange={this.editLesson}
                                       className="form-control" value={this.state.lesson.title}/>
                                <button id="moduleBtn"
                                        onClick={this.props.updateLesson}
                                        className="btn btn-primary">Update Lesson Name
                                </button>
                                <button id="editLsnNameBtn" onClick={this.props.deleteLesson}
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