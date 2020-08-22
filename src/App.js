import React, { useState } from 'react';
import TodoInput from './Components/TodoInput';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoList from './Components/TodoList';
const { v4: uuidv4 } = require('uuid');

export default function App() {
  const [currentInputValue, setCurrentInputValue] = useState('');
  const [items, setItems] = useState([]);
  const [editItem, setEditItem] = useState(false);

  function handleChange(e) {
    setCurrentInputValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setEditItem(false);
    setItems([...items, { title: currentInputValue, id: uuidv4() }]);
    setCurrentInputValue('');
  }
  function handleDelete(id) {
    setItems(items.filter((item) => item.id !== id));
  }
  function handleEdit(id) {
    const item = items.find((item) => item.id === id);
    setItems(items.filter((item) => item.id !== id));
    setCurrentInputValue(item.title);
    setEditItem(true);
  }
  function handleClearList() {
    setItems([]);
  }
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-10 col-md-8 mt-4 mx-auto">
            <TodoInput
              currentInputValue={currentInputValue}
              items={items}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              editItem={editItem}
            />
            <TodoList
              items={items}
              onDelete={handleDelete}
              onEdit={handleEdit}
              onClear={handleClearList}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// function TodoInput({
//   item,
//   handleChange,
//   handleSubmit,
//   items,
//   handleDelete,
//   handleEdit,
// }) {
//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         Input : <input type="text" value={item} onChange={handleChange} />
//         <input type="submit" value="Submit" />
//       </form>
//       <p>Current value :{item} </p>
//       {items.map((item) => (
//         <p key={item.id}>
//           Value : {item.title}
//           <button onClick={() => handleDelete(item.id)}>Del</button>
//           <button onClick={() => handleEdit(item.id)}>Edit</button>
//         </p>
//       ))}
//     </div>
//   );
// }
