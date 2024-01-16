import { $host } from "./index";

export const addType = async(type) => {
    console.log(type, 'fdsfgsdgsd')
    const {data} = await $host.post("api/type/addType", {type})
    return {data}
}
