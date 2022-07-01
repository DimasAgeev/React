import styled from "@emotion/styled";

export const HederWrapper = styled.div`
  display: flex;
  height: 60px;
  background: linear-gradient(70deg, #005ebe, #39a6d6);
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  /* color: white; */
  justify-content: space-between;
`;
export const HederLogWrapper = styled.div`
  display: flex;
  height: 60px;
  background: linear-gradient(70deg, #005ebe, #39a6d6);
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  color: white;
  justify-content: center;
`;
export const HederBurger = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  padding: 1rem;
`;
export const HederTheme = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  padding: 0.5rem;
`;
export const HederSerchUserWrapper = styled.div`
  display: flex;
  height: 100%;
`;
export const HederSearch = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  padding: 1rem;
  color: white;
`;
export const HederUser = styled.button`
  display: flex;
  height: 100%;
  align-items: center;
  padding: 1rem;
  background-color: inherit;
  border: none;
`;
export const HederLog = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  padding: 1rem;
`;

export const NavButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  color: ${({ theme: { colors } }) => colors.invertedText};
  height: 100%;
  padding: 20px;

  &:hover {
    background-color: rgb(255, 255, 255, 0.1);
  }

  &:active {
    background-color: rgb(255, 255, 255, 0.4);
  }

  svg {
    fill: ${({ theme: { colors } }) => colors.invertedText};
    height: 20px;
    width: 20px;
  }
`;
