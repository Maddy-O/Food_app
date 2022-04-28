// import React from "react";
// import axios from "axios";

// export default class PersonList extends React.Component {
//   // state = {
//   //   persons: [],
//   // };

//   componentDidMount() {
//     axios.get(`https://api/fruit/all`).then((res) => {
//       const persons = res.data;
//       console.log(persons);
//       // this.setState({ persons });
//     });
//   }

//   render() {
//     return (
//       <ul>
//         {/* {this.state.persons.map((person) => (
//           <li key={person.id}>{person.name}</li>
//         ))} */}
//       </ul>
//     );
//   }
// }

// import axios from "axios";
// import React from "react";

// const client = axios.create({
//   baseURL: "https://jsonplaceholder.typicode.com/posts"
// });

// export default function App() {
//   const [post, setPost] = React.useState(null);

//   React.useEffect(() => {
//     async function getPost() {
//       const response = await client.get("/1");
//       console.log(response.data)
//       setPost(response.data);
//     }
//     getPost();
//   }, []);

//   async function deletePost() {
//     await client.delete("/1");
//     alert("Post deleted!");
//     setPost(null);
//   }

//   if (!post) return "No post!"

//   return (
//     <div>
//       <h1>{post.title}</h1>
//       <p>{post.body}</p>
//       <button onClick={deletePost}>Delete Post</button>
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import axios from "axios";

const PersonList = () => {
  const [userNameReg, setUserNameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  useEffect(() => {
    async function getData() {
      const res = await axios
        .get("https://api/fruit/all", {
          username: userNameReg,
          password: passwordReg,
        })
        .then((res) => {
          console.log(res.data);
        });
    }
    getData();
  });
  return (
    <>
      <ul>
        <li>1</li>
        <li>1</li>
        <li>1</li>
      </ul>
    </>
  );
};
export default PersonList;
