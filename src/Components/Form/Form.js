import React,{useState} from "react";
import "./Form.css";

export default function Form(props) {
    const [name,setName] = useState("");
    const [age,setAge] = useState("");
    function handleSubmit(event){
        event.preventDefault();
        const user = {name:name,age:age , key:Math.random()};
        props.onSubmitt(user);
        setName("");
        setAge("");
    }
    function handleNameChange(event){
        setName(event.target.value);
    }
    function handleAgeChange(event){
        setAge(event.target.value);
    }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        User Name
      </label>
      <input type="text" value ={name} onChange ={handleNameChange}></input>
      <label>
        Age (Years)
      </label>
      <input type="number" value = {age} onChange ={handleAgeChange}></input>
      <button type ="submit" >Add User</button>
    </form>
  );
}
