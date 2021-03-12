import React from 'react';
import { Grid } from '@geist-ui/react';
import TodoItem from './TodoItem';

// easypeasy store
import {typedHooks} from '../store/store';

const Todos = () => {
  const todoList = typedHooks.useStoreState((state) => state.todos);
  const showCompleted = typedHooks.useStoreState((state) => state.showCompleted);

  return (
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
    </Grid.Container>
  );
};

export default Todos;
