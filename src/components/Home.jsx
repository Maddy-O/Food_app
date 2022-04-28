import { axios } from "axios";
// import { useState, useEffect } from "react";

export const Home = () => {
  //   const URL = "/api/fruit/banana";

  //   const [fruit, setFruit] = useState([]);
  //   useEffect(() => fetchAllFruits(), []);

  function fetchAllFruits() {
    axios.get("http://api/fruit/all").then((res) => {
      //   setFruit(res.data);
      console.log(res);
    });
  }

  return (
    <>
      <h1>Hello</h1>
      <button onClick={fetchAllFruits}>Get Data</button>
    </>
  );
};
