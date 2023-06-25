import Header from "../../components/Header/Header";
import MainContainer from "../../components/MainContainer";
import Post from "../../components/Post/Post";

export default function HomePage() {
    return (
        <MainContainer>
            <Header />
            <Post />
            <Post />
            <Post />
        </MainContainer>
    )
}