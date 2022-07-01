import { PostType } from "./types";
import {
  PostNavBarContainer,
  PostNavBarImage,
  PostNavBarContentText,
  PostNavBarContent,
  PostNavBarFooter,
} from "../PostCard/styledPostCardNavBar";
export function PostNavBarCard({ postImage, postText, postDate }: PostType) {
  return (
    <PostNavBarContainer>
      <PostNavBarContent>
        <PostNavBarContentText>
          <PostNavBarFooter>{postDate}</PostNavBarFooter>
          {postText}
        </PostNavBarContentText>
        {postImage ? <PostNavBarImage src={postImage} /> : null}
      </PostNavBarContent>
      <PostNavBarFooter>Тут будут иконки</PostNavBarFooter>
    </PostNavBarContainer>
  );
}
