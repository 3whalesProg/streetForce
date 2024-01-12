import like from '../../../static/img/like.svg'
import { useContext, useEffect, useState } from "react";
import { Context } from '../../../main.jsx';
import ilikes from '../../../static/img/ilikes.svg' 


const LikeButton = ({product}) => { //input product {name: "", price: 0, img: [], descr: ""}
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
    {isLiked(product.id) ?
                    <img src={ilikes} alt="" srcset="" className="ShopPage__like" onClick={() => {removeLike(product)}}/>
                    : 
                    <img src={like} alt="" srcset="" className="ShopPage__like" onClick={() => {addLike(product)}} />
    }
    </>
    )
}

export default LikeButton;