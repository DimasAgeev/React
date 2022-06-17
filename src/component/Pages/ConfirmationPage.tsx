import {
  ConfirmationConteiner,
  ConfirmationContent,
  ConfirmationHeder,
  ConfirmationDetailContent,
  ConfirmationFootter,
} from "./styledConfirmation";
import { Container } from "./styledContainer";
import { TextContent } from "../text/ContentText";
import { TextHeder } from "../text/HederText";
import { HomeBtn } from "../button/HomeBtn";
import { Section } from "./styledSection";
export const ConfirmationPage = () => {
  return (
    <Section>
      <Container>
        <ConfirmationConteiner>
          <ConfirmationContent>
            <ConfirmationHeder>
              <TextHeder title="Registration Confirmation"></TextHeder>
            </ConfirmationHeder>
            <ConfirmationDetailContent>
              <TextContent
                content="Please active your accaunt with the activation link in the email
                dimasagee@gmail.com. Please check your email."
              ></TextContent>
            </ConfirmationDetailContent>
            <ConfirmationFootter>
              <HomeBtn></HomeBtn>
            </ConfirmationFootter>
          </ConfirmationContent>
        </ConfirmationConteiner>
      </Container>
    </Section>
  );
};
