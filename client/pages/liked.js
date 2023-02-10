import styled from "styled-components";
import Post from "../components/Post";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [likedPost, setLikedPost] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      await fetch("http://localhost:8000/api/posts/liked")
        .then((res) => res.json())
        .then((res) => {
          setPosts(res);
        })
        .catch((err) => {
          console.log("Error occured when data fetching...", err);
        });
    };

    fetchPosts();
  }, [likedPost]);

  const handleLiked = (liked, id) => {
    console.log(liked, id);

    const data = { id, liked };

    axios.post("http://localhost:8000/api/posts/addLike", data).then((res) => {
      setLikedPost(res.data);
    });
  };

  return (
    <Wrapper>
      {posts &&
        posts.map((post) => (
          <Post key={post._id} postData={post} handleLiked={handleLiked} />
        ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 20px;
  display: grid;
  justify-items: center;
  gap: 1rem;
  @media (min-width: 600px) {
    grid-template-columns: 1fr 1fr;
  }
`;
