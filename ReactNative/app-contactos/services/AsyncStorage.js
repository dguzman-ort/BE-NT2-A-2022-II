import AsyncStorage from "@react-native-async-storage/async-storage";

const isObject = value => typeof value === 'object'

const storeData = async (key, value) =>{
    try {
        if (isObject(value)){
            const jsonvalue = JSON.stringify(value)
            await AsyncStorage.setItem(key, jsonvalue)
        }else{
            await AsyncStorage.setItem(key, value)
        }
    } catch (error) {
        
    }
}


const getData = async(key) => {
    try {
        const jsonvalue = await AsyncStorage.getItem(key)
        return jsonvalue ? JSON.parse(jsonvalue) : null
    } catch (error) {
        // error handling
    }
}

const clearAll = async() => {
    try {
        await AsyncStorage.clear()
    } catch (error) {
        
    }
}

export default {
    storeData,
    getData,
    clearAll
}