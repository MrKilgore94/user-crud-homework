import {useState} from 'react'
const EditUser = (props) => {
   const [email, setEmail] = useState(props.email)
   const [first_name, set_first_name] = useState(props.first_name)
   const [lastName, setLastName] = useState(props.last_name)
   const [foo, bar] = useState(props.avatar)
   const handleSubmit = (e) =>{
       // prevent refresh
       e.preventDefault()
       // if key and value you can short hand ie email:email => email
       let updatedUser = {id:props.id, first_name, last_name:lastName, avatar:foo, email}
       console.log(updatedUser)

       // add to users state
       props.updateUser(updatedUser)
       setEmail('')
       set_first_name('')
       setLastName('')
       bar('')
   }
  return (
    <div id='EditBox'>
      <h1 id='editUser'>Edit User</h1>
      <form onSubmit={handleSubmit}>
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
        <button  style={{ background: 'green', color: 'white'  }}>Submit</button>
      </form>
    </div>
  );
};

export default EditUser