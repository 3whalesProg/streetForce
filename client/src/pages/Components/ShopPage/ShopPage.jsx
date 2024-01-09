import banner from '../../../static/img/banner.png'
import './ShopPage.scss'
import Footer from '../footer/Footer'
import { useEffect, useState } from 'react'
import { getProducts } from '../../../http/productApi'
import ProductList from './ProductList'
import { useSearchParams } from 'react-router-dom'

const ShopPage = () => {
    const [productList, setProductList] = useState([])
    const [offset, setOffset] = useState(0)
    const [sortParams, setSortParams] = useState({
        brand: "",
        type: "",
        sort: "",
    })

    const changeSortParams = (event) =>{
        console.log('сработали параметры')
        setSortParams({
            ...sortParams, [event.target.name]: event.target.value
        })
        
    }

    const showMore = (event) =>{
        event.preventDefault()
        setOffset(offset + 2)
        getProductList(offset)
    }

    const getProductList = async(offset, type) => {
        try{
            if(!type){
            await getProducts(offset)
            .then(response => {
                const res = response.data.rows
                console.log(res)
                setProductList([...productList, ...res])
            })}
            if(type){
                await getProducts(offset, type)
                .then(response => {
                    const res = response.data.rows
                    setProductList([...productList, ...res])
                })

            }

        }
        catch(e){
            console.log(e)
        }
    }


    useEffect(() =>{
        getProductList(offset)
        setOffset(offset + 2)
    }, [])

    useEffect(() =>{
        getProductList(offset, sortParams.type)
        setOffset(2)
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
                                <li className="ShopPage__gender-item">
                                    <input className="ShopPage__gender-mans" name="gender"type="radio" id = 'radio_mans'/>
                                    <label htmlFor="radio_mans">Мужчины</label>
                                </li>
                                <li className="ShopPage__gender-item">
                                    <input className="ShopPage__gender-womans"name="gender" type="radio" id = 'radio_womans'/>
                                    <label htmlFor="radio_womans">Девушки</label>
                                </li>
                            </div>
                        </div>
                        <div className="ShopPage__sort">
                            <ul className="ShopPage__sort-list">
                                <li className="ShopPage__sort-item">
                                    <select name="sort">
                                            <option name="sort" disabled selected>Сортировка</option>
                                            <option name="sort">По цене от минимальной</option>
                                            <option name="sort">По цене от максимальной</option>
                                    </select>
                                </li>
                                <li className="ShopPage__sort-item">
                                    <select name="type" onChange={changeSortParams}>
                                        <option name="type" disabled selected>Тип одежды</option>
                                        <option name="type" value="sneakers">Кросы</option>
                                        <option name="type" value="Sweater">Толстовки</option>
                                        <option name="type">Рубашки</option> {/*Подтянуть с базы данных */}
                                    </select>
                                </li>
                                <li className="ShopPage__sort-item">
                                    <select name="brand">
                                        <option name="brand" disabled selected>Бренд</option>
                                        <option name="brand">Nike</option>
                                        <option name="brand">Puma</option>
                                        <option name="brand">StreetForce</option> {/*Подтянуть с базы данных */}
                                    </select>
                                </li>
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
                                <div className="Shop__Page-Pagination-Item">
                                    <button className="pagintaion"><p className='pagination-text'>1</p></button>
                                    <button className="pagintaion" ><p className='pagination-text'>2</p></button>
                                    <button className="pagintaion"><p className='pagination-text'>3</p></button>
                                    <button className="pagintaion"><p className='pagination-text'>4</p></button>
                                </div>

                                <div className="Shop__Page-Pagination-Item">
                                        <button className='Shop__Page-Pagination-Button' onClick={showMore}>Больше</button>
                                </div>

                                <div className="Shop__Page-Pagination-Item">
                                    <button className='Shop__Page-Pagination-Stoped'>Назад</button>
                                    <button className='Shop__Page-Pagination-Stoped'>Больше</button>
                                </div>
                        </div>
                        <img className='ShopPage-banner' src={banner} alt="" />     
                </div>
            </div>
        </div>
        <Footer/>
        </>
    );
};

export default ShopPage;