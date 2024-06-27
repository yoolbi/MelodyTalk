const Header = () => {
  return (
    <div
      className="header"
      style={{
        display: "flex",
        height: "100px",
        margin: "20px",
      }}
    >
      <img
        src="/logo.jpg"
        alt="logo"
        style={{
          width: "40px",
          height: "40px",
          borderRadius: "50%",
        }}
      />
      <div style={{ fontSize: "20px", margin: "5px 20px" }}>MelodyTALK</div>
    </div>
  );
};

export default Header;
