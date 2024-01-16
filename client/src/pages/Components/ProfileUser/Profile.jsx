import { Link } from 'react-router-dom';
import './Profile.scss'

const Profile = () => {
    return (
        <div className="Profile__Container">
            <div className="Profile__Navigation">
                <Link to='/profile'><button className="Profile__Btn">Профиль</button></Link>
                <Link to='/shop'><button className="Profile__Btn">Товары</button></Link>
                <Link to='/likes'><button className="Profile__Btn">Избранное</button></Link>
            </div>
            <div className="Profile__Title">
                <h1>Личный кабинет</h1>
            </div>
        <div className='Profile__main'> 
            <div className='Profile__Wrapper'>
                <div className='Profile__Left-Info'>
                    <div className='Profile__Left-Card'>
                        <h1 style={{paddingTop: '18px'}}>Имя</h1>
                        <h1 style={{paddingTop: '36px'}}>Фамилия</h1>
                        <h1 style={{paddingTop: '36px'}}>Отчество</h1>
                    </div>
                    <div className='Profile__Left-Card'>
                        <input className='Profile_Left-Input' placeholder='Имя'/>
                        <input className='Profile_Left-Input' placeholder='Фамилия'/>
                        <input className='Profile_Left-Input' placeholder='Отчество'/>
                    </div>
                </div>
                <div className='Profile__Left-Info'>
                    <h1 style={{marginRight: '145px'}}>Пол</h1>
                    <div className='Profile__Left-Gender'>
                        <input type='radio' placeholder='Мужской' className='Input-Check'/>
                        <label>Мужской</label>
                    </div>

                    <div className='Profile__Left-Gender'>
                        <input type='radio' placeholder='Женский' className='Input-Check'/>
                        <label>Женский</label>
                    </div>
                </div>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <button className="Profile__Btn">
                        Сохранить
                    </button>
                    <span style={{fontSize: '12px', marginTop: '15px'}}><a>Изменить пароль</a></span>
                </div>
            </div>

            <div className='Profile__Right-Info'>
                <div className='Profile__Right-Card'>
                    <h1 style={{paddingTop: '13px', marginTop: '55px'}}>Мобильный телефон</h1>
                    <h1 style={{paddingTop: '36px', marginTop: '55px'}}>E-mail</h1>
                </div>
                <div className='Profile__Right-Card-Inp'>
                    <input className='Profile_Right-Input' style={{marginTop: '50px'}} placeholder='8-966-223-12-23'/>
                    <span>
                    <input style={{marginBottom: '15px'}} className='Profile_Right-Input' placeholder='streetforce@gmail.com'/>
                        <span style={{marginLeft: '100px', color: 'blue'}}>Изменить</span>
                    </span>
                </div>
            </div>
          </div>
        </div>
        
    );
};

export default Profile;