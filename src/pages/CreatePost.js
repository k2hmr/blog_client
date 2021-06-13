import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import "../App.css";

function CreatePost() {
  const [userName, setUserName] = useState("");
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const initialValues = {
    title: "",
    postText: "",
    username: "",
  };

  // useEffect(() => {
  //   console.log(userName + title + text)
  // }, [userName, title, text])

  const submitPost = (data) => {
    Axios.post("http://localhost:3001/api/create", data).then((response) => {
      console.log("IT WORKED");
    });
  };

  return (
    <div className="CreatePost">
      <div className="uploadPost">
        <label>UserName</label>
        <input
          type="text"
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
        <label>Title</label>
        <input
          type="text"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <label>Post Text</label>
        <textarea
          onChange={(e) => {
            setText(e.target.value);
          }}
        />

        <button onClick={submitPost}> Submit Post</button>
      </div>
    </div>
  )
}

export default CreatePost
