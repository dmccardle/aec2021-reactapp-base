import './App.css';
import UserForm from './components/UserForm';
import { useState } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import CarResult from './components/CarResult';
import Header from './components/Header'

function App() {
  const [data, setData] = useState('')

  const fetchData = async () => {
    const res = await fetch('https://aec2021-restapi-test.herokuapp.com/')
    const newData = await res.json()

    setData(newData)
  }

  return (
    <Router>
      <div className="App">
        <Header />
        <Route path='/' exact component={UserForm} />
        <Route path='/results' component={CarResult} />
      </div>
    </Router>
  );
}

export default App;
