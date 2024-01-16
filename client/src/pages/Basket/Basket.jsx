import './Basket.scss';
import cross from '../../static/img/cross.svg'
import { useContext, useEffect, useState} from 'react';
import { Context } from '../../main.jsx';
import { observer } from 'mobx-react-lite';
import LikeButton from '../Components/LikeBut/LikeButton.jsx';
import { Link } from 'react-router-dom';

const Basket = observer(() => {
    const {device} = useContext(Context)
    const [devicesState, setDevicesState] = useState(device.devices)

    const [sum, setSum] = useState(0)
     const sumBasket = (basket) => {
        let price = 0;
        for(let i = 0; i < basket.length; i++){
            price += basket[i].price
        }
        return price
     }
   
    const removeCard = (id) => {
        let orders  = []
        devicesState.map(item => {
            if (item.id != id){orders.push(item)}
        })
        setDevicesState(orders)
        device.setDevices(orders)
        setSum(sumBasket(device.devices))
        localStorage.removeItem('device')
        localStorage.setItem('device', JSON.stringify(orders))
    }

    useEffect(() => {
        setDevicesState(device.devices)
        setSum(sumBasket(device.devices))
    }, [])

    return (
        <>        
        <div className='Basket__Container'>
            <div className='Basket__Title'>
                <h1>Моя Корзина</h1>
            </div>
           <div className='Basket__Wrapper' > 
                <div className='Basket__Wrapper-Flex'>
                    {                   
                    devicesState.map(item => 
                        <>
                        <div style={{display:'flex', gap: '20px'}}>
                        <div className='Basket__Wrapper-Flex-Item' style={{ background: 'white',marginBottom: '20px', width: '750px'}}>
                            <div className="Basket__flex-item-content" style={{display: 'flex', position: 'relative'}}>
                                <Link to = {"/product/" + item.id}>
                                <div className='Basket__Wrapper-Flex-Card-Img'>
                                    <img src={'http://localhost:7000/' + item.img[0]} width='200' height='200' style={{padding: '20px'}}/>
                                </div>
                                </Link>

                                <div className='Basket__Wrapper-Flex-Items'>
                                    <div className='Basket__Wrapper-Flex-Items-Title'>
                                        <h1 style={{maxWidth: '375px'}}>{item.name}</h1>
                                        <img src={cross} onClick={() => removeCard(item.id)}  style={{position: 'absolute', right: '20px', cursor: "pointer"}} className='svg'/>
                                    </div>

                                    <div className='Basket__Wrapper-Flex-Items-Text'>
                                        <p>{item.description}</p>
                                    </div>

                                    <div className='Basket__Wrapper-Flex-Items-Price' style={{paddingTop: '10px'}}>
                                        <p>{item.price} Руб.</p> 
                                        <div className="likeBut" style={{position:'absolute', right: '20px', cursor: "pointer"}}>
                                        <LikeButton product={item}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                                
                            </div>
                        </div>                          
                        </>
                        )}
                </div>
                        {
                            device.devices.length !== 0
                            ?
                            <div className='Basket__TypeBar'>
                            <div style={{padding: '15px'}}>
                            <div className='Basket__TypeBar-Title'>
                                <h1>Всего к оплате: {sum} руб. </h1>
                            </div>
        
                            <div className='Basket__TypeBar-Text'>
                                <p>Уникальный номер корзины: 2341</p>
                            </div>
        
                            <div className='Basket__TypeBar-Button'>
                                <button className='button'>Оформить заказ</button>
                            </div>
                            </div>
                            
                        </div>  
                            :
                            <div style={{margin: '0 auto', marginTop: '250px', fontSize: '26px'}}>
                                Корзина пока что пустая!
                            </div>
                        }
           </div>
        </div>
        </>
    );
});

export default Basket;