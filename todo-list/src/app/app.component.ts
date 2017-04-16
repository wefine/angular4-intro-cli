import { Component } from '@angular/core';
import { TodoListService } from "./services/todo-list.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    constructor(public list: TodoListService) {
    }
}
