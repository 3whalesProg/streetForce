import { $host } from "./index";

export const getProducts = async(offset, type, brand, gender) => {
    console.log(type)
    console.log('api/product/getProductList?offset=' + offset, {type})
    const {data} = await $host.get('api/product/getProductList?offset=' + offset + '&type=' + type + '&brand=' + brand + '&gender=' + gender)
    return {data}
}

export const getCurrentProducts = async(id) => {
    const {data} = await $host.get('api/product/getCurrentProduct?id=' + id)
    return {data}
}

