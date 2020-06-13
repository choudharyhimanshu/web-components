import * as React from 'react';

import TodoList from '../src/TodoList';

export default {
    title: 'TodoList',
    component: TodoList,
    decorators: []
};

export const withDefaultKey = () => {
    return (
        <div
            style={{
                width: 400,
                margin: '50px auto 50px auto',
                border: '1px solid gray',
                display: 'block'
            }}
        >
            <TodoList />
        </div>
    );
};
