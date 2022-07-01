import styled from "@emotion/styled";
export const PostsContainer = styled.div`
  display: flex;
  max-width: 100%;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 2rem;
  margin-bottom: 3rem;
  position: relative;
  :after {
    display: flex;
    position: absolute;
    content: "";
    top: -3%;
    left: 0;
    width: 100%;
    border: 0.1px solid #dadada;
    background-color: #dadada;
  }
`;
export const PostContentContainer = styled.div`
  position: relative;
  padding-top: 1rem;
  :after {
    display: flex;
    position: absolute;
    content: "";
    bottom: -5%;
    left: 0;
    width: 100%;
    border: 0.1px solid #dadada;
    background-color: #dadada;
  }
`;
export const PostImage = styled.img`
  max-height: 246px;
  width: 100%;
  margin: auto;
  border-radius: 0.5rem;
  object-fit: cover;
  position: relative;
`;
export const PostTitle = styled.h3`
  margin: 0;
  font-size: calc(10px + 2vmin);
`;
export const PostContent = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
`;
export const PostContentText = styled.p`
  font-size: calc(8px + 1vmin);
  text-overflow: ellipsis;
  width: 20vw;
  white-space: nowrap;
  overflow: hidden;
`;
export const PostFooter = styled.div`
  display: flex;
  font-size: calc(4px + 1vmin);
  justify-content: start;
`;
export const PostFooterText = styled.p`
  font-size: calc(1px + 1vmin);
`;
