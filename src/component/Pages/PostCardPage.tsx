import { PostCard } from "../PostCard/PostCard";
import { PostsContainer } from "../PostCard/styled";
import { Container } from "../Pages/styledContainer";
export const PostCardPage = () => {
  return (
    <Container>
      <PostsContainer>
        <PostCard post={Obj}></PostCard>
        <PostCard post={Obj}></PostCard>
        <PostCard post={Obj}></PostCard>
        <PostCard post={Obj}></PostCard>
        <PostCard post={Obj}></PostCard>
        <PostCard post={Obj}></PostCard>
      </PostsContainer>
    </Container>
  );
};

const Obj = {
  id: 1,
  image:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRPMTRCBCHHcjDdK0HEosizGARJs0UeYiKuA&usqp=CAU",
  text: "Note that the development build is not optimize",
  date: "12-06-2022",
  lesson_num: 10,
  author: 15,
  title: "POST",
};
