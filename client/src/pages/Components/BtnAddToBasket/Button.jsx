import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { Context } from "../../../main";
import { useState } from "react";
import { useEffect } from "react";

const Button = observer(({product}) => {

    const {device} = useContext(Context)
    const [inBasket, setInBasket] = useState(false)


    const hasThisId = (id) => {
        let hasId = false
        device.devices.forEach(product => {
            if (product.id == id){
                hasId = true
            }
        });
        return hasId
    }
    
    const addCard = () => {
        if (inBasket){
            alert('В вашей корзине уже есть такой товар')
        }
        else{
            device.setAddDevice(product)
            setInBasket(true)
        }
    }

    useEffect(() => {
            setInBasket(false)
    }, [inBasket])

    return (
        <div>
            {hasThisId(product.id) 
            ?
            <button className="Product__Page-Size-Btn" disabled = {true}>Товар в корзине</button>
            : 
            <button className="Product__Page-Size-Btn" onClick={addCard}>Добавить в корзину</button> }
        </div>
    );
});

export default Button;