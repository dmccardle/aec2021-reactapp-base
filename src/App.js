import './App.css';
import Button from '@material-ui/core/Button';
import { useState } from 'react'

function App() {
  const [data, setData] = useState('')

  const fetchData = async () => {
    const res = await fetch('https://aec2021-restapi-test.herokuapp.com/')
    const newData = await res.json()

    setData(newData)
  }

  return (
    <div className="App">
      <Button variant="contained" color="primary" onClick={fetchData} >
      Hello World
      </Button>
      <p>{data}</p>
    </div>
  );
}

export default App;
