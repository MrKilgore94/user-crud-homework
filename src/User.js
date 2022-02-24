const User = (props)=>{
  return (
      <div style={{border:'1px solid', margin:'20px'}}>
          <h1>{props.first_name} {props.last_name}</h1>
          <p>email: {props.email}</p>
      </div>
  )
}
export default User