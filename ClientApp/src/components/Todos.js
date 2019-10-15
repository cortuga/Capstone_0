import React, { useState } from "react"
import axios from "axios"

export default function Todos() {
  const [newTodo, setNewTodo] = useState("")
  const [todos, setTodos] = useState([{ id: 1, text: "default_todos_text" }])

  function handleNewTodoChange(e) {
    setNewTodo(e.target.value)
  }

  const handleNewTodo = e => {
    e.preventDefault() //grabs the current state of newTodo
    if (newTodo === "") return //if newtodo is empty then return and do nothing

    setTodos(prev => {
      prev.push({ id: Date.now(), text: newTodo })
      return [...prev]
    })

    // e.target.reset() //resets the form
    // console.log(newTodo)
  }

  function removeTodo(id) {
    // e.preventDefault()
    setTodos(todos.filter(todo => todo.id !== id))

    // console.log(todo.id, id)
  }

  const PostTodos = async () => {
    const resp = await axios.post("https://localhost:5001/api/Todo")
  }

  // const fetchUnicorn = async () => {
  //   const resp = await axios.get('swagger url')
  //   console.log(resp.data or whatever)

  //   setState (resp.data)
  // }

  return (
    <>
      <h1 class='has-text-centered subtitle'>Todos</h1>
      <form class='section' onSubmit={handleNewTodo}>
        <input
          class='input is-rounded'
          placeholder='Your todo...'
          onChange={handleNewTodoChange}
        ></input>
        <input class='button' type='submit' value='Submit' />
      </form>
      <ul class='container'>
        {todos.map(todo => (
          <li key={todo.id} className='todo-li'>
            {todo.text}
            <button class='button' onClick={() => removeTodo(todo.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>

      <section class='section'>
        <h1 class='subtitle has-text-centered'>Past Todos</h1>
      </section>
    </>
  )
}
