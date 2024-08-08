//Function to make an input field. 
//It takes "props" as an input when called. 
//It makes a label out of the value called "props.label" that was input
//The text input field will have placeholder text. This placeholder will also be input when the funciton is called.
function Input(props) {
    return(
      <div>
        <label>Enter {props.label}</label>
        <input placeholder={`Enter ${props.label}`} type="text"></input>
      </div>
    );
  }

  export default Input;