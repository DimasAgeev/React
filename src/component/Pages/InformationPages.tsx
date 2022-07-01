import { Objects } from "../Data/Data";
import { PostNavBarCard } from "../PostCard/PostCardNavBar";
import {
  InformationWrapper,
  InformationContentWrapper,
  InformationNavWrapper,
  InformationContentMain,
  InformationContentLink,
  InformationContent,
} from "../Pages/styledInformationPages";
import { PostLink } from "../Links/Link";
import { TextHeder } from "../text/HederText";
import { Container } from "./styledContainer";
import { Section } from "./styledSection";
import { Outlet } from "react-router-dom";
export const InformationPage = () => {
  return (
    <Section>
      <Container>
        <InformationWrapper>
          <InformationContentWrapper>
            <InformationContentMain>
              <TextHeder title="Information"></TextHeder>
            </InformationContentMain>
            <InformationContentLink>
              <PostLink title="All" to={"/information/AllCard"}></PostLink>
              <PostLink
                title="My favorites"
                to={"/information/AllCard"}
              ></PostLink>
              <PostLink title="Popular" to={"/information/AllCard"}></PostLink>
            </InformationContentLink>
            <InformationContent>
              <Outlet />
            </InformationContent>
          </InformationContentWrapper>
          <InformationNavWrapper>
            {Objects.map((el) => (
              <PostNavBarCard
                postImage={el.image}
                postText={el.text}
                postDate={el.date}
              />
            ))}
          </InformationNavWrapper>
        </InformationWrapper>
      </Container>
    </Section>
  );
};
