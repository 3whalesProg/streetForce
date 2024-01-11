import './Basket.scss';
import cross from '../../../static/img/cross.svg'
import like from '../../../static/img/like.svg'
import Footer from '../footer/Footer.jsx';
import { useContext, useEffect, useState} from 'react';
import { Context } from '../../../main.jsx';
import { observer } from 'mobx-react-lite';
import ilikes from '../../../static/img/ilikes.png'

const Basket = observer(() => {
    const {device} = useContext(Context)
    const {liked} = useContext(Context)
    const [likedState, setLikedState] = useState(liked.Liked)
    const [devicesState, setDevicesState] = useState(device.devices)


    const [sum, setSum] = useState(0)
     const sumBasket = (basket) => {
        let ger = 0;
        for(let i = 0; i < basket.length; i++){
            ger += basket[i].price
        }
        return ger
     }
   

    const removeCard = (id) => {
        let orders  = []
        devicesState.map(item => {
            if (item.id != id){orders.push(item)}
        })
        setDevicesState(orders)
        device.setDevices(orders)
        setSum(sumBasket(device.devices))
    }

    const addLike = (id) =>{
        let ger = devicesState.map(item => {
            if (item.id == id){
                if (item.liked == undefined){
                    return {...item, liked: true}
                }
                else{
                    return {...item, liked: !item.liked }
                }                
            }
            else{
                return item
            }
        })
        setDevicesState(ger)
        device.setDevices(ger)
        let kot = {}
        for(let i = 0; i < devicesState.length; i++){
            if(devicesState[i].id == id){
                kot = devicesState[i]
                break;
            }
        }
        
        if(kot){
            setLikedState(kot)
            liked.setAddLiked(kot)
        }
    
    }

    const addLikeTwo = (id) => {
        let ger = devicesState.map(item => {
            if (item.id == id){
                if (item.liked == undefined){
                    return {...item, liked: true}
                }
                else{
                    return {...item, liked: !item.liked }
                }
            }
            else{
                return item
            }
        })
        setDevicesState(ger)
        device.setDevices(ger)
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
                        <div className='Basket__Wrapper-Flex-Item' style={{ background: 'white', marginBottom: '20px', width: '750px'}}>
                                <div className='Basket__Wrapper-Flex-Card-Img'>
                                    <img src={'http://localhost:7000/' + item.img[0]} width='200' height='200' style={{padding: '20px'}}/>
                                </div>

                                <div className='Basket__Wrapper-Flex-Items'>
                                    <div className='Basket__Wrapper-Flex-Items-Title'>
                                        <h1>{item.name}</h1>
                                        <img src={cross} onClick={() => removeCard(item.id)} style={{marginRight: '15px', cursor:'pointer'}} className='svg'/>
                                    </div>

                                    <div className='Basket__Wrapper-Flex-Items-Text'>
                                        <p>{item.description}</p>
                                    </div>

                                    <div className='Basket__Wrapper-Flex-Items-Price'>
                                        <p>{item.price} Руб.</p> 
                                        {item.liked 
                                        ? 
                                        <img src={ilikes} style={{marginRight: '15px', cursor:'pointer', height: '22px'}} className='svg' onClick={() => {addLikeTwo(item.id)}}/>
                                        :
                                        <img src={like}  style={{marginRight: '15px', cursor:'pointer' ,height: '22px'}}  className='svg' onClick={() => {addLike(item.id)}}/>

                                        }
                                        
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
        <Footer/>
        </>
    );
});

export default Basket;