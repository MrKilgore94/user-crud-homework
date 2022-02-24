import logo from "./logo.svg";
import "./App.css";
import {useState} from 'react'
import axios from "axios";

function App() {
  const [users, setUsers] = useState()
  const [loading, setLoading] = useState(false)

  const getUsers = () => {
    setLoading(true)
    axios
      .get("https://reqres.in/api/users?delay=2")
      .then((res) => {
        console.log('res:', res)
        // the json we see in browser converted to js object
        console.log('res.data', res.data)
        console.log('res.data.data', res.data.data)
        setUsers(res.data.data)
        setLoading(false)
      })
      .catch((err) => {
        console.log('err:', err)
      });
  };

  return (
    <div className="App">
      <h1>YOYO</h1>
      <button disabled={loading} onClick={getUsers}>{loading ? 'Loading...' : 'Get Users'}</button>
      <div>{JSON.stringify(users)}</div>
    </div>
  );
}

export default App;