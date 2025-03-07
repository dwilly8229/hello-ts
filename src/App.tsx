import React from "react";
import Todo from "./Components/Todo";

const myTodoItems = [
  {
    id: 1,
    title: "I need strength",
  },
  {
    id: 2,
    title: "I need muscles",
  },
  {
    id: 3,
    title: "I need Speed",
  },
];
const App: React.FC = () => {
  return (
    <div>
      <Todo items={myTodoItems} />
    </div>
  );
};

export default App;
