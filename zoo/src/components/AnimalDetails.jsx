import { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";

export const AnimalDetails = () => {
  const { id } = useParams();
  const num = Math.floor(Math.random() * 10) + 1;
  const [animals, setAnimals] = useState({
    name: "",
    latin_name: "",
    animal_type: "",
    active_time: "",
    length_min: "",
    length_max: "",
    weight_min: "",
    weight_max: "",
    lifespan: "",
    habitat: ",,,",
    diet: ",,,,",
    geo_range: "",
    image_link: "",
    id: 0,
  });
  // const num = Math.floor(id / 2 / 10);
  console.log(num);

  useEffect(() => {
    axios
      .get(`https://zoo-animal-api.herokuapp.com/animals/rand`)
      .then((res) => setAnimals(res.data));
  }, [id]);

  return (
    <div
      style={{
        marginBottom: "20px",
        marginTop: "20px",
        marginRight: "20px",
        marginLeft: "20px",
      }}
    >
      <div
        className="animalContainer"
        style={{
          display: "flex",
          width: "100%",
          backgroundColor: "#e5e059",
          WebkitBoxShadow: "0px 3px 23px 0px gray",
          boxShadow: "0px 3px 23px 0px gray",
          borderRadius: "15px",
        }}
      >
        <div
          style={{
            width: "50%",
          }}
        >
          <img
            className="image"
            src={animals.image_link}
            alt="#"
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
            width: "50%",
            paddingLeft: "15px",
          }}
        >
          <h2 className="name">{animals.name}</h2>
          <div className="latin_name">
            <h5>Latin Name</h5>
            <p>{animals.latin_name}</p>
          </div>
          <div className="type">
            <h5>Type</h5>
            <p>{animals.animal_type}</p>
          </div>
          <div className="length">
            <h5>Length</h5>
            <div>
              <p>Min : {animals.length_min}</p>
              <p>Max : {animals.length_max}</p>
            </div>
          </div>
          <div className="weight">
            <h5>Weight</h5>
            <div>
              <p>Min : {animals.weight_min}</p>
              <p>Max : {animals.weight_max}</p>
            </div>
          </div>
          <div className="life">
            <h5>Lifespan</h5>
            <p>{animals.lifespan}</p>
          </div>
          <div className="habitat">
            <h5>Habitat</h5>
            <p>{animals.habitat}</p>
          </div>
          <div className="diet">
            <h5>Dite</h5>
            <p>{animals.diet}</p>
          </div>
          <div className="geo_range">
            <h5>Geo Range</h5>
            <p>{animals.geo_range}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
