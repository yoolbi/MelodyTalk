import MenuMessage from "../components/menu/MenuMessage";
import { Session, Inbox } from "@talkjs/react";

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
    </div>
  );
};
export default Message;
