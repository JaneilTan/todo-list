import { useFruits } from '../hooks/useFruits.ts'
import  AddTasks  from './AddTask.tsx'
import { Todo } from './todo.tsx'


function App() {
  return (
    <>
     <h1>To Do:</h1>
     <AddTasks />
     <Todo />
    </>
  )
}

export default App
