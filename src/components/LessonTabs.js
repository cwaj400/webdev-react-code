import React from 'react'

export default class LessonTabs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedLessonIndex: 0
        }
    }

    selectLesson = (index) => {
        this.setState({
            selectedLessonIndex: index
        })
    };

// {this.props.module.lessons.length}

    render() {
        return (
            <div>
                <ul>
                    <h5>{this.props.lesson.title}</h5>
                    <form className="form-inline">
                        <div className="input-group">
                            <input placeholder={`Edit Name: ${this.props.lesson.title}`} onChange={this.titleChanged}
                                   className="form-control"/>
                            <button id="moduleBtn"
                                    onClick={this.props.updateLesson(this.props.key, this.props.lesson)}
                                    className="btn btn-primary">Update Lesson Name
                            </button>
                        </div>
                    </form>
                </ul>
                {this.state.selectedLessonIndex}
            </div>
        )
    }
}


