import styled from "@emotion/styled";
export const PostNavBarContainer = styled.div`
  max-width: 100%;
  justify-content: center;
  margin-bottom: 2rem;
  position: relative;
  :after {
    display: flex;
    position: absolute;
    content: "";
    bottom: -7%;
    left: 0;
    width: 100%;
    border: 0.1px solid #dadada;
    background-color: #dadada;
  }
`;

export const PostNavBarImage = styled.img`
  height: 50px;
  flex: 1;
  margin: 0;
  object-fit: cover;
`;
export const PostNavBarContentText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  font-size: calc(4px + 1vmin);
  width: 70vw;
  max-height: 70px;
  overflow: hidden;
  margin-bottom: 0.5rem;
  font-weight: 600;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -moz-box;
  -moz-box-orient: vertical;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  line-clamp: 4;
  box-orient: vertical;
`;
export const PostNavBarContent = styled.div`
  display: flex;
  margin-top: 0.5rem;
  gap: 1rem;
`;
export const PostNavBarFooter = styled.p`
  font-size: calc(3px + 1vmin);
  color: #8d8e97;
`;

export const PostFooter = styled.div`
  display: flex;
  margin-top: 1rem;
  justify-content: end;
`;
export const PostFooterText = styled.p`
  font-size: calc(5px + 1vmin);
`;
