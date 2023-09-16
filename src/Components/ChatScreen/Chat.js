import react, { useEffect, useState } from "react";
import "./chat.css";
import { useParams } from "react-router-dom";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorder";
import Messages from "./Message/Messages";

import db from "../../firebase";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ChatInput from "./ChatInput/ChatInput";
function Chat() {
  const { roomId } = useParams();
  const [roomDetails, setRoomDetails] = useState(null);
  const [roomMessages, setRoomMessages] = useState([]);

  useEffect(() => {
    if (roomId) {
      db.collection("rooms")
        .doc(roomId)
        .onSnapshot((snapshot) => setRoomDetails(snapshot.data()));
    }

    db.collection("rooms")
      .doc(roomId)
      .collection("messages")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) => {
        setRoomMessages(snapshot.docs.map((doc) => doc.data()));
      });
  }, [roomId]);

  return (
    <div className="chat">
      <div className="chat__header">
        <div className="chat__headerLeft">
          <h4 className="chat__channelName">
            <strong># welcome to {roomDetails?.name} chat </strong>
            <StarBorderOutlinedIcon />
          </h4>
        </div>
        <div className="chat__HeaderRight">
          <p>
            <InfoOutlinedIcon />
            details
          </p>
        </div>
      </div>
      <div className="chat__messages">
        {roomMessages?.map(
          ({ message, user, timestamp, userImage, userDataWriter }) => (
            <Messages
              message={message}
              user={user}
              timestamp={timestamp}
              userImage={userImage}
            />
          )
        )}
      </div>
      <ChatInput channelName={roomDetails?.name} channelId={roomId} />
    </div>
  );
}

export default Chat;
