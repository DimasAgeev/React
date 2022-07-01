import { LearnMoreBtn } from "../button/LearnMoreBtn";
import { Section } from "../Pages/styledSection";
import { Container } from "../Pages/styledContainer";
import { TextContent } from "../../component/text/ContentText";
import { Outlet, useNavigate } from "react-router-dom";
import { TextHeder } from "../../component/text/HederText";
import { Btn } from "../button/Btn";
import {
  MainConteiner,
  Main,
  MainHeder,
  MainContent,
} from "../Pages/styledMainPage";
export const MainPage = () => {
  const navigate = useNavigate();
  return (
    <Section>
      <Container>
        <MainConteiner>
          <Main>
            <MainHeder>
              <TextHeder title="Make your blog Online"></TextHeder>
            </MainHeder>
            <MainContent>
              <TextContent
                content="Note that the development build is not optimized.
To create a production build, use npm run build."
              ></TextContent>
            </MainContent>
            <Btn
              title="Learn More"
              click={() => {
                navigate("information");
              }}
            ></Btn>
          </Main>
        </MainConteiner>
      </Container>
      <Outlet />
    </Section>
  );
};
