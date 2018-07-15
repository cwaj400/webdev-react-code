import React from 'react';

class CourseManager extends React.Component {
    render() {
        return (
            <div className="card" styles={
                {
                    width: '18rem'
                }
            }>
                <img className="card-img-top"
                     src="https://picsum.photos/300/200"/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                </div>
            </div>)
    }
}

export default CourseManager;