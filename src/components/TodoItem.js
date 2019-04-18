import React, { Component } from 'react';
import PropTypes from 'prop-types';


class TodoItem extends Component {
    render() {
        return (
            <div style ={itemStyle}>
                <p>{this.props.todo.title}</p>
            </div>
        );
    }
}

const itemStyle = {
    backgroundColor: '#f4f4f4'
}

//PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

export default TodoItem;