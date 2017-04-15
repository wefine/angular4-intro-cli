import { Injectable } from '@angular/core';
import { Item } from "../interfaces/item";

@Injectable()
export class TodoListService {

    items: Item[] = [];

    constructor() {
    }

    addItem(item: Item) {
        this.items.push(item);
    }

    deleteItem(index: number) {
        this.items.splice(index, 1);
    }
}
