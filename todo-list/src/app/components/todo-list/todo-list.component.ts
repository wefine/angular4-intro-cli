import { Component, OnInit } from '@angular/core';
import { TodoListService } from "../../services/todo-list.service";
import { Item } from "../../interfaces/item";

@Component({
    selector: 'todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

    constructor(public list: TodoListService) {
        for (let i = 0; i < 10; i++) {
            let dueDate = new Date();
            let newItem: Item = {
                title: 'item' + i,
                dueDate: dueDate,
                done: false
            };

            dueDate.setDate(dueDate.getDate() + i);

            this.list.addItem(newItem);
        }
    }

    ngOnInit() {
    }

}
