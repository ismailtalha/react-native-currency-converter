import {baseUrl , key} from '../constants/api'


const currencyapi = (from,to) => { 
    return new Promise((resolve, reject) => {
        let path = "https://api.fastforex.io/" + "fetch-one?from=" + from + "&to=" + to + "&api_key=" + "ea4c6746cd-683f9a8933-qzl0bf"
        console.log(path)
        fetch(path)
            .then(response => response.json())
            .then((responseJson) => {
               resolve(responseJson) 
    
            })
            .catch((error) => {
                reject(err)
            })
    })
   
}

export default currencyapi

