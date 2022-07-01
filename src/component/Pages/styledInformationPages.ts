import styled from "@emotion/styled";

export const InformationWrapper = styled.div`
  display: flex;
  height: 87vh;
  width: 100%;
  justify-content: space-between;
  margin: 1rem;
  padding: 1rem;
  background: linear-gradient(70deg, #fff, #39a6d6);
  border-radius: 1rem;
  gap: 1rem;
`;
export const InformationContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 70%;
  align-items: flex-start;
  background: linear-gradient(70deg, #fff, #39a6d6);
  border-radius: 1rem;
  padding: 1rem;
  overflow: auto;
`;
export const InformationNavWrapper = styled.div`
  flex: 1;
  gap: 1rem;
  padding: 1rem;
  overflow: auto;
`;
export const InformationContentMain = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;
export const InformationContentLink = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
  margin-left: 2.5rem;
  position: relative;

  :after {
    position: absolute;
    content: "";
    left: -15%;
    bottom: -40%;
    opacity: 1;
    width: 45rem;
    border: 0.1px solid #dadada;
    background-color: #dadada;
    transition: 0.3s;
    z-index: 0;
  }
`;
export const InformationContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
