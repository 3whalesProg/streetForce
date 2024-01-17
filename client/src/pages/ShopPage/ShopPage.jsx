import banner from '../../static/img/banner.png'
import './ShopPage.scss'
import { useEffect, useState } from 'react'
import { getProducts } from '../../http/productApi'
import ProductList from './ProductList'
import { getType } from '../../http/typeApi'
import { getBrand } from '../../http/brandApi'


const ShopPage = () => {
    const [productList, setProductList] = useState([])
    const [offset, setOffset] = useState(0)
    const [types, setTypes] = useState([])
    const [brands, setBrands] = useState([])
    const [sortParams, setSortParams] = useState({
        brandId: "",
        typeId: "",
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

    const getAllTypes = async() => {
        try{
            await getType()
            .then(response => {
                console.log(response.data)
                setTypes(response.data)
            })
        }
        catch(e){
            console.log(e)
        }
    }

    const getAllBrand = async() => {
        try{
            await getBrand()
            .then(response => {
                setBrands(response.data)
            })
        }
        catch(e){
            console.log(e)
        }
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
        setOffset(offset + 8)
        getProductList(offset + 8)
    }

    const getProductList = async(offset) => {
        try{
            await getProducts(offset, sortParams.typeId, sortParams.brandId, sortParams.gender)
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
        getAllTypes()
        getAllBrand()
        getProductList(0, sortParams.type)
        setOffset(8)
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
                        <h1 style={{wordSpacing: '10px'}}>КАТАЛОГ ТОВАРОВ</h1>
                        <div className="ShopPage__gender">
                            <div className="ShopPage__gender-list">
                                <button name="gender" value='Мужчины' className='ShopPage__gender-button' onClick={changeSortParams}>Мужчины</button>
                                <button name="gender" value = "Женщины" className='ShopPage__gender-button' onClick={changeSortParams}>Женщины</button>
                            </div>
                        </div>
                        <div className="ShopPage__sort">
                            <ul className="ShopPage__sort-list">
                                {/* <li className="ShopPage__sort-item">
                                    <select name="sort" className='ShopPage__sort-input'>
                                            <option name="sort" disabled selected>Сортировка</option>
                                            <option name="sort">По цене от минимальной</option>
                                            <option name="sort">По цене от максимальной</option>
                                    </select>
                                </li> */}
                                <li className="ShopPage__sort-item">
                                    <select name="typeId" className='ShopPage__sort-input' onChange={changeSortParams}>
                                            <option name="typeId" disabled selected>Тип одежды</option>
                                            {types.map((type) => {
                                                return(
                                                    <option name="typeId" value={type.id}>{type.name}</option>
                                                )
                                            })}
                                    </select>
                                </li>
                                <li className="ShopPage__sort-item">
                                    <select name="brandId" className='ShopPage__sort-input' onChange={changeSortParams}>
                                        <option name="brandId" disabled selected>Бренд</option>
                                        {brands.map((brand) => {
                                                return(
                                                    <option name="brandId" value={brand.id}>{brand.name}</option>
                                                )
                                            })}
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