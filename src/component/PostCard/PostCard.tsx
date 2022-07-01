import { PostType } from "./types";

import {
  PostContentContainer,
  PostImage,
  PostTitle,
  PostContent,
  PostFooter,
  PostContentText,
} from "./styledPostCard";
export function PostCard({ postImage, postText, postDate }: PostType) {
  return (
    <PostContentContainer>
      {postImage ? <PostImage src={postImage} /> : null}
      <PostFooter>{postDate}</PostFooter>
      <PostContentText>{postText}</PostContentText>
      <PostFooter>Тут будут иконки</PostFooter>
    </PostContentContainer>
  );
}
