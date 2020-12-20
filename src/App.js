import './App.css';
import { Route } from 'react-router-dom'
import HomePage from './pages/homepage/homepage.component';


const Hats = () => {
  return (

    <div>
        <h1>HATS</h1>
    </div>

  )
}



function App() {
  return (
    <div>
      <Route exact path = '/' component = {HomePage} />
      <Route path = '/hats' component = {Hats} />
    </div>
  );
}

export default App;
