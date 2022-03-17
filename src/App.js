import { useState } from 'react';
import './App.css';
import Homepage from './components/Homepage';

function App() {
  
  const [editable, setEditable] = useState(true)
    // Since we want to toggle a text-input, we will need a kind of boolean variable on our state to store this
      // We just set up a "flag" on the state of our component, deciding when to display our input field
      // This can be accomplished via if- statements or ternary statements
      // We will hide our text input when the editable is true


  const toggleEditSaleItem = event => setEditable(!editable) //setEditable is function change state
    // "set editable to the opposite of its current value"
    // if editable is true, set it to false; if editable is false, set it to true

    
  const [itemCurrentlyOnSale, setItemCurrentlyOnSale] = useState("Brush")
    // Every time the input text changes, we want the corresponding value on our state to update as well, event.target.value is the input value
  const handleItemCurrentlyOnSaleChange = (event) => {
    const itemOnSale = event.target.value
    setItemCurrentlyOnSale(itemOnSale)  //pass down to components, 想象成和component是一页的code
  }
 //return is to pass props value to components to change state
 ////prop is free to choose any attribute, unlike components not able to freely choose attribute
  return (
    <div className="App"> 
      <Homepage 
        saleItem={itemCurrentlyOnSale}  //inital value of "brush" and prop of saleItem will pass to Component and 
        editable={editable}  //pass prop of "true" to homepage.js
        toggleEditSaleItem={toggleEditSaleItem} //pass function prop to onclick
        handleItemCurrentlyOnSaleChange={handleItemCurrentlyOnSaleChange}  //pass function prop to components
      />
    </div>
  );
}

export default App;