import * as React from 'react';
import { ITodoListItem } from './todo-list-item.model';

export interface ITodoListItemProps {
    item: ITodoListItem;
    onCompletionToggle: (item: ITodoListItem) => void;
    onDelete: (item: ITodoListItem) => void;
}

const TodoListItem = ({
    item,
    onCompletionToggle,
    onDelete
}: ITodoListItemProps) => {
    return (
        <li
            key={item.id}
            className="cursor-pointer"
            onClick={() => onCompletionToggle(item)}
        >
            <span className={`checkbox ${item.isCompleted && 'active'}`}>
                {item.isCompleted && <i className="fa fa-check v-middle" />}
            </span>
            <span className={`title ${item.isCompleted && 'active'}`}>
                {item.title}
            </span>
            <span className="action">
                <i
                    className="fa fa-minus-circle"
                    onClick={() => onDelete(item)}
                />
            </span>
        </li>
    );
};

export default TodoListItem;
