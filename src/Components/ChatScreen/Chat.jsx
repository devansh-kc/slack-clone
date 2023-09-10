import react from "react";
import "./chat.css";
import { useParams } from "react-router-dom";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorder"
import  InfoOutlinedIcon  from "@mui/icons-material/InfoOutlined";
function Chat() {
  const { roomId } = useParams();
  return (
    <div className="chat">
      {roomId}

      <div className="chat__header">
        <div className="chat__headerLeft">
          <h4 className="chat__channelName"> <strong># general</strong>
          <StarBorderOutlinedIcon/>
          
          
          
          
          </h4>
        </div>
        <div className="chat__HeaderRight">

          <InfoOutlinedIcon/>details
        </div>
      </div>
    </div>
  );
}

export default Chat;
