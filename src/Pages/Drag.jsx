import { useState } from "react";
export function Drag() {
  const [items, setItems] = useState(["Item 1", "Item 2", "Item 3", "Item 4"]);

  function handleDragStart(e, index) {
    e.dataTransfer.setData("index", index);
  }

  function handleDragOver(e) {
    e.preventDefault();
  }

  function handleDrop(e, newindex) {
    const newItems = [...items];
    const dragIndex = e.dataTransfer.getData("index");
    const dragged = newItems.splice(dragIndex, 1)[0];
    newItems.splice(newindex, 0, dragged);
    setItems(newItems);
  }

  return (
    <div>
      <ol>
        {items.map((item, index) => (
          <li
            key={index}
            draggable
            onDragStart={(e) => {
              handleDragStart(e, index);
            }}
            onDragOver={handleDragOver}
            onDrop={(e) => {
              handleDrop(e, index);
            }}
          >
            {item}
          </li>
        ))}
      </ol>
    </div>
  );
}

/*
### **Question 8**

Build a simple drag-and-drop interface that allows users to reorder a
 list of items through drag-and-drop. Implement a visual cue to indicate
  the new position of the dragged item. Use React state, components and
   hooks to manage the list’s data and user interactions.
*/
