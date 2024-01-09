import axios from 'axios'

const $host = axios.create({
    baseURL: 'http://192.168.1.191:7000/'
})

export{
    $host
}