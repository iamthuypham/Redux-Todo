import { 
  ADD,
  HANDLE_CHANGE,
  COMPLETE,
  REMOVE
} from '../actions';

export default (state = {input : '', todos : []}, {type, value, input, index}) => {
  switch (type) {
    case ADD:
      return {
        input: '',
        todos: [
          ...state.todos, 
          {
            value,
            complete: false
          }
        ]
      };
    case HANDLE_CHANGE:
      return {
        ...state,
        input
      }
    case COMPLETE:
      return {
        ...state,
        todos: [
          ...state.todos.slice(0, index),
          {
            ...state.todos[index],
            complete: !state.todos[index].complete
          },
          ...state.todos.slice(index + 1)
          ]
        }
    case REMOVE:
      return {
        ...state,
        todos: [
          ...state.todos.slice(0, index),
          ...state.todos.slice(index + 1)
          ]
        }
    default:
      return state
  }
};
