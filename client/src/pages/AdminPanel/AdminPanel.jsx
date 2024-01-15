import { useState } from 'react';
import './AdminPanel.scss'
import { createNewProduct } from '../../http/productApi';

const AdminPanel = () => {

    const [sortParams, setSortParams] = useState({
        name: "",
        price: 0,
        features: [],
        compositions: [],
        description: '',
        sizes: '',
        img: []
    })

    const [features, setFeatures] = useState('')
    const [composition, setComposition] = useState('')

    const handleChangeFeatures = (e) => {
        setFeatures(e.target.value)
    }

    const handleChangeComposition = (e) => {
        setComposition(e.target.value)
    }


    const handleImage = (e) =>{
        setSortParams({...sortParams, img: [...sortParams.img, e.target.files[0]]})
    }

    const addFeatures = (e) => {
        e.preventDefault()
        setSortParams({
            ...sortParams, features: [...sortParams.features, features]
        })
        setFeatures('')
    }

    const addComposition = (e) => {
        e.preventDefault()
        setSortParams({
            ...sortParams, compositions: [...sortParams.compositions, composition]
        })
        setComposition('')
    }


    const changeSortParams = (event) =>{
        console.log(sortParams)
        setSortParams({
            ...sortParams, [event.target.name]: event.target.value
        })
        
    }

   const  handleChangeParams = (e) => {
        setSortParams({...sortParams, [e.target.name]: e.target.value})
   }

   const create = async(name, price, sizes, gender, type,  description, compositions, features, img) => {
    try{
        const formData = new FormData()
        formData.append('name', name)
        formData.append('price', price)
        formData.append('sizes', sizes)
        formData.append('gender', gender)
        formData.append('type', type)
        formData.append('description', description)
        formData.append('compositions', compositions)
        formData.append('features', features)
        for (let i = 0; i < 4; i++){
            formData.append('files', img[i])
        }
        await createNewProduct(formData)
    }
    catch(e){
        console.log(e)
    }
}

    return (
        <>
            <div className="Admin__Container">
                <div className='Admin__Wrapper' style={{display: 'flex', gap: '79px'}}>
                    <div className="Admin__Left-Panel">
                        <div className="Admin__Title">
                            <h1>Загрузите изображение</h1>
                        </div>
                        <div className="Admin__imgUpload">
                            <input type="file" name='file' onChange={(e) => {handleImage(e)}} />
                                {sortParams.img.map((item) => {
                                    return(
                                        <>
                                        {item.name}
                                        </>
                                    )
                                })}
                        </div>

                        <div className="Admin__left-Panel-Price">
                            цена товара
                            <input onChange={(e) => { handleChangeParams(e)}}  value={sortParams.price} name='price' className="Admin__Center-Input" placeholder='Цена товара'/>
                            размеры
                            <input onChange={(e) => { handleChangeParams(e)}}  value={sortParams.sizes} name='sizes' className="Admin__Center-Input" placeholder='имеющиеся размеры'/>
                        </div>
                    </div>

                    <div className="Admin__Center-Panel">
                        <div className="Admin__Center-Panel-Up">
                            <div className="Admin__Center-Panel-Up-Title">
                                <h1>Дайте название товару</h1>
                            </div>
                            <div className="Admin__Center-Panel-Up-Input">
                                <input onChange={(e) => { handleChangeParams(e)}}  value={sortParams.name} name='name' className="Admin__Center-Input" placeholder='Название товара...'/>
                            </div>
                        </div>

                        <div className="Admin__Center-Panel-Down">
                            <div className="Admin__Center-Panel-Up-Title">
                                <h1>Введите краткое описание</h1>
                            </div>
                            {/* <div className="Admin__Center-Panel-Up-Block">
                                <h1>Описание товара...</h1>
                            </div> */}
                            <input onChange={(e) => { handleChangeParams(e)}}  value={sortParams.description} name="description" type='text' className="Admin__Center-Panel-Up-Block" placeholder='Описание товара...'/>
                        <div style={{textAlign: 'center'}}>
                            <button className="Admin__Center-Button" onClick={() => {create(sortParams.name, sortParams.price, sortParams.sizes, sortParams.gender, sortParams.type,  sortParams.description, sortParams.compositions, sortParams.features, sortParams.img)}}>
                                Добавить товар
                            </button>
                        </div>
                            
                        </div>
                    </div>

                    <div className="Admin__Right-Panel-Up-Block">
                        <div className="Admin__Right-Panel-Up-Title">
                            <h1>
                                Опишите особенности
                            </h1>
                        </div>
                            <div className="Admin__Right-Panel-Up-Input">
                                <input onChange={(e) => { handleChangeFeatures(e)}}  value={features} name='features' className="Admin__Right-Input" placeholder='Название товара...'/>
                                <button onClick={addFeatures}>add features</button>
                                {sortParams.features.map((item) => {
                                    return(
                                        <>
                                        {item}
                                        </>
                                    )
                                })}
                            </div>
                        </div>

                    <div className="Admin__Right-Panel-Up-Block">
                        <div className="Admin__Right-Panel-Up-Title">
                            <h1>
                            Состав товара
                            </h1>
                        </div>
                            <div className="Admin__Right-Panel-Up-Input">
                                <input  onChange={(e) => { handleChangeComposition(e)}} value={composition} name='compositions' className="Admin__Right-Input" placeholder='Название товара...'/>
                                <button onClick={addComposition}>add features</button>
                                {sortParams.compositions.map((item) => {
                                    return(
                                        <>
                                        {item}
                                        </>
                                    )
                                })}
                            </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AdminPanel;