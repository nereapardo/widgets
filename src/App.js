import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";

const items = [
  { title: "What is Raect?", content: "Raect is a fronend js framework" },
  { title: "Why use react?", content: "Raect is great" },
  {
    title: "How do you use React?",
    content: "You use Raet by creating components",
  },
];

const options = [
  {
    label: "The color red",
    value: "red",
  },
  {
    label: "The color green",
    value: "green",
  },
  {
    label: "The color blue",
    value: "blue",
  },
];

const App = () => {
  return (
    <div>
      <Translate />
    </div>
  );
};
export default App;
