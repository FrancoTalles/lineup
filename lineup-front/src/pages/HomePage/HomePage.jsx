import Header from "../../components/Header/Header";
import MainContainer from "../../components/MainContainer";
import Post from "../../components/Post/Post";
import { UserContext } from "../../contexts/userContext";
import { useContext, useEffect, useState } from "react";
import postsApi from "../../services/postApi";

export default function HomePage() {
  const [posts, setPosts] = useState();
  const { user } = useContext(UserContext);

  async function getPosts() {
    try {
      const postsData = await postsApi.getPosts(user.token);
      setPosts(postsData);
      console.log(postsData);
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <MainContainer>
      <Header />
      {posts?.map((post, index) => (
        <Post key={index} postInfo={post} />
      ))}
    </MainContainer>
  );
}
