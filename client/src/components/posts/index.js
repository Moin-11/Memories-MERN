import { CircularProgress, Grid } from "@material-ui/core";
import Post from "./post/index";
import { useSelector } from "react-redux";
import React from "react";
import useStyles from "./styles";

const Posts = ({ currentId, setcurrentId }) => {
  const classes = useStyles();

  const posts = useSelector((state) => state.posts);

  return (
    <>
      {!posts.length ? (
        <CircularProgress />
      ) : (
        <Grid className={classes.mainContainer} alignItems="stretch">
          {posts.map((post) => {
            return (
              <Grid key={post.id} item xs={12} sm={6}>
                <Post
                  post={post}
                  setcurrentId={setcurrentId}
                  currentId={currentId}
                />
              </Grid>
            );
          })}
        </Grid>
      )}
    </>
  );
};

export default Posts;
