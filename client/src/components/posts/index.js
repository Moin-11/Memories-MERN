import { Typography } from "@material-ui/core";
import Post from "./post/index";
import { useSelector } from "react-redux";
import React from "react";
import useStyles from "./styles";

const Posts = () => {
  const classes = useStyles();

  const posts = useSelector((state) => state.posts);

  return (
    <>
      <Typography as="h1"> POSTS</Typography>
      <Post />
      <Post />
    </>
  );
};

export default Posts;
