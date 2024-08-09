import logo from './logo.svg';
import './App.css';
import Input from "./components/Input";
import {useState} from "react";
//A map is like a for loop, that performs the contained callback function on each of the iterated elements.
//Unlike a for loop, it also stores each of the results in an array.
function learnMap() {
  let arr = [1, 2, 3, 4];
  arr.map((i) => console.log(i));
}

//A map is used here to iterate through each of the elements and create an input field from all of them
function App() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  function handleSubmit(){
    console.log(title + " " + desc);
    setTitle("");
    setDesc("");
  }
  
  function handleChange(event){
    if(event.target.name==="Title"){
    setTitle(event.target.value);}
    else if(event.target.name==="Description"){
    setDesc(event.target.value);}

  }

  //let arr = ["Title: ", "Desc: "]
  //let elements = arr.map((i) => <Input label= {i}></Input>);
  return (
    <div>
      <ul>
      <li> <Input label = {"Title"} value={title} handleChange= {handleChange}></Input> </li>
      <li> <Input label = {"Description"} value={desc} handleChange= {handleChange}></Input></li>
      <li> <button onClick = {handleSubmit}> Click Me </button></li>
      </ul>
    </div>
  );
}

export default App;
//git branch
//git switch master
//git pull
//git switch back to your original branch
//git merge master
