import { createStore, action, thunk, createTypedHooks } from 'easy-peasy';
import { Action, Thunk } from 'easy-peasy';

// interface
export interface Todo {
  id: Number;
  completed: Boolean;
  task: String;
  due: String;
}

export interface StoreModel {
  todos: Todo[];
  setTodos: Action<StoreModel, Todo[]>;
  showCompleted: Boolean;
  toggleShowCompleted: Action<StoreModel, Boolean>;
  fetchTodos: Thunk<StoreModel, any>;
}

const typedHooks = createTypedHooks<StoreModel>();

const store = createStore<StoreModel>({
  todos: [],
  setTodos: action((state, payload) => {
    state.todos = payload;
  }),
  showCompleted: false,
  toggleShowCompleted: action((state, payload) => {
    if (typeof payload !== 'boolean') {
      throw Error('Invalid showCompleted value');
    }
    state.showCompleted = payload;
  }),
  fetchTodos: thunk(async (actions, _) => {
    const todos = await fetch('/todos').then((res:Response) => (res.json()));
    actions.setTodos(todos);
  }),
});

export default store;
export {typedHooks};