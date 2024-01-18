import '../Basket/Basket.scss';
import cross from '../../static/img/cross.svg'
import './Likes.scss'
import { observer } from 'mobx-react-lite';
import { useContext, useEffect, useState } from 'react';
import { Context } from '../../main.jsx';
import { Link } from 'react-router-dom';
import Button from '../Components/BtnAddToBasket/Button.jsx';

const Likes = observer(() => {
    const {liked} = useContext(Context)
    const [likedState, setLikedState] = useState(liked.Liked)
    const [storeState, setStoreState] = useState(JSON.parse(localStorage.getItem('likes')))
    const [typeBarState, setTypeBarState] = useState(JSON.parse(localStorage.getItem('typebar')))


    console.log(typeBarState)

    const removeCard = (id) => {
        let orders  = []
        storeState.map(item => {
            if (item.id != id){
                orders.push(item)
            }
        })
        liked.setLiked(orders)
        setStoreState(orders)
        localStorage.removeItem('likes')
        localStorage.setItem('likes', JSON.stringify(orders))
        console.log(likedState)
    }

    useEffect(() => {
        setLikedState(liked.Liked)
        setStoreState(JSON.parse(localStorage.getItem('likes')))
    }, [])

    return (
        <>
        <div className='Basket__Container'>
            <div className='Basket__Title'>
                <h1>Избранное</h1>
            </div>
            
                <div className='Basket__Wrapper' > 
                
                <div className='Basket__Wrapper-Flex'>
                    
                    {storeState.map(item => 
                        <>
                        <div style={{display:'flex', gap: '20px'}}>
                        <div className='Basket__Wrapper-Flex-Item' style={{ background: 'white', marginBottom: '20px', width: '750px', borderRadius: '20px'}}>
                            <div className="Basket__flex-item-content" style={{display: 'flex', position: 'relative'}}>
                                <Link to = {"/product/" + item.id}>
                                <div className='Basket__Wrapper-Flex-Card-Img'>
                                    <img src={'http://localhost:7000/' + item.img[0]} width='200' height='200' style={{padding: '20px'}}/>
                                </div>
                                </Link>
                                <div className='Basket__Wrapper-Flex-Items'>
                                    <div className='Basket__Wrapper-Flex-Items-Title'>
                                        <h1 style={{maxWidth: '375px'}}>{item.name}</h1>
                                        <img src={cross}  style={{position: 'absolute', right: '20px', cursor: "pointer"}} onClick={() => removeCard(item.id)}/>
                                    </div>

                                    <div className='Basket__Wrapper-Flex-Items-Text'>
                                        <p>{item.description}</p>
                                    </div>

                                    <div className='Basket__Wrapper-Flex-Items-Price'>
                                        <p style={{paddingTop: '10px'}}>{item.price} Руб.</p>
                                        <div style={{marginRight: '20px'}}>
                                            <Button
                                                product={item}
                                            />
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
                storeState.length !== 0
                ?
                <div className='Basket__TypeBar' style={{borderRadius: '20px'}}>
                        {
                            typeBarState.map(el => 
                                <>
                                    <h1>
                                        {el.name}
                                    </h1>
                                </>
                                )
                        }   
                </div>  
                    :
                    <div style={{margin: '0 auto', marginTop: '250px', fontSize: '26px'}}>
                        У вас пока что нет избранных!
                    </div>
                    }
                    </div>
          
                </div>
        </>
    );
});

export default Likes;