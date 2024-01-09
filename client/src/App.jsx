import {BrowserRouter} from 'react-router-dom'
import './App.css'
import AppRouter from "./AppRouter";
import { NavBar } from './pages/Components/NavBar/NavBar';



const App = () => {

  return (
    <>
        <BrowserRouter>
            <NavBar/>
            <AppRouter/>
        </BrowserRouter>
    </>
  );
}

export default App;
