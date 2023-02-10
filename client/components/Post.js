import { Heart } from "@styled-icons/heroicons-solid/Heart";
import styled from "styled-components";

export default function Home({ postData, handleLiked }) {
  return (
    <MainDiv>
      <div>
        <ProfileAvatr src={postData.userAvatar}></ProfileAvatr>
        <BlueLabel>{postData.userName}</BlueLabel>
      </div>
      <div>
        <PostImage src={postData.image}></PostImage>
      </div>
      <PostDataDiv>
        <div>
          <span>
            <BlueHeart
              liked={postData.liked}
              value={postData.likes}
              onClick={(e) => handleLiked(!postData.liked, postData._id)}
            />
            <BlueLabel>{postData.likes}</BlueLabel>
          </span>
        </div>
        <div>
          <PostDes>{postData.des}</PostDes>
          <BlueP>{postData.hash}</BlueP>
        </div>
        <CommentsP>View all comments</CommentsP>
      </PostDataDiv>
    </MainDiv>
  );
}

const ProfileAvatr = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin: 5px 5px 5px 5px;
`;
const BlueLabel = styled.label`
  margin-left: 10px;
  font-weight: bold;
  color: rgb(38, 101, 201);
`;
const BlueHeart = styled(Heart)`
  width: 30px;
  height: 30px;
  color: ${(props) => (props.liked ? "red" : "blue")};
`;

const PostImage = styled.img`
  width: 500px;
  height: 300px;
  margin: 10px 10px 10px 10px;
`;
const MainDiv = styled.div`
  margin: 10px 10px 10px 10px;
`;
const PostDataDiv = styled.div`
  margin: 10px 10px 10px 10px;
`;
const BlueP = styled.p`
  color: blue;
`;
const CommentsP = styled.p`
  color: rgb(169, 169, 169);
`;
const PostDes = styled.label`
  margin-bottom: 0;
`;
