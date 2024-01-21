import { useState } from "react";
import { Offcanvas } from "react-bootstrap";
import './MenuBurger.scss'
import menu from '../../../static/img/menu.png'
import { NavLink } from "react-router-dom";
import arrowRight from '../../../static/img/arrowRight.svg'
import banner2 from '../../../static/img/banner2.jpg'
import Footer from "../footer/Footer";

const MenuBurger = () => {


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    function refreshPage() {
        setTimeout(() => {
            window.location.reload();
        }, 50)
        
      }
    return (
        <>
        {/* <Button variant="primary" onClick={handleShow} style={{marginTop: '100px'}}>
        Launch
      </Button> */}
        <div onClick={handleShow} className="NavBar__menu-burger">
            <img src={menu}/>
        </div>
        <div className="Burger__Menu-Wrapper">
            <Offcanvas show={show} onHide={handleClose} placement="start" className="canvas" style={{width: '734px', background: '#f9f9f9'}}>
                <Offcanvas.Header closeButton className="Burger__Header">
                    <Offcanvas.Title style={{color: '#fff', fontFamily: 'Helvetica-light', fontSize: '26px'}}>Street Force</Offcanvas.Title>
                </Offcanvas.Header>
                        
               <div className="Burger__Menu-Body">
                    
                    <NavLink to="/main" style={{textDecoration: 'none', color: 'black'}}>
                        <div className="Burger__Menu-Item" onClick={refreshPage}>
                            <h1 onClick={refreshPage}>Главная</h1>
                            <img src={arrowRight} alt="arrow" height='18'/>
                        </div>
                    </NavLink>
                    <div>
                        <img src={banner2} className="Burger__Menu-Banner"/>
                    </div>

                    <NavLink to="/shop" style={{textDecoration: 'none', color: 'black'}}>
                        <div className="Burger__Menu-Item" onClick={refreshPage}>
                            <h1 onClick={refreshPage}>Товары</h1>
                            <img src={arrowRight} alt="arrow" height='18'/>
                        </div>
                    </NavLink>

                    <NavLink to="/profile" style={{textDecoration: 'none', color: 'black'}}>
                        <div className="Burger__Menu-Item" onClick={refreshPage}>
                            <h1>Профиль</h1>
                            <img src={arrowRight} alt="arrow" height='18'/>
                        </div>
                    </NavLink>
                </div> 
            </Offcanvas>
        </div>
     
        </>
    );
};

export default MenuBurger;