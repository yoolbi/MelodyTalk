const MessageContent = () => {
  const from = ["안녕하세요", "노래가 너무 좋아요~"];
  const to = ["감사합니다!!"];
  return (
    <div
      className="message"
      style={{
        height: "82%",
        width: "90%",
        overflowY: "auto",
        display: "flex",
        flexDirection: "column",
        marginTop: "10px",
      }}
    >
      {from.map((value, idx) => {
        return (
          <div
            key={idx}
            style={{
              borderRadius: "10px",
              backgroundColor: "rgb(229 229 229 / 75%)",
              padding: "5px",
              margin: "10px 0px",
              width: "fit-content",
            }}
          >
            {value}
          </div>
        );
      })}
      {to.map((value, idx) => {
        return (
          <div
            key={idx}
            style={{
              borderRadius: "10px",
              backgroundColor: "rgb(229 229 229 / 75%)",
              display: "inline-block",
              padding: "5px",
              margin: "10px 0px 0px auto",
              width: "fit-content",
            }}
          >
            {value}
          </div>
        );
      })}
    </div>
  );
};

export default MessageContent;
