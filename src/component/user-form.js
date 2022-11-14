// import { useState } from 'react';


const UserForm = (props)=>{

    return(
      <div>
        <input placeholder="Name" onKeyUp={(e)=> props.displayName(e.target.value)}></input>
        <input placeholder="Email" onKeyUp={(e)=> props.displayEmail(e.target.value)}></input>
        <button onClick={()=> props.submitDetails()}>Update Detail</button>
      </div>
    )
  }
  
  export default UserForm;