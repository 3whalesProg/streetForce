import banner from '../../static/img/banner.png'
import './ShopPage.scss'
import { useEffect, useState } from 'react'
import { getProducts } from '../../http/productApi'
import ProductList from './ProductList'

const ShopPage = () => {
    const [productList, setProductList] = useState([])
    const [offset, setOffset] = useState(0)
    const [sortParams, setSortParams] = useState({
        brand: "",
        type: "",
        gender: "",
        sort: "",
    })
    const [newSortParams, setNewSortParams] = useState(false)

    const changeSortParams = (event) =>{
        setNewSortParams(true)
        setSortParams({
            ...sortParams, [event.target.name]: event.target.value
        })
        
    }

    const removeSortParams = (targetValue) =>{
        for (let i in Object.keys(sortParams)){
            if (targetValue == Object.values(sortParams)[i]){
                setSortParams({...sortParams, [Object.keys(sortParams)[i]]: ""} )
                setNewSortParams(true)
            }
        }
    }

    const showMore = (event) =>{
        event.preventDefault()
        setOffset(offset + 2)
        getProductList(offset + 2)
    }

    const getProductList = async(offset) => {
        try{
            await getProducts(offset, sortParams.type, sortParams.brand, sortParams.gender)
            .then(response => {
                const res = response.data.rows
                if (newSortParams){
                    setProductList([...res])
                    setNewSortParams(false)
                    
                }
                else{
                    setProductList([...productList, ...res])
                }
                
            })}        
        catch(e){
            console.log(e)
        }
    }


    useEffect(() =>{
        getProductList(0, sortParams.type)
        setOffset(2)
    }, [])

    useEffect(() =>{
        setOffset(0)
        getProductList(0)
    }, [sortParams])

    return (
        <>
        <div className="ShopPage__container">
            <div className="ShopPage_wrapper">
                <div className="ShopPage__content"> 
                        <img className='ShopPage-banner' src={banner} alt=""/>
                        <h1>ТОВАРЫ</h1>
                        <div className="ShopPage__gender">
                            <div className="ShopPage__gender-list">
                                <button name="gender" value='Man' className='ShopPage__gender-button' onClick={changeSortParams}>Мужчины</button>
                                <button name="gender" value = "Woman" className='ShopPage__gender-button' onClick={changeSortParams}>Женщины</button>
                            </div>
                        </div>
                        <div className="ShopPage__sort">
                            <ul className="ShopPage__sort-list">
                                <li className="ShopPage__sort-item">
                                    <select name="sort" className='ShopPage__sort-input'>
                                            <option name="sort" disabled selected>Сортировка</option>
                                            <option name="sort">По цене от минимальной</option>
                                            <option name="sort">По цене от максимальной</option>
                                    </select>
                                </li>
                                <li className="ShopPage__sort-item">
                                    <select name="type" className='ShopPage__sort-input' onChange={changeSortParams}>
                                        <option name="type" disabled selected>Тип одежды</option>
                                        <option name="type" value="sneakers">Кросы</option>
                                        <option name="type" value="Sweater">Толстовки</option>
                                        <option name="type">Рубашки</option> {/*Подтянуть с базы данных */}
                                    </select>
                                </li>
                                <li className="ShopPage__sort-item">
                                    <select name="brand" className='ShopPage__sort-input' onChange={changeSortParams}>
                                        <option name="brand" disabled selected>Бренд</option>
                                        <option name="brand" value="Nike">Nike</option>
                                        <option name="brand">Puma</option>
                                        <option name="brand">StreetForce</option> {/*Подтянуть с базы данных */}
                                    </select>
                                </li>
                            </ul>
                        </div>
                        <div className="ShopPage__sortParams">
                            <ul className="ShopPage__sortParams-list">
                                {Object.values(sortParams).map(item => {
                                    if (item){
                                    return(
                                        <>
                                        <li className="ShopPage__sortParams-item" onClick={() => {removeSortParams(item)}}>
                                            {item}
                                        </li>
                                        </>
                                    )}
                                })}
                            </ul>
                        </div>
                        <div className='ShopPage__Product'>
                            <ul className="ShopPage__Product-list">
                                <ProductList
                                productListProps={productList}
                                />
                            </ul>
                        </div>
                        <div className='Shop__Page-Pagination'>
                            <button className='Shop__Page-Pagination-Button' onClick={showMore}>Больше</button>
                        </div>
                        <img className='ShopPage-banner' src={banner} alt="" />     
                </div>
            </div>
        </div>
        </>
    );
};

export default ShopPage;