import React from 'react';
import { RiDeleteBack2Fill } from 'react-icons/ri';
import { BiEdit } from 'react-icons/bi';

function TodoItem({ item, onEdit, onDelete }) {
  return (
    <div className="card card-body mb-2">
      <div className="d-flex bg-light align-items-center  px-3">
        <h4 className="card-title">{item.title}</h4>
        <BiEdit
          size="1.3rem"
          className="ml-auto"
          style={{ cursor: 'pointer' }}
          title="Edit item"
          onClick={() => onEdit(item.id)}
        />
        <RiDeleteBack2Fill
          color="#EA425C"
          size="1.3rem"
          style={{ cursor: 'pointer' }}
          title="Delete Item"
          onClick={() => onDelete(item.id)}
        />
      </div>
    </div>
  );
}

export default TodoItem;
