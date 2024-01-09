import { $host } from "./index";

export const getProducts = async(offset, type) => {
    const {data} = await $host.get('api/product/getProductList?offset=' + offset, type)
    return {data}
}

export const getCurrentProducts = async(id) => {
    const {data} = await $host.get('api/product/getCurrentProduct?id=' + id)
    return {data}
}

