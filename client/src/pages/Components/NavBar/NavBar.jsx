import {NavLink} from "react-router-dom"
import './NavBar.scss'
import OffCanvas from "../CanvasReg/OffCanvas"

const setIsActive = ({isActive}) => isActive ? "NavBar__link-item active-link" : "NavBar__link-item"


const NavBar = () =>{
    return(
        <>  
        <div className="NavBar">
        <div className="NavBar__content">
            <div className="NavBar__content-leftSide">
                <NavLink to='/main' style={{textDecoration: 'none'}}>
                    <div className="NavBar-logo">StreetForce</div>
                </NavLink>
            </div>
            <div className="NavBar__content-center">
                    <NavLink to="/main" className={setIsActive}>
                        Главная
                    </NavLink>
                    <NavLink to="/shop" className={setIsActive}>
                        Товары
                    </NavLink>
                    <NavLink to="/profile" className={setIsActive}>
                        Профиль
                    </NavLink>
                    <NavLink style={{textDecoration: 'none', color: 'black'}}>
                        <OffCanvas/>
                    </NavLink>
                    
            </div>
            <div className="NavBar__content-rightSide">
                <div className="NavBar__content-rightSide-content">
                    <NavLink to="/basket" className={setIsActive}>
                        Корзина
                    </NavLink>
                    <NavLink to="/likes" className={setIsActive}>
                        Избранное
                    </NavLink>
                </div>
            </div>
        </div> 
        </div>
        </>
    )
}

export {NavBar}