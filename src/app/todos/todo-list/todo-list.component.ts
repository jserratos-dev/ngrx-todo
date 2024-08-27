import { Component } from '@angular/core';
import { Todo } from '../models/todo.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { filtrosValidos } from '../../filtro/filtro.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
 
  public todos:Todo[] = [];
  public  filtroActual!: filtrosValidos;

  constructor( private store: Store<AppState> ) {
    // this.store.select('todos').subscribe(todos => this.todos = todos );
    this.store.subscribe( state => {
      this.todos = state.todos;
      this.filtroActual = state.filtro;
    })
  }
}
