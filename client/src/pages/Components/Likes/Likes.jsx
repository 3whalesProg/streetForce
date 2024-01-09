import '../Basket/Basket.scss';
import basket from '../Basket/FakeData.jsx'
import winter from '../../../static/img/winter.png'
import cross from '../../../static/img/cross.svg'
import liked from '../../../static/img/likes.png'
import Footer from '../footer/Footer.jsx';
import likes from './FakeData.jsx'
import sneakers from '../../../static/img/sneakers.png'
import serdce from '../../../static/img/like.svg'
import './Likes.scss'

const Basket = () => {
    return (
        <>
        <div className='Basket__Container'>
            <div className='Basket__Title'>
                <h1>Моя Корзина</h1>
            </div>
           <div className='Basket__Wrapper' > 
                <div className='Basket__Wrapper-Flex'>
                    {basket.map(item => 
                        <>
                        <div style={{display:'flex', gap: '20px'}}>
                        <div className='Basket__Wrapper-Flex-Item' style={{ background: 'white', marginBottom: '20px'}}>
                                <div className='Basket__Wrapper-Flex-Card-Img'>
                                    <img src={winter} width='200' height='200' style={{padding: '20px'}}/>
                                </div>

                                <div className='Basket__Wrapper-Flex-Items'>
                                    <div className='Basket__Wrapper-Flex-Items-Title'>
                                        <h1>{item.name}</h1>
                                        <img src={cross}  style={{marginRight: '15px', cursor:'pointer'}}/>
                                    </div>

                                    <div className='Basket__Wrapper-Flex-Items-Text'>
                                        <p>{item.descr}</p>
                                    </div>

                                    <div className='Basket__Wrapper-Flex-Items-Price'>
                                        <p>{item.price} Руб.</p>
                                        <img src={liked} height='20' style={{marginRight: '15px', cursor:'pointer'}}/>
                                    </div>
                                </div>
                                
                            </div>
                        </div>                          
                        </>
                        )}
                </div>


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


           </div>
        </div>
        <Footer/>
        </>
    );
};

export default Basket;