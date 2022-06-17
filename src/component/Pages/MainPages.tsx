import { LearnMoreBtn } from "../button/LearnMoreBtn";
import { Section } from "../Pages/styledSection";
import { Container } from "../Pages/styledContainer";
import { TextContent } from "../../component/text/ContentText";
import { TextHeder } from "../../component/text/HederText";
import {
  MainConteiner,
  Main,
  MainHeder,
  MainContent,
} from "../Pages/styledMainPage";
export const MainPage = () => {
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
            <LearnMoreBtn></LearnMoreBtn>
          </Main>
        </MainConteiner>
      </Container>
    </Section>
  );
};
