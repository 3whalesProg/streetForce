import {BrowserRouter} from 'react-router-dom'
import './App.css'
import AppRouter from "./AppRouter";
import { NavBar } from './pages/Components/NavBar/NavBar';
import Footer from './pages/Components/footer/Footer';



const App = () => {

  return (
    <>
        <BrowserRouter>
            <NavBar/>
            <AppRouter/>
            <Footer/>
        </BrowserRouter>
    </>
  );
}

export default App;
