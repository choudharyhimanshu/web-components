import { ITodoListItem } from './todo-list-item.model';

export class TodoListService {
    private storeKey: string;

    constructor(storeKey: string = 'defaultTodoListStore') {
        this.storeKey = storeKey;
    }

    addItem(itemToAdd: ITodoListItem) {
        const allItemsString = localStorage.getItem(this.storeKey);
        if (allItemsString) {
            const allItems = JSON.parse(allItemsString) as ITodoListItem[];
            allItems.push(itemToAdd);
            localStorage.setItem(this.storeKey, JSON.stringify(allItems));
        } else {
            localStorage.setItem(this.storeKey, JSON.stringify([itemToAdd]));
        }
    }

    removeItem(itemToRemove: ITodoListItem) {
        const allItemsString = localStorage.getItem(this.storeKey);
        if (allItemsString) {
            const allItems = JSON.parse(allItemsString) as ITodoListItem[];
            const itemToRemoveIndex = allItems.findIndex(
                item => item.id === itemToRemove.id
            );
            if (itemToRemoveIndex > -1) {
                allItems.splice(itemToRemoveIndex, 1);
            }
            localStorage.setItem(this.storeKey, JSON.stringify(allItems));
        } else {
            localStorage.setItem(this.storeKey, JSON.stringify([]));
        }
    }

    getAllItems(): ITodoListItem[] {
        const allItemsString = localStorage.getItem(this.storeKey);
        if (allItemsString) {
            return (JSON.parse(allItemsString) as ITodoListItem[]).map(
                item => ({
                    ...item,
                    createdOn: new Date(item.createdOn)
                })
            );
        } else {
            localStorage.setItem(this.storeKey, JSON.stringify([]));
            return [];
        }
    }

    clearAllItems() {
        localStorage.setItem(this.storeKey, JSON.stringify([]));
    }

    toggleItemCompletion(itemToToggle: ITodoListItem) {
        const allItemsString = localStorage.getItem(this.storeKey);
        if (allItemsString) {
            const allItems = JSON.parse(allItemsString) as ITodoListItem[];
            const itemToToggleIndex = allItems.findIndex(
                item => item.id === itemToToggle.id
            );
            if (itemToToggleIndex > -1) {
                allItems[itemToToggleIndex].isCompleted = !allItems[
                    itemToToggleIndex
                ].isCompleted;
            }
            localStorage.setItem(this.storeKey, JSON.stringify(allItems));
        } else {
            localStorage.setItem(this.storeKey, JSON.stringify([]));
        }
    }
}
