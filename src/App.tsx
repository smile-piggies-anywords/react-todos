import React from 'react'
import ReactDOM from 'react-dom'
import './base.css'
import './index.css'

class Todo extends React.Component {
    render() {
        return (
            <div className="todoapp">
                <div>
                    <header className="header">
                        <h1>todos</h1>
                        <input className="new-todo" placeholder="What needs to be done?"/>
                    </header>
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <Todo />,
    document.getElementById('root')
);
