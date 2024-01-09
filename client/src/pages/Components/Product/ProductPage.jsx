import {  Image } from "react-bootstrap";
import './ProductPage.scss'
import Footer from "../footer/Footer";
import { observer } from "mobx-react-lite";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../../main";
import { getCurrentProducts } from "../../../http/productApi";
import { useLocation } from "react-router-dom";



const ProductPage = observer(() => {

    const location = useLocation()

    const {device} = useContext(Context)
    const [inBasket, setInBasket] = useState(false)
    const [img, setImg] = useState([])

    //Получаем состояние текущего товара
    const [deviceWatch, setDeviceWatch] = useState({})

    const hasThisId = (id) => {
        let ger = false
        console.log(deviceWatch)
        device.devices.forEach(product => {
            
            console.log(product.id, 'product id')
            console.log(deviceWatch.id, 'wathed id')
            if (product.id == id){
                console.log('есть товар в корзине')
                ger = true
            }
        });
        console.log(ger, 'ger')
        return ger
    }

    const getProduct = async(id) => {
        try{
            await getCurrentProducts(id)
            .then(response => {
                const res = {...response.data}
                setDeviceWatch(res)
                setInBasket(hasThisId(res.id))
                setImg(res.img)
            })
        }
        catch(e){
            console.log(e)
        }
    }


    const addCard = () => {
        if (inBasket){
            alert('В вашей корзине уже есть такой товар')
        }
        else{
            device.setAddDevice(deviceWatch)
            setInBasket(true)
        }

    }

    
    useEffect(() => {
        const productId = location.pathname.split('/')[2]
        getProduct(productId)
    }, [])

    return (
        <>
        <div className="Product__Page-Container">
            <div className="Product__Page-Wrapper">
              <div className="Product__Page-Info">
                <div className="Product__Page-Slider">
                        <Image width={300} height={300} src={'http://192.168.1.191:7000/' + img[0]} style={{marginRight: '110px', marginLeft: '110px'}} />
                </div>
                <div>
                        <div key={deviceWatch.id} className="Product__Page-Size-Main">
                                <div className="Product__Page-Size-Category">
                                    <h1 className="Product__Page-Size-Title">{deviceWatch.name}</h1>
                                    <p className="Product__Page-Size-Price">{deviceWatch.price} руб.</p>
                                </div>

                            <div className="Product__Page-Size">
                                <p className='Product__Page-Size-Choise' style={{marginRight: '20px'}}>Выберете размер</p>
                                <p className="Product__Page-Size-List">
                                    <span>EU</span>
                                    <span>US</span>
                                    <span>RUS</span>
                                    <span>СМ</span>
                                </p>
                           </div>
                            <div className="Product__Page-Size-Button">
                                <button className="button_size">39</button>
                                <button className="button_size">40</button>
                                <button className="button_size">41</button>
                                <button className="button_size">42</button>
                                <button className="button_size">43</button>
                                <button className="button_size">44</button>
                            </div>
                            <div>
                                <p style={{marginTop: '20px'}}>
                                    Не нашли подходящего размера? Подберем его для вас!
                                </p>
                            </div>
                            <div className="Product__Page-Size-Btn-Block">
                                {inBasket ? <button className="Product__Page-Size-Btn" disabled = {true}>Товар в корзине</button> : <button className="Product__Page-Size-Btn" onClick={addCard}>Добавить в корзину</button> }
                                {/* <button className="Product__Page-Size-Btn" onClick={addCard}>Добавить в корзину</button> */}
                                <button className="Product__Page-Size-Btn">Подобрать размер</button>
                            </div>
                            <div className="Product__Page-Info-Title">
                                <h1 style={{borderBottom: '2px solid black', paddingLeft: '10px', paddingRight: '10px', paddingBottom: '5px', cursor:'pointer'}}>О товаре</h1>
                                <h1  style={{borderBottom: '2px solid lightgrey', paddingLeft: '20px', paddingRight: '20px' , paddingBottom: '5px', cursor:'pointer'}}>Доставка и оплата</h1>
                            </div>
                            <div className="Product__Page-Info-Text-Top">
                                <h1 style={{marginTop: '30px',marginLeft: '65px', fontWeight: 'bold'}}>Описание товара</h1>
                            </div>
                        </div>
                </div>
              </div>
              <div className="Product__Page-Info-Text-Bottom">
                <p>{deviceWatch.features}</p>
              </div>
            </div>     
        </div>
        <Footer/>
        </>
    );
});

export default ProductPage;