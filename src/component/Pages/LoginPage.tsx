import {
  LoginConteiner,
  LoginForm,
  LoginHeder,
  LoginContent,
  LoginFontter,
} from "./styledLoginPage";
import { Container } from "../Pages/styledContainer";
import { TextContent } from "../../component/text/ContentText";
import { TextHeder } from "../../component/text/HederText";
import { Inp } from "../input/input";
import { Section } from "./styledSection";
import { Btn } from "../button/Btn";
export const LoginPage = ({ setIsLogIn }: any) => {
  const logIn = () => {
    setIsLogIn(true);
  };
  return (
    <Section>
      <Container>
        <LoginConteiner>
          <LoginForm>
            <LoginHeder>
              <TextHeder title="Login | Registration"></TextHeder>
            </LoginHeder>
            <LoginContent>
              <Inp label="Email"></Inp>
              <Inp label="Password"></Inp>
              <Btn title="Login" click={logIn}></Btn>
            </LoginContent>
            <LoginFontter>
              <TextContent content="Fogot your password? Reset password"></TextContent>
            </LoginFontter>
          </LoginForm>
        </LoginConteiner>
      </Container>
    </Section>
  );
};
