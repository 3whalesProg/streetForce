import { useState } from 'react';
import './AdminPanel.scss'

const AdminPanel = () => {

    const [sortParams, setSortParams] = useState({
        name: "",
        features: "",
        compositions: '',
        descr: ''
    })


    const changeSortParams = (event) =>{
        console.log(sortParams)
        setSortParams({
            ...sortParams, [event.target.name]: event.target.value1
        })
        
    }

   const  handleChangeParams = (e) => {
        setSortParams({...sortParams, [e.target.name]: e.target.value})
   }

    return (
        <>
            <div className="Admin__Container">
                <div className='Admin__Wrapper' style={{display: 'flex', gap: '79px'}}>
                    <div className="Admin__Left-Panel">
                        <div className="Admin__Title">
                            <h1>Загрузите изображение</h1>
                        </div>
                        <div className="Admin__DragAndDrop">
                            <h1 className='Admin__DragAndDrop-Text'>Переместите изображение в эту область</h1>
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
                            <input onChange={(e) => { handleChangeParams(e)}}  value={sortParams.descr} name="descr" type='text' className="Admin__Center-Panel-Up-Block" placeholder='Описание товара...'/>
                        <div style={{textAlign: 'center'}}>
                            <button className="Admin__Center-Button" onClick={changeSortParams}>
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
                                <input onChange={(e) => { handleChangeParams(e)}}  value={sortParams.features} name='features' className="Admin__Right-Input" placeholder='Название товара...'/>
                            </div>
                        </div>

                    <div className="Admin__Right-Panel-Up-Block">
                        <div className="Admin__Right-Panel-Up-Title">
                            <h1>
                            Состав товара
                            </h1>
                        </div>
                            <div className="Admin__Right-Panel-Up-Input">
                                <input  onChange={(e) => { handleChangeParams(e)}} value={sortParams.compositions} name='compositions' className="Admin__Right-Input" placeholder='Название товара...'/>
                            </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AdminPanel;