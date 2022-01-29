import React from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";

const App = () => {
  const items = [
    { title: "What is Raect?", content: "Raect is a fronend js framework" },
    { title: "Why use react?", content: "Raect is great" },
    {
      title: "How do you use React?",
      content: "You use Raet by creating components",
    },
  ];
  return (
    <div>
      <Search />
    </div>
  );
};
export default App;
