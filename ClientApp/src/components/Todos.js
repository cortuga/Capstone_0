import React, { useState, useEffect } from "react"
import axios from "axios"

export default function Todos() {
  const [newTodo, setNewTodo] = useState("")
  const [todos, setTodos] = useState([
    { id: 1, text: "Something you need to remember / get done  " }
  ])
  const [pastTodos, setPastTodos] = useState([])

  function handleNewTodoChange(e) {
    setNewTodo(e.target.value)
  }

  const handleNewTodo = e => {
    e.preventDefault() //grabs the current state of newTodo
    if (newTodo === "") return //if newtodo is empty then return and do nothing
    const _newTodo = { text: newTodo }

    PostTodos(_newTodo)

    e.target.reset() //resets the form
    // console.log(newTodo)
  }

  function removeTodo(id) {
    // e.preventDefault()
    DeleteTodos(id)
    setTodos(todos.filter(todo => todo.id !== id))
    // console.log(todo.id, id)
  }

  const DeleteTodos = async todoId => {
    const resp = await axios.delete(`https://localhost:5001/api/Todo/${todoId}`)
    console.log(resp)
  }

  const PostTodos = async newToDoItem => {
    const resp = await axios
      .post("https://localhost:5001/api/Todo", newToDoItem)
      .then(resp => {
        setTodos(prev => {
          prev.push(resp.data)
          return [...prev]
        })
        console.log(resp)
      })
  }

  const GetTodos = async () => {
    const resp = await axios.get("https://localhost:5001/api/Todo")
    console.log(resp.data)
    setTodos(resp.data)
  }

  useEffect(() => {
    PostTodos()
    GetTodos()
  }, [])

  return (
    <>
      <h1 class='has-text-centered subtitle'>Todos</h1>
      <form class='section' onSubmit={handleNewTodo}>
        <section class='container'>
          <input
            class='input is-rounded'
            placeholder='Your todo...'
            onChange={handleNewTodoChange}
          ></input>
        </section>
        <section class='section has-text-right'>
          <input class='button' type='submit' value='Submit' />
        </section>
      </form>
      <ul class='container has-text-centered'>
        {todos.map(todo => (
          <li key={todo.id} className='todo-li'>
            {todo.text}
            <div>
              <button
                class='button is-primary is-small'
                onClick={() => removeTodo(todo.id)}
              >
                Done
              </button>
            </div>
          </li>
        ))}
      </ul>

      {/* <section class='section'>
        <h1 class='subtitle has-text-centered'>Past Todos</h1>
        <div>
          {pastTodos.map((ele, i) => {
            return (
              <ul key={i}>
                <li class='list'>{ele.pastTodos}</li>
              </ul>
            )
          })}
        </div>
      </section> */}
    </>
  )
}
