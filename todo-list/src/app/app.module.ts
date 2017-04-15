import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoListService } from "./services/todo-list.service";

@NgModule({
    declarations: [
        AppComponent,
        TodoListComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    providers: [
        TodoListService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
