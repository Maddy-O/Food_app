import { Link } from "react-router-dom";
import styled from "styled-components";

const YourStyledLink = styled(Link)`
  text-align: left;
  text-decoration: none;
`;

export const AnimalCard = ({ id, name, imageUrl, type, lifespan, habitat }) => {
  return (
    <YourStyledLink
      to={`/AnimalDetails/${id}`}
      style={{
        width: "100%",
        backgroundColor: "#e5e059",
        WebkitBoxShadow: "0px 3px 23px 0px gray",
        boxShadow: "0px 3px 23px 0px gray",
        borderRadius: "15px",
      }}
    >
      <div style={{ display: "flex", color: "white" }}>
        <div style={{ width: "50%" }}>
          <img
            src={imageUrl}
            style={{
              width: "100%",
              objectFit: "cover",
              borderRadius: "15px",
              margin: "5px",
            }}
          />
        </div>
        <div
          style={{
            width: "90%",
            color: "#1d263b",
            margin: "5px",
            marginLeft: "10px",
          }}
        >
          <h3>{name}</h3>
          <h4>Type : {type}</h4>
          <h4>Lifespan : {lifespan}</h4>
          <h4>Habitat : {habitat}</h4>
        </div>
      </div>
    </YourStyledLink>
  );
};
