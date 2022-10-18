import React from "react";
import { createGlobalStyle } from "styled-components";

import TodoTemplate  from "./components/TodoTemplate";
import TodoHead from "./components/TodoHead";
import TodoList from "./components/TodoList";
import TodoCreate from "./components/TodoCreate";
import { TodoProvider } from "./TodoContext";

import img1 from "./img/img1.jpg";
import img2 from "./img/img2.jpg";
import img3 from "./img/img3.jpg";
import img4 from "./img/img4.jpg";
import img5 from "./img/img5.jpg";
import img6 from "./img/img6.jpg";
import img7 from "./img/img7.jpg";
import img8 from "./img/img8.jpg";
import img9 from "./img/img9.jpg";

const backgroundArr = [img1, img2, img3, img4, img5, img6, img7, img8, img9];
const randomIdx = Math.floor(Math.random() * backgroundArr.length);
const backgroundImg = backgroundArr[randomIdx];

const GlobalStyle = createGlobalStyle`
  body {
    /* background: #e9ecef; */
    background-image: url(${backgroundImg});
    margin:0px;
    width:100vw;
    height:100vh;
    background-size: cover;
    background-repeat: no-repeat;
  }
`;

function App() {
  return (
    <TodoProvider>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHead />
        <TodoList />
        <TodoCreate />
      </TodoTemplate>
    </TodoProvider>
  );
}

export default App;
