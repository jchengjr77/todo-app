import { createStore, action, thunk } from 'easy-peasy';

const store = createStore({
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
    const todos = await fetch('/todos').then((res) => (res = res.json()));
    actions.setTodos(todos);
  }),
});

export default store;
