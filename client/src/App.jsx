import {BrowserRouter} from 'react-router-dom'
import './App.css'
import AppRouter from "./AppRouter";
import { NavBar } from './pages/Components/NavBar/NavBar';
import Footer from './pages/Components/footer/Footer';
import { useContext, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from './main';



const App = observer(() => {
    const {device} = useContext(Context)
  useEffect(() => {
    if(localStorage.getItem('device') !== null || localStorage.getItem('device') == '[]'){
        const basket = JSON.parse(localStorage.getItem('device'))
        device.setDevices(basket)
    }
  }, [])

  return (
    <>
        <BrowserRouter>
            <NavBar/>
            <AppRouter/>
            <Footer/>
        </BrowserRouter>
    </>
  );
})

export default App;
