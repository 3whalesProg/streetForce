import '../Basket/Basket.scss';
import cross from '../../../static/img/cross.svg'
import ilikes from '../../../static/img/ilikes.png'
import Footer from '../footer/Footer.jsx';
import likes from './FakeData.jsx'
import sneakers from '../../../static/img/sneakers.png'
import serdce from '../../../static/img/like.svg'
import './Likes.scss'
import { observer } from 'mobx-react-lite';
import { useContext, useEffect, useState } from 'react';
import { Context } from '../../../main.jsx';

const Basket = observer(() => {
    const {liked} = useContext(Context)
    const [likedState, setLikedState] = useState([])
    
    const removeCard = (id) => {
        let orders  = []
        likedState.map(item => {
            if (item.id != id){
                orders.push(item)
            }
        })
        setLikedState(orders)
        liked.setLiked(orders)
    }

    useEffect(() => {
        setLikedState(liked.Liked)
        console.log(liked._likesPr)
    }, [])
    
    return (
        <>
        <div className='Basket__Container'>
            <div className='Basket__Title'>
                <h1>Моя Корзина</h1>
            </div>
           <div className='Basket__Wrapper' > 
                <div className='Basket__Wrapper-Flex'>
                    
                    {likedState.map(item => 
                        <>
                        <div style={{display:'flex', gap: '20px'}}>
                        <div className='Basket__Wrapper-Flex-Item' style={{ background: 'white', marginBottom: '20px'}}>
                                <div className='Basket__Wrapper-Flex-Card-Img'>
                                    <img src={'http://localhost:7000/' + item.img[0]} width='200' height='200' style={{padding: '20px'}}/>
                                </div>

                                <div className='Basket__Wrapper-Flex-Items'>
                                    <div className='Basket__Wrapper-Flex-Items-Title'>
                                        <h1>{item.name}</h1>
                                        <img src={cross}  style={{marginRight: '15px', cursor:'pointer'}} onClick={() => removeCard(item.id)}/>
                                    </div>

                                    <div className='Basket__Wrapper-Flex-Items-Text'>
                                        <p>{item.description}</p>
                                    </div>

                                    <div className='Basket__Wrapper-Flex-Items-Price'>
                                        <p>{item.price} Руб.</p>
                                        <img src={ilikes} height='20' style={{marginRight: '15px', cursor:'pointer'}} onClick={() => removeCard(item.id)}/>
                                    </div>
                                </div>
                                
                            </div>
                        </div>                          
                        </>
                        )}
                </div>


            {likedState.length !== 0
                ?
                <div className='Likes__TypeBar'>
                {likes.map(li => 
                    <>
                        <div className='Likes__TypeBar-Card'>
                            <div>
                                <img src={sneakers}/>
                            </div>
                            
                            <div className='Likes__TypeBar-Card-Info'>
                                <h1 className='Likes__Price'>{li.price} руб.</h1>
                                <p className='Likes__Name'>{li.name}</p>
                                <p className='Likes__Text'>В избранное</p>
                                <img src={serdce} height='26' style={{marginTop:'10px'}}/>
                            </div>
                            
                        </div>
                    </>
                )}
                </div>
                :
                <div style={{margin: '0 auto', marginTop: '250px', fontSize: '26px'}}>
                У вас пока что нет избранных!
            </div>
            }
           </div>
        </div>
        <Footer/>
        </>
    );
});

export default Basket;