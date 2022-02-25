import { useState } from "react";
import EditUser from "./EditUser";
import "./Boxes.css";


const User = (props) => {
  const [showForm, setShowForm] = useState(false);
  console.log("props:", props);
  const renderUser = () => {
    return (
      <>
        <h1 id='name'>
          {props.first_name} {props.last_name}
        </h1>
        <p id='email'>Email: {props.email}</p>
        <p id='avatar'>Avatar: {props.avatar}</p>
        <button class='delete' onClick={() => props.deleteUserYo(props.id)}>delete</button>
    </>
      
    );
  };

  return (
    <div id='UserBox'>
        <button class={showForm ? 'Cancel' : 'Edit'} onClick={()=>setShowForm(!showForm)}>{showForm ? 'Cancel' : 'Edit'}</button>
        {showForm ? <EditUser {...props}  /> : renderUser()}
      
    </div>
  );
};
export default User;