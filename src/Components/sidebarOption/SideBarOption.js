import React from "react"; 
import { useNavigate } from "react-router-dom";
import "./sidebarOptions.css"
import db from "../../firebase";



function SideBarOption({ Icon, title,addChannelOption,id }) {
  const history=useNavigate();
    const selectChannel=()=>{
  
      if(id){
        history(`/room/${id}`)
  
      }
      else
      {
        history(title)
      }
    }

    const addChannel =()=>{
      const channelName = prompt("please enter channel name :")

      if (channelName){
        db.collection("rooms").add({
          name:channelName,
        })
      }

    }
  return (
    <div className="sidebarOption" onClick={addChannelOption?addChannel:selectChannel}>
      {Icon && <Icon className="sidebarOption__icon" />}

      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <h3 className="sidebarOption__channel">
          {" "}
          <span className="sidebarOption__hash">#</span> {title}
        </h3>
      )}
    </div>
  );
}

export default SideBarOption;
