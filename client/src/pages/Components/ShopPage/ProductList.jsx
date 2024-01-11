import { Link } from "react-router-dom"
import like from '../../../static/img/like.svg'
import { useContext, useEffect, useState } from "react";
import { Context } from '../../../main.jsx';
import ilikes from '../../../static/img/ilikes.svg' 

const ProductList = ({productListProps}) =>{
    const {liked} = useContext(Context)
    const [newLike, setNewLike] = useState(false)

    const addLike = (product) => {
        liked.setAddLiked(product)
        setNewLike(true)
    }

    const removeLike = (product) => {
        let ger = []
        for (let i in liked.Liked){
            if (product.id != liked.Liked[i].id){
                ger.push(liked.Liked[i])
            }
        }
        liked.setLiked(ger)
        setNewLike(true)
    }

    const isLiked = (id) => {
        for (let i in liked.Liked){
            if (id == liked.Liked[i].id){
                return true
            }
        }
        return false
    }

    useEffect(() => {
        setNewLike(false)
    }, [newLike])

    return(
        <>
        {productListProps.map(product => {
            return(
                <>
                <li className="ShopPage__Product-card">
                    <Link to={`/product/${product.id}`} style={{textDecoration: 'none', color: 'black'}}>
                    <img className='ShopPage__Product-card-img' src={'http://localhost:7000/' + product.img[0]} width={"292"} height={"292"}/>
                    </Link>
                    {isLiked(product.id) ?
                    <img src={ilikes} alt="" srcset="" className="ShopPage__like" onClick={() => {removeLike(product)}}/>
                    : 
                    <img src={like} alt="" srcset="" className="ShopPage__like" onClick={() => {addLike(product)}} />
                    }
                    <Link to={`/product/${product.id}`} style={{textDecoration: 'none', color: 'black'}}>
                    <p className='ShopPage__Product-card-price'>{product.price} руб.<div className=""></div></p>
                    <p className='ShopPage__Product-card-title'>{product.name}</p>
                    </Link>
                </li>
                </>
            )
        })}
        </>
    )
}

export default ProductList;