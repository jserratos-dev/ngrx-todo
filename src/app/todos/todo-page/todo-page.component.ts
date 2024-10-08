import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { toggleAll } from '../todo.actions';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrl: './todo-page.component.css'
})
export class TodoPageComponent {
  completado: boolean = false;
  constructor(private store: Store<AppState>) {}

  toggeAll() {
    this.completado = !this.completado;
    this.store.dispatch(toggleAll( { completado: this.completado } ))
  }
}
