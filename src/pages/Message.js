import MenuMessage from "../components/menu/MenuMessage";

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
        }}
      >
        message
      </div>
    </div>
  );
};
export default Message;
