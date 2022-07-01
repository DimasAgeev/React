import {
  HederWrapper,
  HederBurger,
  HederSerchUserWrapper,
  HederSearch,
} from "./styledHeder";
import { ReactComponent as Burger } from "../../img/Burger.svg";
import { ReactComponent as Search } from "../../img/Search.svg";
import { ReactComponent as User } from "../../img/User.svg";
import { BtnHeder } from "../button/Btn";
import { Outlet, useNavigate } from "react-router-dom";
export const Heder = () => {
  // const { themeVariant, toggleTheme } = React.useContext(
  //   AppThemeControllerContext
  // );
  const navigate = useNavigate();
  return (
    <>
      <HederWrapper>
        <HederBurger>
          <BtnHeder
            imgObj={<Burger />}
            click={() => {
              navigate("confirmation");
            }}
          ></BtnHeder>

          {/* <NavButton onClick={toggleTheme}>
          {themeVariant === ThemeVariant.Light ? <Burger /> : <Search />}
          <Burger />
        </NavButton> */}
        </HederBurger>
        <HederSerchUserWrapper>
          <HederSearch>
            <Search />
          </HederSearch>
          <BtnHeder
            imgObj={<User />}
            click={() => {
              navigate("sign_in");
            }}
          ></BtnHeder>
        </HederSerchUserWrapper>
      </HederWrapper>
      <Outlet />
    </>
  );
};
