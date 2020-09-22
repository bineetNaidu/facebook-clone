import React from "react";
import StoryReel from "./StoryReel";
import MessageSenderForm from "./MessageSenderForm";
import Post from "./Post";

// STATICS
import "./Feed.css";

function Feed() {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSenderForm />

      <Post
        profilePic="https://avatars0.githubusercontent.com/u/66471461?v=4"
        message="HEY WORLD OF REACT JS AND FACEBOOK"
        username="Bineet Naidu"
        image="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
      />
    </div>
  );
}

export default Feed;
