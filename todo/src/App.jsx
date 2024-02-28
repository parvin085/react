import React from 'react'
import Form from './components/form'
import Todos from './components/todos'

function App() {
  return (
    <div className='container'>
      <h1>To Do App</h1>
      <Form />
      <Todos />
    </div>
  )
}

export default App