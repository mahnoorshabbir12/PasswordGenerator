import React, { useState, useCallback, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [length, setLength] = useState(3);
  const [number, setNumber] = useState(false);
  const [character, setCharacter] = useState(false);
  const [password, setPassword] = useState("");
  const passRef = useRef("null");
  const copy = useCallback(() => {
    passRef.current?.select();
    // passRef.current.setSelectionRange(0,3);
    window.navigator.clipboard.writeText(password);
  },[password])
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(number) string += "0123456789";
    if(character) string+="!@#$%^&*()+{}|?<>~"
    for(let x =0; x<length; x++){
      let char = Math.floor(Math.random() * string.length); 
      pass+= string.charAt(char);
    }
    setPassword(pass);
  },[length,number,character,setPassword]);
  useEffect(() => {
    passwordGenerator();
  },[length,number,character,setPassword])

  return (
    <div className='flex flex-wrap h-50 w-2xl mb-0 bg-amber-300 rounded-4xl justify-center items-center'>
      <div className='justify-center items-center'>
      <input id='passField' className='rounded-4xl w-96 h-12 bg-amber-100 border-amber-100 text-black text-2xl text-center' type="text" value={password} ref={passRef} readOnly/>
      <button className='ml-2 rounded-lg border-black' onClick={copy}>Copy</button>
      </div>
      <div className='flex justify-center items-center text-black gap-3'>
      <input type="range" max={20} min={3} value={length} onChange={(e) => {setLength(e.target.value)}}/>
      <label htmlFor="length">Length: {length}</label>
      <input id='num' type="checkbox" onChange={() => {setNumber (prev => !prev)}} />Number
      <input id='character' type="checkbox" onChange={() => {setCharacter (prev => !prev)}}/>Special Characters

      </div>

      
    </div>
  )
}

export default App

  // const [length, setLength] = useState(5)
  // const [number, setNumber] = useState(false)
  // const [char, setCharacter] = useState(false)
  // const [password, setPassword] = useState("")
  // const passwordGenerator = useCallback(() =>{
  //   let pass ="";
  //   let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  //   let num = "0123456789";
  //   let specialCharacter = "!@#$%^&*()+{}|?<>~";
  //   if(number){
  //     string += num;
  //   }
  //   if(char){
  //     string += specialCharacter;
  //   }
  //   for(let i=0; i< length; i++){
  //     let result = Math.floor(Math.random()*string.length);
  //     pass += string.charAt(result);
  //   }
  //   setPassword(pass);
  //   console.log("Generated password:", pass);
  // },[length,number,char])

  // useEffect(() =>{
  //   passwordGenerator()
  // }, [length,number,char])