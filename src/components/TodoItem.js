import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { whileStatement } from '@babel/types';

export class TodoItem extends Component {
    getStyle = () => {
        if(this.props.todo.completed) {
            return {
                textDecoration: 'line-through'
            }
        } else {
            return {
                textDecoration: 'none'
            }
        }
    }

    render() {
        const { id, title } = this.props.todo; 

        return (
            <div style={this.getStyle()}>
                <input 
                    type="checkbox" 
                    onChange={this.props.markComplete.bind(this,id)} 
                /> {' '}
                { title }
                <button onClick={this.props.delTodo.bind(this,id)} style={btnStyle}>x</button>
            </div>
        )
    }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

const btnStyle = {
    background: 'red',
    color: 'white',
}

export default TodoItem
