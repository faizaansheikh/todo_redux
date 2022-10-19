

import { useState } from 'react';
import { useDispatch,useSelector  } from 'react-redux';
import {addData, deleteOne} from './action/action';
import './App.css'
function App() {
  const[input,setinput] = useState("")
  const lists = useSelector((state)=>state.todoReducer.list)
   console.log(lists);
  const dispatch = useDispatch();
  const add = ()=>{
    dispatch(addData(input))
    setinput("")
  }
  

  return(
    <>
     <h1>redux todo</h1>
     <div className='main'>
     <input type="text" placeholder='enter todo'
     value = {input}
     onChange = {(e)=>setinput(e.target.value)}/>
     <button onClick={add}>Add</button>
     <button>Delete all</button>
     </div>
     {
      lists.map((elem)=>{
        return <h2 key={elem.id}> {elem.data} <button onClick={()=>dispatch(deleteOne(elem.id))}>delete</button></h2>
      })
     }
    

  
     </>
    );
}

export default App;
