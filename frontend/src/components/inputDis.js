import React, { Fragment, useState } from "react";
import { toast } from "react-toastify";

const InputDis = () => {
  const [description, setDescription] = useState("");

  const onSubmitForm = async e => {
    e.preventDefault();
    try {
      const body = { description };
      const response = await fetch("http://localhost:5000/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      
      });
      toast.success("Successfully posted!");
      window.location = "/discussion";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
     
      Welcome to the discussion board
      <br />
      Post anything you like :)
      <form onSubmit={onSubmitForm}>
        <input
          type="text"
          
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <button className="btn btn-success">Post</button>
      </form>
   
    </Fragment>
  );
};

export default InputDis;