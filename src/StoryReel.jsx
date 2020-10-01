import React from "react";
import Story from "./Story";

// STATICS
import "./StoryReel.css";

function StoryReel() {
  return (
    <div className="storyReel">
      <Story
        image="https://mk0laterblogouwugirk.kinstacdn.com/wp-content/uploads/2019/01/How-Often-to-Post-to-Facebook-Stories.png"
        profileSrc="https://avatars1.githubusercontent.com/u/8461930?v=4"
        title="Rafeh Qazi"
      />
      <Story
        image="https://images.unsplash.com/photo-1580902486053-bc8e35c5f8fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        profileSrc="https://avatars0.githubusercontent.com/u/66471461?v=4"
        title="Bineet Naidu"
      />
      <Story
        image="https://images.unsplash.com/photo-1587240957326-7cc83fcb1491?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        profileSrc="https://avatars2.githubusercontent.com/u/24712956?v=4"
        title="ssssangha"
      />
      <Story
        image="https://images.unsplash.com/photo-1599355397843-718871791ad3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        profileSrc="https://avatars1.githubusercontent.com/u/6589966?v=4"
        title="Naz"
      />
      <Story
        image="https://images.unsplash.com/photo-1599069621957-9426e93b7635?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        profileSrc="https://avatars2.githubusercontent.com/u/69631?s=200&v=4"
        title="Facebook"
      />
    </div>
  );
}

export default StoryReel;
