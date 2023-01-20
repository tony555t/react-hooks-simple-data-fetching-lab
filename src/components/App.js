// create your App component here
import React from "react";
import { useState,useEffect} from "react";
function App() {
  const [dog,setDog] = useState(null);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((r) => r.json())
      .then((data) => {
        // setting state in the useEffect callback
        setDog(data.message);
      });
  },[]);
  

 if (!dog) return <p>Loading...</p>

    return (
        <img src={dog} alt= "A Random Dog" />
    )


}export default App;