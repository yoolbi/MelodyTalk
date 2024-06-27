import MenuMessage from "../components/menu/MenuMessage";
import { Session, Inbox } from "@talkjs/react";
import { TextField } from "@mui/material";
import MessageList from "../components/MessageList";
import MessageContent from "../components/MessageContent";

const Message = () => {
  return (
    <div style={{ width: "100%", height: "100vh", display: "flex" }}>
      <MenuMessage />
      <div
        className="right"
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingLeft: "10px",
        }}
      >
        <Session appId="tJczPqBv" userId="sample_user_alice">
          <Inbox
            conversationId="sample_conversation"
            style={{ width: "100%", height: "99.5%" }}
          />
        </Session>
      </div>
      {/* <MessageList />
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "50px",
            borderBottom: "1px solid #C4C4C4",
            paddingTop: "25px",
          }}
        >
          <b style={{ height: "75px", margin: "20px", textAlign: "center" }}>
            yoolbi
          </b>
        </div>
        <MessageContent />
        <TextField style={{ width: "90%" }} />
      </div> */}
    </div>
  );
};
export default Message;
