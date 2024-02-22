import { useState } from "react";
import UseStorage from "./UseStorage";

function App(){

  const [value, setValue] = useState(0);

  const handleValue = (e) => {
    if(e.key === "Enter" && value.trim() !== ""){
      UseStorage(value)
    }
  }

  return(
    <div>
      <input className="text" type="text" onChange={(e) => setValue(e.target.value)} onKeyDown={handleValue}/>
    </div>
  )
}

export default App;