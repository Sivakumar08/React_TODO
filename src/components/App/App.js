import React from "react";
//import ListIt from '../../util/ListIt';
import List from "./Util/List";

const bodycontainer={
  padding:'100px',
  display:'flex',
  justifyContent:'center',
  alignItems:'center',
  height:'100vh',
  backgroundColor:'#282c34'
}
const todoli={
  display:'flex',
  justifyContent:'center',
  alignItems:'center',
  flexDirection:'column',
  backgroundColor:'aqua',
  borderRadius:'10px',
  width:'400px',
  boxShadow:'0 0 10px 0 rgb(255,255,255,.5'
}

const todos=[
  {
    id:1,
    text:'Learn React',
    isCompleted:false
  },
  {
    id:2,
    text:'Learn Redux',
    isCompleted:false
  },
  {
    id:3,
    text:'Learn Node',
    isCompleted:false
  },
  {
    id:4,
    text:'Learn Angular',
    isCompleted:false
  },
  {
    id:5,
    text:'Learn Jquery',
    isCompleted:false
  },

]




function App(){
  return(
<div style={bodycontainer}>
  <div style={todoli}>

  <h1>My Todo</h1>
    <List todos={todos}/>
  </div>
  
</div>

  )

}
export default App