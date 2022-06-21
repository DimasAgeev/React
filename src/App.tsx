import React, { useState } from "react";
import "./App.css";
import { PostCardPage } from "./component/Pages/PostCardPage";
import { Heder } from "./component/Pages/Heder";
import { HederLogIn } from "./component/Pages/HederLogIn";
import { MainPage } from "./component/Pages/MainPages";
import { LoginPage } from "./component/Pages/LoginPage";
import { ConfirmationPage } from "./component/Pages/ConfirmationPage";
function App() {
  const [isLogIn, setIsLogIn] = useState(false);
  return (
    <>
      {isLogIn ? (
        <>
          <Heder></Heder>
          <MainPage></MainPage>
          <PostCardPage></PostCardPage>
          <ConfirmationPage></ConfirmationPage>
        </>
      ) : (
        <>
          <HederLogIn></HederLogIn>
          <LoginPage setIsLogIn={setIsLogIn}></LoginPage>
        </>
      )}
    </>
  );
}

export default App;
