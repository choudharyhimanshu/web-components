import * as React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';

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
                display: 'block'
            }}
        >
            <TodoList />
        </div>
    );
};

export const withCustomKey = () => {
    return (
        <div
            style={{
                width: 400,
                margin: '50px auto 50px auto',
                display: 'block'
            }}
        >
            <TodoList listKey={text('listKey', 'foobar')} />
        </div>
    );
};
