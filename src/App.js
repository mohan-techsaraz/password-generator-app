import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { LC, NC, SC, UC } from './data/PassChar';



function App() {

  // let p="Wscubetech";
  // let n= p.charAt( Math.floor(Math.random()*p.length) )
  // console.log( n)  //4.1 = 4  //4.9  = 4  // 5.3 = 5


  let [uppercase,setUppercase]=useState(false)
  let [lowercase,setLowercase]=useState(false)
  let [number,setNumber]=useState(false)
  let [symbols,setSymbols]=useState(false)
  let [passwordlen,setPasswordLen]=useState(10)
  let [fpass,setPass]=useState('')

let createPassword=()=>{
// alert('hello');
let finalPass=''
let charSet=''
if(uppercase || lowercase || number || symbols ){
    if(uppercase) charSet+=UC;
    if(lowercase) charSet+=LC;
    if(number) charSet+=NC;
    if(symbols) charSet+=SC;
    // console.log(charSet,charSet.length)
    for(let i=0;i<passwordlen;i++){
       finalPass+=charSet.charAt( Math.floor(Math.random()*charSet.length) )
    }

    // console.log(finalPass)
    //final value output =
    setPass(finalPass)
}
  else{
    toast.error("Please Select One Checkbox!....")
  }

}

let copyPass=()=>{
  navigator.clipboard.writeText(fpass)
  toast.success("Password Copy........")
}

  return (
   <>
      <ToastContainer />
    <div className='passwordBox'>
      <h2 >Password Generator</h2>

      <div className='passwordBoxin'>
        <input type='text' value={fpass} readOnly  /><button onClick={copyPass}>Copy</button>
      </div>

      <div className='passLength'>
        <label>Password length</label>
        <input type='number' max={20} min={10} value={passwordlen} onChange={(event)=>setPasswordLen(event.target.value)} />
      </div>

      <div className='passLength'>
        <label>Include uppercase letters</label>
        <input type='checkbox' checked={uppercase} onChange={()=>setUppercase(!uppercase)} />
      </div>

      <div className='passLength'>
        <label>Include lowercase letters</label>
        <input type='checkbox' checked={lowercase} onChange={()=>setLowercase(!lowercase)} />
      </div>

      <div className='passLength'>
        <label>Include numbers</label>
        <input type='checkbox' checked={number} onChange={()=>setNumber(!number)} />
      </div>

      <div className='passLength'>
        <label>Include symbols</label>
        <input type='checkbox' checked={symbols} onChange={()=>setSymbols(!symbols)} />
      </div>
      <button className='btn' onClick={createPassword} >Generate Password</button>
    </div>
   </>
  );
}

export default App;
