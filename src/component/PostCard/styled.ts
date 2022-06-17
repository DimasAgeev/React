import styled from "@emotion/styled";
export const PostsContainer = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

export const PostContentContainer = styled.div`
  flex-basis: calc(96% / 3);
  background: linear-gradient(180deg, #005ebe, #82aade);
  border-radius: 0.5rem;
  padding: 1rem;
`;
export const PostImage = styled.img`
  max-height: 200px;
  width: 100%;
  border-radius: 0.5rem;
  object-fit: cover;
`;
export const PostTitle = styled.h3`
  margin: 0;
  font-size: calc(10px + 2vmin);
`;
export const PostContent = styled.div`
  margin-top: 0.5rem;
`;
export const PostContentText = styled.p`
  font-size: calc(10px + 1vmin);
`;
export const PostFooter = styled.div`
  display: flex;
  margin-top: 1rem;
  justify-content: end;
`;
export const PostFooterText = styled.p`
  font-size: calc(5px + 1vmin);
`;
