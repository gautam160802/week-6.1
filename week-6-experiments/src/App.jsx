// import { useState } from "react";

const { useState } = require("react");

// function App() {
//   return (
//     <div>
//       <HeaderWithButton />
//       <Header title="Harkirat1"></Header>
//       <Header title="Harkirat2"></Header>
//       <Header title="Harkirat2"></Header>
//       <Header title="Harkirat2"></Header>
//       <Header title="Harkirat2"></Header>
//     </div>
//   );
// }

// function HeaderWithButton() {
//   const [title, setTitle] = useState("my name is gautam");
//   function updateTitle() {
//     setTitle("my name is" + Math.random());
//   }
//   return (
//     <div>
//       <button onClick={updateTitle}>Update the title</button>
//       <Header title={title}></Header>
//     </div>
//   );
// }

// function Header({ title }) {
//   return <div>{title}</div>;
// }

// export default App;

// use memo

// import React, { useState } from "react";

// function App() {
//   const [title, setTitle] = useState("my name is harkirat");
//   function updateTitle() {
//     setTitle("my name is " + Math.random());
//   }

//   return (
//     <div>
//       <button onClick={updateTitle}>Update the title</button>
//       <Header title={title}></Header>
//       <Header title={title}></Header>
//       <Header title="harkirat2"></Header>
//       <Header title="harkirat2"></Header>
//       <Header title="harkirat2"></Header>
//       <Header title="harkirat2"></Header>
//       <Header title="harkirat2"></Header>
//     </div>
//   );
// }

// const Header = React.memo(function Header({ title }) {
//   return <div>{title}</div>;
// });

// export default App;

// going to create a new todo

import React, { Fragment } from "react";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "go to gym",
      description: "go to gym today",
    },
    {
      id: 1,
      title: "go to mess",
      description: "go to mess today",
    },
    {
      id: 1,
      title: "go to class",
      description: "go to gclass today",
    },
  ]);
  return (
    <div>
      <button>Add a todo</button>
      {todos.map((todo) => (
        <Todo title={todo.title} description={todo.description} />
      ))}
    </div>
  );
}

function Todo({ title, description }) {
  return (
    <div>
      <h1>{title}</h1>
      <h5>{description}</h5>
    </div>
  );
}

export default App;
