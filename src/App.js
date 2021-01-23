import './App.css';
import UserForm from './components/UserForm';
import { useState } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import CarResult from './components/CarResult';
import Header from './components/Header'

function App() {
  const [data, setData] = useState([])

  // const fetchData = async () => {
  //   const res = await fetch('https://aec2021-restapi-test.herokuapp.com/')
  //   const newData = await res.json()

  //   setData(newData)
  // }

  const setCarData = (data) => {
    setData(data)

  }

  return (
    <Router>
      <div className="App">
        <Header />
        <Route path='/' exact render={() => (
            <UserForm setData={(data) => setCarData(data) }/>
          )}
        />
        <Route path='/results' render={() => (
            <CarResult data={data}/>
          )}
        />
      </div>
    </Router>
  );
}

export default App;
