import { useState } from "react";

function App() {
  //input's default value is empty
  const [toDo, setToDo] = useState("");
  //if user send content, we save in this state
  const [toDos, setToDos] = useState([]);
  //updating input UI
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    // if user send empty, we dont' update to-do-list. return nothing
    if (toDo === ""){
      return;
    }
    /* we don't modity State DIRECTLY
    instead, use Modifier function */
    // accumulate entered to-dos to array
    setToDos((currentArray) => [toDo, ...currentArray]);
    // the function which modify input to empty
    setToDo("");
  };
  return (
    <div className="App">
      <h1>My To-Do-List ({toDos.length})</h1>
      <span>
        <b>Warning!</b>
        &nbsp;This Lists are not going to be saved.
        <br />
        if you refresh the page, all lists will be vanish.
      </span>
      <form onSubmit={onSubmit}>
        <input 
          onChange={onChange}
          value={toDo} 
          type="text" 
          placeholder="Write your to do..." 
        />
        <button>Add To Do</button>
      </form>
      <hr />
      {toDos.map((item, index) => 
        <ul 
          key = {index}
          >
          {item}
        </ul>
      )}
    </div>
  );
}

export default App;
