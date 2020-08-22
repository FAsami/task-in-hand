import React from 'react';
import { RiMenuAddLine } from 'react-icons/ri';
import { FcTodoList } from 'react-icons/fc';

function TodoInput({
  currentInputValue,
  editItem,
  handleChange,
  handleSubmit,
}) {
  return (
    <div className="card card-body">
      <h3 className="card-title d-flex align-items-center justify-content-center">
        <FcTodoList className="m-2" />
        Add Task
      </h3>
      <form onSubmit={handleSubmit}>
        <label className="sr-only" html="addItem">
          Add Task
        </label>
        <div className="input-group">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <RiMenuAddLine color="#000" />
            </div>
          </div>
          <input
            type="text"
            className="form-control"
            id="addItem"
            placeholder="Add task"
            value={currentInputValue}
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className={
            editItem
              ? 'btn btn-info btn-sm btn-block my-2'
              : 'btn btn-success btn-sm btn-block my-2'
          }
          disabled={currentInputValue.length <= 0 ? true : false}
        >
          {editItem ? 'Edit' : 'Add'}
        </button>
      </form>
    </div>
  );
}

export default TodoInput;
