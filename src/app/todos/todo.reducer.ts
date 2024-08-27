import { createReducer, on } from "@ngrx/store";
import { borrar, crear, editar, limpiarTodos, toggle, toggleAll } from "./todo.actions";
import { Todo } from "./models/todo.model";


const estadoInicial: Todo[] = [ 
    new Todo("Salvar al Mundo  "),
    new Todo("Salvar al Mundo 2"),
    new Todo("Salvar al Mundo 3"),
    new Todo("Salvar al Mundo 4"),
    new Todo("Salvar al Mundo 5"),

];


export const todoReducer = createReducer(
    estadoInicial ,
  on(crear, (state, { texto }) => [...state, new Todo( texto )]),
  on(limpiarTodos, (state) =>  state.filter(todo => !todo.completado)),
  on(borrar, (state, { id }) => state.filter( todo => todo.id !== id )),


  on(toggleAll, (state, { completado }) => {
    return state.map( todo => {
      return {
        ...todo, 
        completado: completado
      }
    })
  }),
  on(toggle, (state, { id }) => {
    return state.map( todo => {
      if(todo.id === id) {
        return {
          ...todo, 
          completado: !todo.completado
        }
      }else {
        return todo
      }
   
    })
  }),
  
  on(editar, (state, { id, texto}) => {
    return state.map( todo => {
      if(todo.id === id) {
        return {
          ...todo, 
          texto: texto
        }
      }else {
        return todo
      }
   
    })
  }),

  

);
