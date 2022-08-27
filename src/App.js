import { useState } from 'react'
import { nanoid } from 'nanoid'

const App = () => {
  const [tasks, settasks] = useState([]);
  const [task, settask] = useState({
    name: "",
    description: ""
  })

  const deleteHandler = (id) => {
    const filteredTasks = tasks.filter((task) => task.id !== id);
    settasks(filteredTasks);
  }

  const changeHandler = (event) => {
    settask({ ...task, [event.target.name]: event.target.value });
    // console.log(task)
  }

  const submitHandler = (event) => {
    event.preventDefault();
    let t = { ...task, id: nanoid() };
    settasks([...tasks, t]);
    console.log(tasks);
  }

  let tasklist = (
    <h3 className="text-danger text-center">
      No tasks found!!
    </h3>
  );
  if (tasks.length > 0) {
    tasklist = tasks.map((task) => (
      <li
        key={task.id}
        className="list-group-item d-flex justify-content-between align-items-center mb-3"
      >
        {task.name} | {task.description}
        <span onClick={() => deleteHandler(task.id)}>
          ❌
        </span>
      </li>
    ))
  }


  return (
    <div className="container mt-5 text-danger">
      <h3>To Do App React 📕</h3>
      <form onSubmit={submitHandler}>
        <input className="form-control w-25 mt-3 mb-3"
          placeholder="eg.honey"
          onChange={changeHandler}
          name="name"
          vaue={task.name}
          type="text"
        />

        <input className="form-control w-25 mt-3 mb-3"
          placeholder="eg.1 kg"
          name="description"
          onChange={changeHandler}
          vaue={task.description}
          type="text"
        />
        <button className="btn btn-primary">
          Add Task
        </button>
      </form>
      <hr />
      <h3 className="mb-3">Registered tasks ...</h3>
      <ul className="list-group w-50">
        {tasklist}
      </ul>
    </div>
  )
}

export default App