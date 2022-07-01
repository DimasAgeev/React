import { Route, Routes } from "react-router-dom";
import { MainPage } from "../Pages/MainPages";
import { Heder } from "../Pages/Heder";
import { LoginPage } from "../Pages/LoginPage";
import { AppRoute } from "../enums/roter";
import { PostCardPage } from "../Pages/PostCardPage";
import { InformationPage } from "../Pages/InformationPages";
import { ConfirmationPage } from "../Pages/ConfirmationPage";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path={AppRoute.Main} element={<Heder />}>
        <Route index element={<MainPage />}></Route>

        <Route path={AppRoute.Information} element={<InformationPage />}>
          <Route path="AllCard" element={<PostCardPage />}></Route>
          <Route path="AllCard" element={<PostCardPage />}></Route>
        </Route>

        <Route path={AppRoute.Login} element={<LoginPage />}></Route>
        <Route
          path={AppRoute.Confirmation}
          element={<ConfirmationPage />}
        ></Route>
      </Route>
    </Routes>
  );
};
