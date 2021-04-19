import * as React from 'react';

// import components
import { Card, Tag, Text } from '@geist-ui/react';

// import interfaces
import { Todo } from '../store/store';

// props interface
interface TodoItemProps {
  todo: Todo;
}

const TodoItem = (props: TodoItemProps) => {
  let { todo } = props;

  return (
    <Card
      hoverable
      type={todo.completed ? 'lite' : 'cyan'}
      className="todo-tile"
    >
      <Text h4>{todo.task}</Text>
      <Card.Footer>
        <Text p>Due: {todo.due}</Text>
        <Tag>ID: {todo.id}</Tag>
      </Card.Footer>
    </Card>
  );
};

export default TodoItem;
