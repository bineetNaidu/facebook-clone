import React from "react";
import { Avatar } from "@material-ui/core";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import useFormState from "./customs/hooks/useFormState";

// STATICS
import "./MessageSenderForm.css";

const MessageSenderForm = ({}) => {
  // STATES

  // HOOKS && CONTEXTS
  const [input, handleInputChange, resetInput] = useFormState("");
  const [imageUrl, handleImageUrlChange, resetImageUrl] = useFormState("");

  // FUNCTIONS
  const handleSubmit = (e) => {
    e.preventDefault();
    // some db stuff
    alert("yooooo!!!");
    // some db stuff
    resetInput();
    resetImageUrl();
  };

  return (
    <div className="messageSender">
      <div className="messageSender__top">
        <Avatar />
        <form>
          <input
            className="messageSender__input"
            value={input}
            onChange={handleInputChange}
            placeholder={`What's on your mind`}
          />
          <input
            placeholder="Image URL (OPT.)"
            value={imageUrl}
            onChange={handleImageUrlChange}
          />
          <button type="submit" onClick={handleSubmit}>
            Hidden Submit
          </button>
        </form>
      </div>

      <div className="messageSender__bottom">
        <div className="messageSender__option">
          <VideocamIcon style={{ color: "red" }} />
          <h3>Live Video</h3>
        </div>

        <div className="messageSender__option">
          <PhotoLibraryIcon style={{ color: "green" }} />
          <h3>Photo/Video</h3>
        </div>

        <div className="messageSender__option">
          <InsertEmoticonIcon style={{ color: "yellow" }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
};

export default MessageSenderForm;
