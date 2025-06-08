// import { useState } from "react";

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

// import React, { Fragment } from "react";
// import { useState } from "react";
// let counter = 4;

// function App() {
//   const [todos, setTodos] = useState([
//     {
//       id: 1,
//       title: "go to gym",
//       description: "go to gym today",
//     },
//     {
//       id: 2,
//       title: "go to mess",
//       description: "go to mess today",
//     },
//     {
//       id: 3,
//       title: "go to class",
//       description: "go to class today",
//     },
//   ]);

//   function addTodo() {
//     setTodos([
//       ...todos,
//       {
//         id: counter++,
//         title: Math.random(),
//         description: Math.random(),
//       },
//     ]);
//   }

//   return (
//     <div>
//       <button onClick={addTodo}>Add a todo</button>
//       {todos.map((todo) => (
//         <Todo key={todo.id} title={todo.title} description={todo.description} />
//       ))}
//     </div>
//   );
// }

// function Todo({ title, description }) {
//   return (
//     <div>
//       <h1>{title}</h1>
//       <h5>{description}</h5>
//     </div>
//   );
// }

// export default App;

// Eros (Wrapper Components)

// function App() {
//   return (
//     <div>
//       <CardWrapper innerComponent={<TextComponent />} />
//       <CardWrapper innerComponent={<TextComponent2 />} />
//     </div>
//   );
// }

// function TextComponent() {
//   return <div>hi there</div>;
// }
// function TextComponent2() {
//   return <div>hi there222</div>;
// }

// function CardWrapper({ innerComponent }) {
//   return (
//     <div style={{ border: "2px solid black", padding: 20 }}>
//       {innerComponent}
//     </div>
//   );
// }

// export default App;

// real wrapper

function App() {
  return (
    <div>
      <CardWrapper>
        <div>hi there</div>
      </CardWrapper>
      <CardWrapper>
        <div>hello there</div>
      </CardWrapper>
    </div>
  );
}

function CardWrapper({ children }) {
  return (
    <div style={{ border: "2px solid black", padding: 20 }}>{children}</div>
  );
}

export default App;
