import { useState } from "react"

const WrapperHOC = (WrapperFunction)=>{
    
  function WrapperHOC(){

    const [counter,setCounter] = useState(0);

    const handleCounter = ()=>{
      setCounter(counter+1)
    }

    return(
      <WrapperFunction counter={counter} handleCounter={handleCounter}/>
    )
  }

  return WrapperHOC;
}

export default WrapperHOC;