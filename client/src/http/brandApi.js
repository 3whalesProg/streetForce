import { $host } from "./index.js";

export const addBrand = async(brand) => {
    console.log(brand, 'Новый брэнд')
    const {data} = await $host.post("api/brand/addBrand", {brand})
    return {data}
}
