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
