import { useState } from "react";
import { Offcanvas } from "react-bootstrap";
import './MenuBurger.scss'
import menu from '../../../static/img/menu.png'
import { NavLink } from "react-router-dom";
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
        <div>
            <Offcanvas show={show} onHide={handleClose} placement="start"  style={{width: '100%'}}>
                <Offcanvas.Header closeButton style={{justifyContent: 'flex-end'}}></Offcanvas.Header>
                        <Offcanvas.Title style={{padding: '30px 25px 0px 25px'}}>Street Force</Offcanvas.Title>
                <Offcanvas.Body>
               
                <NavLink to="/main" >
                        <h1 onClick={refreshPage}>Главная</h1>
                    </NavLink>
                    <NavLink to="/shop">
                        <h1 onClick={refreshPage}>Товары</h1>
                    </NavLink>
                    <NavLink to="/profile" >
                        <h1 onClick={refreshPage}>Профиль</h1>
                    </NavLink>
                   
                </Offcanvas.Body>
            </Offcanvas>
        </div>
     
        </>
    );
};

export default MenuBurger;