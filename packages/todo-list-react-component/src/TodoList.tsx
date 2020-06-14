import * as React from 'react';
import { v4 as uuidv4 } from 'uuid';

import { ITodoListItem } from './todo-list-item.model';
import TodoListItem from './TodoListItem';
import { TodoListService } from './todo-list.service';

import './todo-list.css';

const sortCompare = (itemA: ITodoListItem, itemB: ITodoListItem): number => {
    return itemB.createdOn.getTime() - itemA.createdOn.getTime();
};

export interface ITodoListProps {
    listKey?: string;
}

const TodoList = ({ listKey }: ITodoListProps) => {
    const todoListService = React.useMemo(() => new TodoListService(listKey), [
        listKey
    ]);

    const [listItems, setListItems] = React.useState<ITodoListItem[]>(
        todoListService.getAllItems()
    );
    const [newItemTitle, setNewItemTitle] = React.useState('');

    const handleAddItemAction = React.useCallback(() => {
        if (newItemTitle) {
            const newItem: ITodoListItem = {
                id: uuidv4(),
                title: newItemTitle,
                isCompleted: false,
                createdOn: new Date()
            };
            todoListService.addItem(newItem);
            setNewItemTitle('');
            setListItems(todoListService.getAllItems());
        }
    }, [todoListService, newItemTitle]);

    const handleDeleteItemAction = React.useCallback(
        (itemToDelete: ITodoListItem) => {
            todoListService.removeItem(itemToDelete);
            setListItems(todoListService.getAllItems());
        },
        [todoListService]
    );

    const handleCompletionToggleAction = React.useCallback(
        (itemToMark: ITodoListItem) => {
            todoListService.toggleItemCompletion(itemToMark);
            setListItems(todoListService.getAllItems());
        },
        [todoListService]
    );

    const handleClearCompletedAction = React.useCallback(() => {
        listItems
            .filter(item => item.isCompleted)
            .forEach(item => todoListService.removeItem(item));
        setListItems(todoListService.getAllItems());
    }, [todoListService, listItems]);

    const handleClearAllAction = React.useCallback(() => {
        todoListService.clearAllItems();
        setListItems([]);
    }, [todoListService]);

    return (
        <div className="todo-list">
            <h3 className="todo-list-heading">
                <i className="fa fa-list-ul fa-sm margin-right-1x"></i>To Do
            </h3>
            <p className="todo-list-subheading">
                (Stays in your browser cache)
            </p>
            <form
                className="todo-list-input-group"
                onSubmit={event => {
                    event.preventDefault();
                    handleAddItemAction();
                }}
            >
                <input
                    type="text"
                    className="todo-list-input-field"
                    value={newItemTitle}
                    onChange={event => setNewItemTitle(event.target.value)}
                />
                <button
                    className="todo-list-input-field-action"
                    onClick={handleAddItemAction}
                >
                    <i className="fa fa-plus" />
                </button>
            </form>
            <ul className="todo-checklist">
                {listItems
                    .filter(item => !item.isCompleted)
                    .sort(sortCompare)
                    .map(item => (
                        <TodoListItem
                            key={item.id}
                            item={item}
                            onCompletionToggle={handleCompletionToggleAction}
                            onDelete={handleDeleteItemAction}
                        />
                    ))}
            </ul>
            <ul className="todo-checklist">
                {listItems
                    .filter(item => item.isCompleted)
                    .sort(sortCompare)
                    .map(item => (
                        <TodoListItem
                            key={item.id}
                            item={item}
                            onCompletionToggle={handleCompletionToggleAction}
                            onDelete={handleDeleteItemAction}
                        />
                    ))}
            </ul>
            {listItems.length > 0 && (
                <div className="todo-list-actions">
                    <button onClick={handleClearAllAction}>
                        <i className="fa fa-trash margin-right-1x" />
                        Clear all
                    </button>
                    <button onClick={handleClearCompletedAction}>
                        <i className="fa fa-eraser margin-right-1x" />
                        Remove completed
                    </button>
                </div>
            )}
        </div>
    );
};

export default TodoList;
