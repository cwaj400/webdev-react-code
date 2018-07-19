import React from 'react';

export default class ModuleListItem extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <li>{this.props.module.title}
                <button onClick={() => {
                    this.props.delete(this.props.module.id)
                }}>
                    DELETE
                </button>
            </li>
        )
    }
}
