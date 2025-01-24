import { useRef } from "react"
export const RefExample = () => {
    const onClick = () =>{
        console.log(inputRef.current.value);
    }
    const inputRef = useRef()
  return (
    <>
    <input type="text" ref={inputRef}/>
    <button onClick = {onClick}>Console Log</button>
    </>
  )
}
