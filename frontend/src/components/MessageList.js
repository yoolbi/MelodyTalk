import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

const MessageList = () => {
  return (
    <div
      style={{
        width: "40%",
        height: "calc(100% - 50px)",
        borderRight: "1px solid #C4C4C4",
        paddingTop: "50px",
        overflowY: "auto",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100px",
          cursor: "pointer",
          backgroundColor: "white",
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <AccountCircleOutlinedIcon style={{ width: "50", height: "50" }} />
        <div
          style={{
            width: "60%",
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
          }}
        >
          <b>yoolbisdfsdfdsfsdsdfdssdf</b>
          <br />
          <b>Hi~sdfsdfdssdfsdffsdfsdsdfsdfd</b>
        </div>
      </div>
      <div
        style={{
          width: "100%",
          height: "100px",
          cursor: "pointer",
          backgroundColor: "white",
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <AccountCircleOutlinedIcon style={{ width: "50", height: "50" }} />
        <div style={{ width: "60%" }}>
          yoolbi
          <div>Hi~</div>
        </div>
      </div>
      <div
        style={{
          width: "100%",
          height: "100px",
          cursor: "pointer",
          backgroundColor: "rgb(229 229 229 / 75%)",
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <AccountCircleOutlinedIcon style={{ width: "50", height: "50" }} />
        <div style={{ width: "60%" }}>
          yoolbi
          <div>Hi~</div>
        </div>
      </div>
    </div>
  );
};

export default MessageList;
