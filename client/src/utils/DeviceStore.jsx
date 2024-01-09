import { makeAutoObservable } from "mobx";

export default class DeviceStore {
    constructor() { 
        this._devices = [
            
        ]
        makeAutoObservable(this)
    }

    setAddDevice(product) {
        this._devices.push(product)
        console.log("Added device")
    }

    setDevices(devices){
        this._devices = devices
    }

    get devices(){
        return this._devices 
    }
}
