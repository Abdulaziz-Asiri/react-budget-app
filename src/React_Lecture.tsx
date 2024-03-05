import React from "react";
import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import { TodoItem } from "./Todoitem"; // import the function we created in another file

function App() {
  const [tasks, setTasks] = useState(["Go to home", "get enoghe sleep"]);
  const [newTask, setNewTask] = useState(""); // setNewTask will set the value and newTask will return to handleAddTask then it will pushed to array.
  const [counter, setCounter] = useState(0);
  // To render to the DOM I USING  Map

  //handl button lesinter
  function handleAddTask(e) {
    e.preventDefault();
    // Take copy of the current array
    const newtasks = [...tasks, newTask];

    console.log("nreTaskw", newtasks);

    setTasks(newtasks);

    setCounter(counter + 1);

    console.log("counter", counter);
  }
  //hanld changing form input and pass it to the setNewTask
  const handleChange = (e) => {
    const vlaue = e.target.value;
    setNewTask(vlaue);

    console.log("Changging");
  };

  //Returning DOM
  return (
    <div className="App">
      <span>Budget App</span>
      <p>
        The more your money works for you, the less you have to work for money.
      </p>
      <form onSubmit={handleAddTask}>
        <ul>
          <input
            type="text"
            placeholder="Write you word"
            onChange={handleChange}
          ></input>
          <button type="submit"> Submit</button>
          {tasks.map((task) => {
            return <TodoItem title={task} key={task} />;
          })}
          <p>Number of Item: {counter}</p>
        </ul>
      </form>
    </div>
  );
}

export default App;
