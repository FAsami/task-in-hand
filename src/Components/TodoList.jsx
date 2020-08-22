import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ items, onDelete, onEdit }) {
  if (items.length === 0)
    return <p className="text-center py-3">Nothing to do</p>;
  return (
    <div>
      <h3 className="text-center mt-4">
        Todo <span className="badge badge-secondary"> {items.length}</span>
      </h3>
      {items.map((item) => (
        <TodoItem
          key={item.id}
          item={item}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
}

export default TodoList;
