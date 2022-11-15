import React, { useEffect } from "react"
import axios from "axios"
import { useState } from "react";
import './App.css';
import img from "./images/edit.png"
function App() {
const [data,setData]= useState([])

useEffect(()=>{
let URL = "https://reqres.in/api/users?page=2"
axios.get(URL).then((response)=>{
console.log(response.data);
if(response.data.data){
  const itemList = response.data.data
  const itemlistarray = itemList.map((i)=>{
return   i
  })
  setData(itemlistarray)
}

})

},[])


  return (
  <>
 <div className="btn-div" ><button className="btnn">Create User</button> </div> 
  <div className="App">
   {data.map((elem)=>{
   return <> <div className="User" > {<img className="avatar" src={elem.avatar} />} <div className="userchild">{elem.first_name}</div> 
   <div className="userchild1"> <span className="design" >Frontened Developer at Facebook</span> <br></br>{elem.email} </div> {<img className="emoji" src={img}/>} </div> 
   </>
   })}
</div>
  </>
  );
}

export default App;
