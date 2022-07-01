import { PostCard } from "../PostCard/PostCard";
import { Objects } from "../Data/Data";
import { PostsContainer } from "../PostCard/styledPostCard";
import { Container } from "../Pages/styledContainer";
import { Section } from "./styledSection";
export const PostCardPage = () => {
  return (
    <PostsContainer>
      {Objects.map((el) => (
        <PostCard postImage={el.image} postText={el.text} postDate={el.date} />
      ))}
    </PostsContainer>
  );
};
