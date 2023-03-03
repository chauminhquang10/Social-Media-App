import React, { useState } from "react";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import "./post.scss";
import { Link } from "react-router-dom";
import Comments from "@/components/comments/Comments";

const Post = ({ post }) => {
  const [openComments, setOpenComments] = useState(false);

  const handleShowComments = () => {
    setOpenComments(!openComments);
  };

  const liked = false;

  return (
    <div className="post">
      <div className="container">
        <div className="user">
          <div className="userInfo">
            <img src={post.profilePic} alt="" />
            <div className="details">
              <Link to={`/profile/${post.userId}`}>
                <span className="name">{post.name}</span>
              </Link>
              <span className="date">1 min ago</span>
            </div>
          </div>
          <MoreHorizIcon />
        </div>
        <div className="content">
          <p>{post.desc}</p>
          <img src={post.img} alt="" />
        </div>
        <div className="info">
          <div className="item">
            {liked ? <FavoriteOutlinedIcon /> : <FavoriteBorderOutlinedIcon />}
            <span>Likes</span>
          </div>
          <div className="item" onClick={handleShowComments}>
            <TextsmsOutlinedIcon />
            <span>Comments</span>
          </div>
          <div className="item">
            <ShareOutlinedIcon />
            <span>Shares</span>
          </div>
        </div>
        {openComments && <Comments />}
      </div>
    </div>
  );
};

export default Post;
