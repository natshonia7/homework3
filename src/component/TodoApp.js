import Button from "./Button";
import { useEffect, useRef, useState } from "react";

const _todoItems = [
  { id: 1, text: "Text 1", completed: true },
  { id: 2, text: "Text 2", completed: false },
  { id: 3, text: "Text 3", completed: true },
];

export default function TodoApp() {
  const [inputValue, setInputValue] = useState();
  const [todoItems, setTodoItems] = useState(_todoItems)
  const input=useRef()

  console.log(input.current)

  useEffect(()=>{
    input.current.focus()
    
  }, [])

  function handleSubmit(e){
     e.preventDefault()
     let todoItem={
        id: Date.now(), text : inputValue, completed : false
     }
     setInputValue('')
     setTodoItems([...todoItems, todoItem])
  }

  function checking(id){
    const changedArray=todoItems.map(item=>{
      if(item.id === id){
        item.completed =!item.completed
      }
      return item
    }) 
     setTodoItems(changedArray)
  }


  function handleRemoveItem(text){
    const name=todoItems.map(item=>{
      if(item.text===text){
         item.text=!item.text
      }
      return item
    })
    setTodoItems(name)
  }


  
  return (
    <div className="Counter">
      <h3>Todo App</h3>

      <form onSubmit={handleSubmit}>
        <input type="text"
         ref={input}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <Button type="submit" text="Add Item" />
      </form>

      <ul className="ul">
        {todoItems.map((item, index) => {
          return (
            <li key={index} className="lists">
              <input type="checkbox" checke={item.completed} onChange={()=> checking(item.id)} />
              <span>{item.text}</span>
              <Button text={"Delete"} onClick={()=>handleRemoveItem(item.text)}  />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
