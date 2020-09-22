import React from "react";
import StoryReel from "./StoryReel";
import MessageSenderForm from "./MessageSenderForm";

// STATICS
import "./Feed.css";

function Feed() {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSenderForm />
    </div>
  );
}

export default Feed;
