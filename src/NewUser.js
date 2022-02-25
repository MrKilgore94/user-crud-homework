import {useState} from 'react'
import "./Boxes.css";



const NewUser = (props) => {
   const [email, setEmail] = useState('')
   const [first_name, set_first_name] = useState('')
   const [lastName, setLastName] = useState('')
   const [foo, bar] = useState('')
   const handleSubmit = (e) =>{
       // prevent refresh
       e.preventDefault()
       console.log('email input value', email)
       console.log('first name value:', foo)
       // if key and value you can short hand ie email:email => email
       let newUser = {id:Math.random(), first_name, last_name:lastName, avatar:foo, email}
       console.log(newUser)

       // add to users state
       props.addUserCB(newUser)
       setEmail('')
       set_first_name('')
       setLastName('')
       bar('')
   }
  return (
    <div id='NewUserBox'>
      <h1 id='newUser'>New User</h1>
      <form onSubmit={handleSubmit}>
      <br />
        <input style={{ borderRadius: '10px'}} placeholder='Email...' value={email} onChange={(e)=> {setEmail(e.target.value)}} />
        <br />
        <br />
        <input style={{ borderRadius: '10px'}} placeholder='First name...' value={first_name} onChange={(e)=> {set_first_name(e.target.value)}} />
        <br />
        <br />
        <input style={{ borderRadius: '10px'}} placeholder='Last name...' value={lastName} onChange={(e)=> {setLastName(e.target.value)}} />
        <br />
        <br />
        <input style={{ borderRadius: '10px'}} placeholder='Avatar link...' value={foo} onChange={(e)=> {bar(e.target.value)}} />
        <br />
        <br />
        <button style={{ background: 'green', color: 'white'  }}>Add User</button>
      </form>
    </div>
  );
};

export default NewUser