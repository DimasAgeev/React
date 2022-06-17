import React from "react";
import "./App.css";
import { PostCardPage } from "./component/Pages/PostCardPage";
import { Heder } from "./component/Pages/Heder";
import { MainPage } from "./component/Pages/MainPages";
import { LoginPage } from "./component/Pages/LoginPage";
import { ConfirmationPage } from "./component/Pages/ConfirmationPage";
function App() {
  return (
    <>
      <Heder></Heder>
      <MainPage></MainPage>
      <PostCardPage></PostCardPage>
      <LoginPage></LoginPage>
      <ConfirmationPage></ConfirmationPage>
    </>
  );
}

export default App;
