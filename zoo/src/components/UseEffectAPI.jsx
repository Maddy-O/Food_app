import { useState, useEffect } from "react";
import { AnimalCard } from "./AnimalCard";

export const UseEffectAPI = () => {
  const [animal, setAnimals] = useState([]);
  const URL1 = "https://zoo-animal-api.herokuapp.com/animals/rand/10";

  const getFruits = async () => {
    const response = await fetch(URL1);
    setAnimals(await response.json());
    // console.log(data);
  };

  useEffect(() => {
    getFruits();
  }, []);

  return (
    <div className="App" style={{ padding: "20px" }}>
      <h2 style={{ color: "white", marginBottom: "50px" }}>
        Welcome To The Zoo
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gridGap: "50px",
        }}
      >
        {animal.map((e) => (
          <AnimalCard
            key={e.id}
            id={e.id}
            name={e.name}
            imageUrl={e.image_link}
            type={e.animal_type}
            lifespan={e.lifespan}
            habitat={e.habitat}
          />
        ))}
      </div>
    </div>
  );
};

// const URL2 = "https://www.fruityvice.com/api/fruit/all";

/*{"name":"Pallas's Cat",
"latin_name":"Octocolobus manul",
"animal_type":"Mammal",
"active_time":"Nocturnal",
"length_min":"1.5",
"length_max":"2",
"weight_min":"6.5",
"weight_max":"11",
"lifespan":"8",
"habitat":"Mountain regions,
 including grassland,woodland, and semi-desert",
  "diet":"Pikas, hares, and small rodents such as gerbils, voles, and young marmots",
  "geo_range":"Central Asia",
  "image_link":"https://upload.wikimedia.org/wikipedia/commons/d/d6/Manoel.jpg",
"id":131}**/
