import React, { useState } from 'react'
import "./style.css";

function Form() {
    const[formData,setformData] = useState({
        fullName:"",
        email:"",
        pass:"",
    });

    const [todos,setTodos] =useState([]);
    function addTodo(e){
        setTodos([...todos,formData]);
        e.preventDefault();
    }
  return (
    <div>
        <h3>Add To do Form </h3>
        <form onSubmit={addTodo}>
            <div className="form-item">
            <input type="text" placeholder='User FullName' onChange={(e)=>setformData({...formData,fullName:e.target.value})}/>
            </div>
            <div className="form-item">
            <input type="email" placeholder='User Email' onChange={(e)=>setformData({...formData,email:e.target.value})}/>
            </div>
            <div className="form-item">
            <input type="pasword" placeholder='User Pasword' onChange={(e)=>setformData({...formData,pass:e.target.value})}/>
            <input type="checkbox"/>
            </div>
            <div className="form-item">
                <button type='submit'>Add To Do</button>
            </div>
            
            
           
            
        </form>
    </div>
  )
}

export default Form