import React, { useEffect, useState } from "react";
import StoryReel from "./StoryReel";
import MessageSenderForm from "./MessageSenderForm";
import Post from "./Post";
import db from "./firebase";

// STATICS
import "./Feed.css";

function Feed() {
  // STATES
  const [posts, setPosts] = useState([]);

  // HOOKS && CONTEXTS
  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapShot) =>
        setPosts(snapShot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
      );
  }, []);

  // FUNCTIONS
  return (
    <div className="feed">
      <StoryReel />
      <MessageSenderForm />
      {posts.map((post) => (
        <Post
          key={post.id}
          profilePic={post.data.profilePic}
          message={post.data.message}
          username={post.data.username}
          image={post.data.image}
          timestamp={post.data.timestamp}
        />
      ))}
    </div>
  );
}

export default Feed;
