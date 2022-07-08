import logo from './logo.svg';
//import './App.css';
import { Home } from './components/home/home';
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Reviews } from './components/reviews/reviews';
import { Form } from './components/form/form';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Routes>
            <Route path="/reviews" element={<Reviews/>}/>
            <Route path="/" element={<Home/>}/>
            <Route path="/form" element={<Form/>}/>
          </Routes>
      </header>
    </div>
  );
}



export default App;
