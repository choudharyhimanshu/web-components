import * as React from 'react';
import { v4 as uuidv4 } from 'uuid';

import { ITodoListItem } from './todo-list-item.model';
import { TodoListService } from './todo-list.service';

import './todo-list.css';

const sortCompare = (itemA: ITodoListItem, itemB: ITodoListItem): number => {
    if (itemA.isCompleted) return 1;
    if (itemB.isCompleted) return -1;
    return itemB.createdOn.getTime() - itemA.createdOn.getTime();
};

export interface ITodoListProps {
    key?: string;
}

const TodoList = ({ key }: ITodoListProps) => {
    const todoListService = React.useMemo(() => new TodoListService(key), [
        key
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
        <div>
            <div>
                <h3>Todo List</h3>
                <p>(Stays in your browser cache)</p>
            </div>
            <div>
                <input
                    type="text"
                    value={newItemTitle}
                    onChange={event => setNewItemTitle(event.target.value)}
                />
                <span onClick={handleAddItemAction}>
                    <i className="fa fa-plus" />
                </span>
            </div>
            <div>
                <ul>
                    {listItems.sort(sortCompare).map(item => (
                        <li key={item.id}>
                            <input
                                type="checkbox"
                                checked={item.isCompleted}
                                onChange={() =>
                                    handleCompletionToggleAction(item)
                                }
                            />
                            {item.title}
                            <i
                                className="fa fa-trash"
                                onClick={() => handleDeleteItemAction(item)}
                            />
                        </li>
                    ))}
                </ul>
            </div>
            {listItems.length > 0 && (
                <div>
                    <button onClick={handleClearAllAction}>Clear all</button>
                    <button onClick={handleClearCompletedAction}>
                        Remove completed
                    </button>
                </div>
            )}
        </div>
    );
};

export default TodoList;
