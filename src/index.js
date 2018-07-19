import React from 'react';
import ReactDOM from 'react-dom';
import WhiteBoardMain from './WhiteBoardMain';
import {BrowserRouter as Router, Link, Route}
    from 'react-router-dom';

class App extends React.Component {
    render() {
        return (
            <Router>
                <div className="container-fluid">
                    <Link to="/whiteboard">
                        <h4>Click To Open WhiteBoard</h4></Link>
                    <Route path='/whiteboard' component={WhiteBoardMain}/>
                </div>
            </Router>
        );
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);