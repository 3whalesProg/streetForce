import { Link } from "react-router-dom"
import winter from '../../../static/img/winter.png'

const ProductList = ({productListProps}) =>{

    console.log(productListProps, 'props')
    return(
        <>
        {productListProps.map(product => {
            return(
                <>
                <Link to={`/product/${product.id}`} style={{textDecoration: 'none', color: 'black'}}>
                <li className="ShopPage__Product-card">
                    <img className='ShopPage__Product-card-img' src={'http://192.168.1.191:7000/' + product.img[0]} width={"292"} height={"292"}/>
                    <p className='ShopPage__Product-card-price'>{product.price} руб.<div className=""></div></p>
                    <p className='ShopPage__Product-card-title'>{product.name}</p>
                </li>
                </Link>
                </>
            )
        })}
        </>
    )
}

export default ProductList;