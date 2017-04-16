import { Pipe, PipeTransform } from '@angular/core';
import { TodoListService } from "../services/todo-list.service";
import { Item } from "../interfaces/item";

@Pipe({
    name: 'orderByDoneAndDate',
})
export class OrderByDoneAndDatePipe implements PipeTransform {

    constructor(private listService: TodoListService) {
    }


    transform(items: Item[]): Item[] {
        this.listService.sort();

        return this.listService.items;
    }
}
