import { Link } from "react-router-dom";

let styleTemp = {
  display: "flex",
  justifyContent: "space-around",
  padding: "15px",
  backgroundColor: "#e5e059",
  borderRadius: "15px",
  marginBottom: "20px",
  marginTop: "20px",
  marginRight: "20px",
  marginLeft: "20px",
  height: "100px",
  justifyContent: "center",
  textAlign: "center",
};
let logo = {
  width: "100px",
  height: "100px",
};
let heading = {
  color: "#1d263b",
  fontFamily: "Comic Sans MS, cursive, sans-serif",
  fontSize: "50px",
  letterSpacing: "0.2px",
  wordSpacing: "0px",
  fontWeight: "700",
  textDecoration: "none",
  fontStyle: "italic",
  fontVariant: "normal",
  textTransform: "none",
  paddingTop: "10px",
  marginLeft: "25px",
  textAlign: "center",
};

export const NavBar = () => {
  return (
    <>
      <div style={styleTemp}>
        <img className="logo" style={logo} src="zaapi_favicon.png" />
        <Link to="/" style={heading}>
          Zoo Animal
        </Link>
      </div>
    </>
  );
};
