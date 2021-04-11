import uuid from 'uuid';

export default function manageTodo(state = {
    todos: [],
  }, action) {
    switch (action.type) {
      case 'ADD_TODO':
        const todo = {
            id: uuid(),
            text: action.payload.text
          }
          return { todos: state.todos.concat(todo) };
    case 'DELETE_TODO':
        // let idx = state.todos.findIndex(p => p.id === action.todo.id)
        
        // return { 
        //     ...state, 
        //     todos: [...state.todos.slice(0, idx), ...state.todos.slice(idx + 1)]
        // }

        return {todos: state.todos.filter(todo => todo.id !== action.payload)}


      default:
        return state;
    }
  }
  