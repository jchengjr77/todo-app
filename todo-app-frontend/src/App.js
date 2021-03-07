import './App.css';
import React, { useEffect } from 'react';

// easypeasy imports
import { useStoreActions } from 'easy-peasy';

// component imports
import { Text } from '@geist-ui/react';
import AddTodoButton from './components/AddTodoButton';
import DisplayToggle from './components/DisplayToggle';
import Todos from './components/Todos';

function App() {
  // const [todoList, setTodoList] = useState();
  // const [showCompleted, setShowCompleted] = useState(false);

  const fetchTodos = useStoreActions((actions) => actions.fetchTodos);

  // fetching the async/await way
  /*
  async function fetchTodos() {
    try {
      const response = await fetch('/todos').then((res) => (res = res.json()));
      setTodoList(response);
    } catch (e) {
      console.error(e);
    }
  }
  */

  // We just want to show you the alternate way to "fetch": (called promise-chaining)
  /*
    function syncFetchTodos() {
      fetch('/todos')
        .then((res) => {
          setTodoList(res.json());
        })
        .catch((e) => console.error(e));
    }
  */

  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  return (
    <div className='App'>
      <Text h1>Todo App</Text>
      <AddTodoButton />
      {/* <DisplayToggle toggleHandler={setShowCompleted} />
      <Grid.Container gap={2} justify='center'>
        {todoList
          ? todoList.map((todo) => {
              if (todo.completed === showCompleted) {
                return (
                  <Grid>
                    <TodoItem todo={todo} />
                  </Grid>
                );
              }
              return null;
            })
          : null}
      </Grid.Container> */}
      <DisplayToggle />
      <Todos />
    </div>
  );
}

export default App;
