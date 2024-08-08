import logo from './logo.svg';
import './App.css';
import Input from "./components/Input";


//A map is like a for loop, that performs the contained callback function on each of the iterated elements.
//Unlike a for loop, it also stores each of the results in an array.
function learnMap() {
  let arr = [1, 2, 3, 4];
  arr.map((i) => console.log(i));
}

//A map is used here to iterate through each of the elements and create an input field from all of them
function App() {
  //let arr = ["Title: ", "Desc: "]
  //let elements = arr.map((i) => <Input label= {i}></Input>);
  return (
    <div>
      <ul>
      <Input label = {"Title: "}></Input>
      <Input label = {"Description: "}></Input>
      </ul>
    </div>
  );
}

export default App;
