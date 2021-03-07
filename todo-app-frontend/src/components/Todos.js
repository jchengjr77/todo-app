import React from 'react';
import { Grid } from '@geist-ui/react';
import TodoItem from './TodoItem';

// easypeasy store
import { useStoreState } from 'easy-peasy';

const Todos = () => {
  const todoList = useStoreState((state) => state.todos);
  const showCompleted = useStoreState((state) => state.showCompleted);

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
