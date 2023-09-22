import React from "react";
import "./Messages.css";
import { Button } from "@mui/material";

import { useState } from "react";
import { useParams } from "react-router-dom";
import db from "../../../firebase";

function Messages({ message, user, timestamp, userImage, id, roomid }) {
  function performDelete() {
    console.log(id);
    db.collection("rooms")
      .doc(roomid)
      .collection("messages")
      .doc(id)
      .delete()
      .then(console.log("deleted sucessffully"))
      .catch((err) => console.log(err));
  }
  return (
    <div className="message">
      <img src={userImage} alt="userImage" />
      <div className="message__info">
        <h4>
          {user}
          <span className="message__timestamp">
            {new Date(timestamp?.toDate()).toUTCString()}
          </span>
          <Button onClick={performDelete}>Delete</Button>
        </h4>
        <p>{message}</p>
      </div>
    </div>
  );
}

export default Messages;
