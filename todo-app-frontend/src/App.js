import './App.css';

// component imports
import { Text } from '@geist-ui/react';
import AddTodoButton from './components/AddTodoButton';

function App() {
  return (
    <div className='App'>
      <Text h1>Todo App</Text>
      <AddTodoButton />
    </div>
  );
}

export default App;
