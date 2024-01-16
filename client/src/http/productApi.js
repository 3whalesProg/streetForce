import { $host } from "./index";


export const getProducts = async(offset, type, brand, gender) => {
    const {data} = await $host.get('api/product/getProductList?offset=' + offset + '&type=' + type + '&brand=' + brand + '&gender=' + gender)
    return {data}
}

export const getCurrentProducts = async(id) => {
    const {data} = await $host.get('api/product/getCurrentProduct?id=' + id)
    return {data}
}

export const createNewProduct = async(product) => {
    const {data} = await $host.post('api/product/createProduct', product)
    return {data}
}

export const addType = async(type) => {
    console.log(type, 'fdsfgsdgsd')
    const {data} = await $host.post("api/type/addType", {type})
    return {data}
}

export const addBrand = async(brand) => {
    console.log(brand, 'Новый брэнд')
    const {data} = await $host.post("api/brand/addBrand", {brand})
    return {data}
}


