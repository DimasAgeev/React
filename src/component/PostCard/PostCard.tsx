import { PostCardProps } from "./types";

import {
  PostContentContainer,
  PostImage,
  PostTitle,
  PostContent,
  PostFooter,
} from "./styled";
export function PostCard({ post }: PostCardProps) {
  return (
    <PostContentContainer>
      {post.image ? <PostImage src={post.image} /> : null}
      <PostTitle>{post.title}</PostTitle>
      <PostContent>{post.text}</PostContent>
      <PostFooter>{post.date}</PostFooter>
    </PostContentContainer>
  );
}
